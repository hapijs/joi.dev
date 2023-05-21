const { execFileSync } = require('child_process');
const fs = require('fs/promises');
const _ = require('lodash');
const Semver = require('semver');

const { modules } = require('./modules');
const { slugger, marked } = require('./markdown');
const {
  getExisting,
  getModuleStoragePath,
  getModuleInfoPath,
} = require('./paths');
const { getHtmlContent, getRawContent, getRepoInfo } = require('./gh');
const { generateChangelog } = require('./generateChangelog');

function buildTree(headings) {
  const rootNode = { id: null, text: null, children: [] };
  const stack = [{ node: rootNode, depth: -1 }];

  for (const { text, depth } of headings) {
    while (stack.at(-1).depth >= depth) {
      stack.pop();
    }
    const node = {
      id: slugger.slug(text),
      text: text.replace(/\(([^#*]+)\)/g, '()').replace(/(^`)|(`$)/g, ''),
    };
    const parentPath = `${stack
      .slice(1)
      .map((item) => item.node.text)
      .join('.')}.`;
    if (node.text.startsWith(parentPath)) {
      node.text = node.text.slice(parentPath.length);
    }
    node.text = marked.parseInline(node.text);
    const parentNode = stack.at(-1).node;
    if (parentNode.children) {
      parentNode.children.push(node);
    } else {
      parentNode.children = [node];
    }
    stack.push({ node, depth });
  }

  return rootNode;
}

const partsToLookFor = [
  { part: 'Introduction', test: /^Introduction$/ },
  { part: 'Usage', test: /^(General )?Usage$/ },
  { part: 'Advanced', test: /^Advanced$/ },
  { part: 'Example', test: /^Example$/ },
  { part: 'F.A.Q', test: /^F.A.Q$/ },
];

function getFilteredVersions(specs, versions) {
  const compatibilityVersions = Object.keys(specs.compatibility);
  const minVersion = _.min(compatibilityVersions);
  const prefilteredVersions = _.filter(versions, (v) =>
    Semver.satisfies(v, `>=${minVersion}`)
  );
  const publishedMajorVersions = _(prefilteredVersions)
    .map((v) => Semver.major(v))
    .uniq()
    .value();
  const semveredMajors = compatibilityVersions.map((v) => `${v}.0.0`);

  return publishedMajorVersions.map((major) => {
    const closestMatchingVersion = Semver.maxSatisfying(
      semveredMajors,
      `<= ${major}`
    );
    return {
      nodeVersions: closestMatchingVersion
        ? specs.compatibility[Semver.major(closestMatchingVersion)]
        : [] ?? [],
      fullVersion: Semver.maxSatisfying(prefilteredVersions, `^${major}`),
      major,
    };
  });
}

async function getInfo() {
  const repos = {};
  for (const [moduleName, specs] of Object.entries(modules)) {
    console.info(`Processing ${moduleName}`);

    await fs.mkdir(getModuleStoragePath(moduleName), {
      recursive: true,
    });

    const filePath = getModuleInfoPath(moduleName);

    const existing = await getExisting(filePath);

    // Get published versions from npm
    const versions = JSON.parse(
      execFileSync('npm', ['view', specs.package, 'versions', '--json'])
    );

    const currentModule = {
      name: moduleName,
      versions: [],
      versionsArray: [],
      docs: {},
      api: false,
    };
    repos[moduleName] = currentModule;

    // Keep only latest versions from majors listed in specs
    const filteredVersions = getFilteredVersions(specs, versions);

    for (const { nodeVersions, fullVersion, major } of filteredVersions) {
      if (existing?.docs[fullVersion]) {
        console.info(`[docs] Skipping ${moduleName}@${major}`);
        currentModule.versions.push(
          existing.versions.find((v) => v.name === fullVersion)
        );
        currentModule.versionsArray.push(fullVersion);
        currentModule.docs[fullVersion] = existing.docs[fullVersion];
        currentModule.api = true;
        continue;
      }

      console.info(`[docs] Processing ${moduleName}@${fullVersion}`);
      const tagName = `v${fullVersion}`;

      const api = await getRawContent(moduleName, 'API.md', tagName);
      currentModule.api = true;
      const chunks = marked.lexer(api.data);
      const parts = new Map([['Other', []]]);
      const headings = [];

      if (moduleName === 'joi') {
        parts.get('Other').push(...chunks);
        headings.push(...chunks.filter((chunk) => chunk.type === 'heading'));
      } else {
        let currentPart;
        for (const chunk of chunks) {
          if (chunk.type === 'heading') {
            const matchingPart = partsToLookFor.find(({ test }) =>
              test.test(chunk.text)
            );
            if (matchingPart) {
              currentPart = matchingPart.part;
              parts.set(currentPart, [chunk]);
              continue;
            } else {
              headings.push(chunk);
              currentPart = null;
            }
          }

          if (currentPart) {
            parts.get(currentPart).push(chunk);
          } else {
            parts.get('Other').push(chunk);
          }
        }
      }
      const [intro, usage, advanced, example, faq] = partsToLookFor.map(
        ({ part }) => {
          if (parts.has(part)) {
            return parts
              .get(part)
              .map((chunk) => chunk.raw)
              .join('');
          }
          return '';
        }
      );
      const rendered = marked.parse(
        parts
          .get('Other')
          .map((chunk) => chunk.raw)
          .join('')
      );
      currentModule.docs[fullVersion] = {
        menu: buildTree(headings),
        api: rendered,
        intro: marked.parseInline(intro),
        example,
        usage,
        faq,
        advanced,
        license: 'BSD',
      };
      currentModule.versionsArray.push(fullVersion);
      currentModule.versions.push({
        name: fullVersion,
        branch: tagName,
        license: 'BSD',
        node: nodeVersions,
      });
    }
    Semver.rsort(currentModule.versions);

    const readme = await getRawContent(moduleName, 'README.md');
    const repoInfo = await getRepoInfo(moduleName);
    currentModule.slogan = marked.parseInline(
      readme.data.match(/####(.*)/gm) !== null
        ? readme.data.match(/####(.*)/gm)[0].substring(5)
        : 'Description coming soon...'
    );
    currentModule.forks = repoInfo.data.forks_count;
    currentModule.stars = repoInfo.data.stargazers_count;
    currentModule.updated = repoInfo.data.pushed_at;
    currentModule.link = repoInfo.data.html_url;

    await fs.writeFile(filePath, JSON.stringify(currentModule, null, 2));

    await generateChangelog(moduleName);

    repos[moduleName] = {
      slogan: currentModule.slogan,
      link: currentModule.link,
      stars: currentModule.stars,
      forks: currentModule.forks,
      versions: currentModule.versions,
    };
  }

  const policies = [
    ['coc', 'CODE_OF_CONDUCT'],
    ['contributing', 'CONTRIBUTING'],
    ['license', 'LICENSE'],
    ['security', 'SECURITY'],
    ['styleguide', 'STYLE', 'assets'],
    ['support', 'SUPPORT'],
  ];

  await Promise.all(
    policies.map(async ([policy, fileName, repo]) => {
      await fs.writeFile(
        getModuleStoragePath(`${policy}.json`),
        JSON.stringify({
          [policy]: await getHtmlContent(`${fileName}.md`, repo),
        })
      );
    })
  );

  await fs.writeFile(
    getModuleStoragePath('modules.json'),
    JSON.stringify(repos, null, 2)
  );
}

getInfo();

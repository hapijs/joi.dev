import { execFileSync } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';

import { Semaphore, uniq } from 'es-toolkit';
import Semver from 'semver';

import { generateChangelog } from './generateChangelog.js';
import { getRawContent, getRepoInfo } from './gh.js';
import { modules } from './modules.js';
import {
  API_DIR,
  METADATA_DIR,
  MODULE_DIR,
  PACKAGE_JSON_PATH,
  POLICIES_GENERATED_DIR,
  getExisting,
  getModuleInfoPath,
  getModuleMarkdownPath,
  getModuleStoragePath,
} from './paths.js';

import type { ModuleInfo, ModuleSpec, VersionInfo } from './types.js';

const getFilteredVersions = (specs: ModuleSpec, versions: string[]): VersionInfo[] => {
  const compatibilityVersions = Object.keys(specs.compatibility);
  const minVersion = Math.min(...compatibilityVersions.map((v) => parseInt(v, 10)));
  const prefilteredVersions = versions.filter((v) => Semver.satisfies(v, `>=${minVersion}`));
  const publishedMajorVersions = uniq(prefilteredVersions.map((v) => Semver.major(v)));
  const semveredMajors = compatibilityVersions.map((v) => `${v}.0.0`);

  return publishedMajorVersions.map((major) => {
    const closestMatchingVersion = Semver.maxSatisfying(semveredMajors, `<= ${major}`);
    return {
      fullVersion: Semver.maxSatisfying(prefilteredVersions, `^${major}`)!,
      major,
      nodeVersion: closestMatchingVersion ? specs.compatibility[Semver.major(closestMatchingVersion)] : '',
    };
  });
};

const repos: Record<string, Partial<ModuleInfo>> = {};

const limit = new Semaphore(4);

const processModule = async (moduleName: string, specs: ModuleSpec) => {
  console.info(`Processing ${moduleName}`);

  await fs.mkdir(getModuleStoragePath(moduleName), {
    recursive: true,
  });

  const filePath = getModuleInfoPath(moduleName);

  const existing = await getExisting<ModuleInfo>(filePath);

  // Get published versions from npm
  const versions = JSON.parse(
    execFileSync('npm', ['view', specs.package, 'versions', '--json'], {
      encoding: 'utf8',
    }),
  ) as string[];

  const currentModule: ModuleInfo = {
    api: false,
    forks: 0,
    link: '',
    name: moduleName,
    package: specs.package,
    slogan: '',
    stars: 0,
    updated: '',
    versions: [],
    versionsArray: [],
  };
  repos[moduleName] = currentModule;

  // Keep only latest versions from majors listed in specs
  const filteredVersions = getFilteredVersions(specs, versions);

  currentModule.versionsArray = filteredVersions.map((v) => v.fullVersion).toSorted((a, b) => Semver.compare(b, a));

  const versionLimit = new Semaphore(10);
  const versionTasks = filteredVersions.map(async ({ nodeVersion, fullVersion, major }) => {
    const apiPath = getModuleMarkdownPath(moduleName, major);
    const apiExists = await fs
      .access(apiPath)
      .then(() => true)
      .catch(() => false);

    const existingVersion = existing?.versions.find((v) => v.name === fullVersion);

    if (existingVersion && apiExists) {
      console.info(`[docs] Skipping ${moduleName}@${major}`);
      return {
        apiExists: true,
        branch: existingVersion.branch,
        license: existingVersion.license,
        name: existingVersion.name,
        node: existingVersion.node,
      };
    }

    await versionLimit.acquire();
    try {
      console.info(`[docs] Processing ${moduleName}@${fullVersion}`);
      const tagName = `v${fullVersion}`;

      const api = await getRawContent(moduleName, 'API.md', tagName);

      await fs.mkdir(path.dirname(apiPath), { recursive: true });

      await fs.writeFile(apiPath, api.data);
      console.info(`[docs] Wrote ${apiPath}`);

      return {
        apiExists: true,
        branch: tagName,
        license: 'BSD',
        name: fullVersion,
        node: nodeVersion,
      };
    } finally {
      versionLimit.release();
    }
  });

  const versionResults = await Promise.all(versionTasks);
  for (const result of versionResults) {
    currentModule.versions.push({
      branch: result.branch,
      license: result.license,
      name: result.name,
      node: result.node,
    });
    if (result.apiExists) {
      currentModule.api = true;
    }
  }

  currentModule.versions.sort((a, b) => Semver.compare(a.name, b.name));

  const [readme, repoInfo] = await Promise.all([
    existing ? Promise.resolve({ data: '' }) : getRawContent(moduleName, 'README.md'),
    existing
      ? Promise.resolve({
          data: {
            forks_count: existing.forks,
            html_url: existing.link,
            pushed_at: existing.updated,
            stargazers_count: existing.stars,
          },
        })
      : getRepoInfo(moduleName),
  ]);

  const readmeMatch = readme.data.match(/####(.*)/gm);
  const rawSlogan = readmeMatch === null ? (existing?.slogan ?? 'Description coming soon...') : readmeMatch[0].slice(5);

  currentModule.slogan = rawSlogan.trim();
  currentModule.forks = repoInfo.data.forks_count;
  currentModule.stars = repoInfo.data.stargazers_count;
  currentModule.updated = repoInfo.data.pushed_at;
  currentModule.link = repoInfo.data.html_url;

  const moduleDir = getModuleStoragePath(moduleName);
  await fs.mkdir(moduleDir, { recursive: true });

  await fs.writeFile(filePath, JSON.stringify(currentModule, null, 2));

  if (moduleName === 'joi') {
    await fs.mkdir(API_DIR, { recursive: true });
  }

  await generateChangelog(moduleName);

  await fs.writeFile(filePath, JSON.stringify(currentModule, null, 2));

  repos[moduleName] = {
    forks: currentModule.forks,
    link: currentModule.link,
    package: currentModule.package,
    slogan: currentModule.slogan,
    stars: currentModule.stars,
    updated: currentModule.updated,
    versions: currentModule.versions,
    versionsArray: currentModule.versionsArray,
  };
};

const moduleTasks = Object.entries(modules).map(async ([moduleName, specs]) => {
  await limit.acquire();
  try {
    await processModule(moduleName, specs);
  } finally {
    limit.release();
  }
});

await Promise.all(moduleTasks);

const sortedRepos = Object.fromEntries(Object.keys(modules).map((name) => [name, repos[name]]));

const policies: [string, string, string?][] = [
  ['coc', 'CODE_OF_CONDUCT'],
  ['contributing', 'CONTRIBUTING'],
  ['license', 'LICENSE'],
  ['security', 'SECURITY'],
  ['styleguide', 'STYLE', 'assets'],
  ['support', 'SUPPORT'],
];

await fs.mkdir(POLICIES_GENERATED_DIR, { recursive: true });
await Promise.all(
  policies.map(async ([policy, fileName, repo]) => {
    const policyPath = path.join(POLICIES_GENERATED_DIR, `${policy}.md`);
    const existingPolicy = await fs.readFile(policyPath, 'utf8').catch(() => null);
    if (existingPolicy) {
      console.info(`[policy] Skipping ${policy}`);
      return;
    }
    const { data } = await getRawContent(repo ?? '.github', `${fileName}.md`, 'master');
    await fs.writeFile(policyPath, data);
  }),
);

await fs.mkdir(METADATA_DIR, { recursive: true });
await fs.writeFile(path.join(METADATA_DIR, 'modules.json'), JSON.stringify(sortedRepos, null, 2));

console.info('Updating joi dependencies...');
const packageJson = JSON.parse(await fs.readFile(PACKAGE_JSON_PATH, 'utf8'));
const joiMajors = Object.keys(modules.joi.compatibility);
const joiRepo = repos.joi;
let changed = false;

for (const majorStr of joiMajors) {
  const major = parseInt(majorStr, 10);
  const depName = `joi-${major}`;
  const latestVersion = joiRepo?.versionsArray?.find((v) => Semver.major(v) === major);

  if (latestVersion) {
    const depValue = `npm:joi@${latestVersion}`;
    if (packageJson.dependencies[depName] !== depValue) {
      packageJson.dependencies[depName] = depValue;
      changed = true;
    }
  } else {
    console.warn(`Could not find latest version for joi major ${major}`);
  }
}

if (changed) {
  await fs.writeFile(PACKAGE_JSON_PATH, `${JSON.stringify(packageJson, null, 2)}\n`);
  console.info('Running pnpm install...');
  execFileSync('pnpm', ['install'], { stdio: 'inherit' });
}

// Generate module/index.md
const moduleIndexMdPath = path.join(MODULE_DIR, 'index.md');
const moduleIndexContent = `# Modules

The joi ecosystem consists of several modules.

<ModuleIndex />
`;
await fs.mkdir(MODULE_DIR, { recursive: true });
await fs.writeFile(moduleIndexMdPath, moduleIndexContent);

console.info('Running oxfmt...');
try {
  execFileSync('oxfmt', ['./generated'], { stdio: 'inherit' });

  // Apparently oxfmt sometimes needs a 2nd pass
  execFileSync('oxfmt', ['./generated'], { stdio: 'inherit' });
} catch (error: unknown) {
  console.error('Failed to run oxfmt:', error instanceof Error ? error.message : error);
}

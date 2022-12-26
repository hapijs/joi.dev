const axios = require('axios');
const Semver = require('semver');
const Yaml = require('js-yaml');
const fs = require('fs/promises');
const Toc = require('markdown-toc');
require('dotenv').config();

const modules = ['address', 'formula', 'joi', 'joi-date', 'pinpoint'];

getInfo();

async function getInfo() {
  const repos = {};
  let newRepos = {};
  let intro = '';
  let example = '';
  let usage = '';
  let faq = '';
  let advance = '';
  let finalHtmlDisplay = '';
  let finalMenu = '';
  const options = {
    headers: {
      accept: 'application/vnd.github.v3.raw+json',
      authorization: 'token ' + process.env.GITHUB_TOKEN,
    },
  };
  for (const moduleName of modules) {
    finalHtmlDisplay = '';
    finalMenu = '';
    let branches = await axios.get(
      `https://api.github.com/repos/hapijs/${moduleName}/branches`,
      options
    );
    console.log(moduleName);
    branches = branches.data.sort((a, b) => (a.name > b.name ? 1 : -1));
    if (
      moduleName !== 'assets' &&
      moduleName !== '.github' &&
      moduleName !== 'joi.dev'
    ) {
      repos[moduleName] = {
        name: moduleName,
        versions: [],
        versionsArray: [],
        api: false,
      };
      for (const branch of branches) {
        intro = '';
        example = '';
        usage = '';
        faq = '';
        advance = '';

        if (branch.name.match(/^v+[0-9]+|\bmaster\b/g)) {
          const gitHubVersion = await axios.get(
            `https://api.github.com/repos/hapijs/${moduleName}/contents/package.json?ref=${branch.name}`,
            options
          );
          let nodeYaml = [];
          if (branch.name !== 'master' && moduleName !== 'joi') {
            nodeYaml = await axios.get(
              `https://api.github.com/repos/hapijs/${moduleName}/contents/.travis.yml?ref=${branch.name}`,
              options
            );
          }
          // Get API
          try {
            if (modules.includes(moduleName)) {
              const api = await axios.get(
                `https://api.github.com/repos/hapijs/${moduleName}/contents/API.md?ref=${branch.name}`,
                options
              );
              repos[moduleName].api = true;
              let rawString = api.data.toString();

              if (branch.name === 'master') {
                const intros = rawString.match(/(?=#.*Intro)([\s\S]*?)(?=\n#)/);
                if (intros) {
                  rawString = rawString.replace(
                    /(?=#.*Intro)([\s\S]*?)(?=\n#)/,
                    ''
                  );
                  intro = intros[0];
                }
                const usages = rawString.match(/(?=#.*Usage)([\s\S]*?)(?=\n#)/);
                if (usages) {
                  rawString = rawString.replace(
                    /(?=#.*Usage)([\s\S]*?)(?=\n#)/,
                    ''
                  );
                  usage = usages[0];
                }
                const advanced = rawString.match(
                  /(?=#.*Advanced\W\W)([\s\S]*?)(?=\n#)/
                );
                if (advanced) {
                  rawString = rawString.replace(
                    /(?=#.*Advanced\W\W)([\s\S]*?)(?=\n#)/,
                    ''
                  );
                  advance = advanced[0];
                }
                const examples = rawString.match(
                  /(?=#.*Example\s\s)([\s\S]*?)(?=\n#)/
                );
                if (examples && moduleName !== 'bell') {
                  rawString = rawString.replace(
                    /(?=#.*Example)([\s\S]*?)(?=\n#)/,
                    ''
                  );
                  example = examples[0];
                }
                rawString = `${rawString}#`;
                const faqs = rawString.match(/(?=#.*F.A.Q.)([\s\S]*?)(?=\n#)/);
                if (faqs) {
                  rawString = rawString.replace(
                    /(?=#.*F.A.Q.)([\s\S]*?)(?=\n#)/,
                    ''
                  );
                  faq = faqs[0];
                }
              }

              rawString = rawString.substring(0, rawString.length - 1);

              // Auto generate TOC
              let apiTocString = '';
              const apiTocArray = rawString.match(/\n#.+/g);
              let pattern = '####';

              for (let i = 0; i < apiTocArray.length; ++i) {
                const testPattern = apiTocArray[i].match(/(?=#)(.*)(?=\s)/);
                if (testPattern[0].length < pattern.length) {
                  pattern = testPattern[0];
                }
                apiTocString = apiTocString + apiTocArray[i];
              }
              finalMenu = Toc(apiTocString, { bullets: '-' }).content;

              // Generate API and Menu HTML
              const finalDisplay = rawString.replace(/\/>/g, '></a>');
              finalMenu = finalMenu.replace(/Boom\./g, '');
              finalMenu = finalMenu.replace(/\(([^#*]+)\)/g, '()');
              const apiHTML = await axios.post(
                'https://api.github.com/markdown',
                {
                  text: finalDisplay,
                  mode: 'markdown',
                },
                {
                  headers: {
                    authorization: 'token ' + process.env.GITHUB_TOKEN,
                  },
                }
              );
              const apiString = apiHTML.data.toString();
              finalHtmlDisplay = apiString.replace(/user-content-/g, '');
            }
          } catch (err) {
            continue;
          }

          let nodeVersions = [];
          if (branch.name !== 'master' && moduleName !== 'joi') {
            nodeVersions = Yaml.load(nodeYaml.data).node_js.reverse();
          } else {
            nodeVersions = ['14', '12'];
          }
          if (
            repos[moduleName].versionsArray.indexOf(
              gitHubVersion.data.version
            ) === -1
          ) {
            repos[moduleName].versionsArray.push(gitHubVersion.data.version);
            repos[moduleName].versions.push({
              name: gitHubVersion.data.version,
              branch: branch.name,
              license: gitHubVersion.data.name.includes('commercial')
                ? 'Commercial'
                : 'BSD',
              node: nodeVersions.join(', ').replace('node,', ''),
            });
            repos[moduleName][gitHubVersion.data.version] = {
              menu: finalMenu,
              api: finalHtmlDisplay,
              intro: intro,
              example: example,
              usage: usage,
              faq: faq,
              advanced: advance,
              license: gitHubVersion.data.name.includes('commercial')
                ? 'Commercial'
                : 'BSD',
            };
          }
          repos[moduleName].versions.sort(function (a, b) {
            return Semver.compare(b.name, a.name);
          });
        }
      }
    }

    if (
      moduleName !== 'assets' &&
      moduleName !== '.github' &&
      moduleName !== 'joi.dev'
    ) {
      const readme = await axios.get(
        `https://api.github.com/repos/hapijs/${moduleName}/contents/README.md`,
        options
      );
      const forks = await axios.get(
        `https://api.github.com/repos/hapijs/${moduleName}`,
        options
      );
      const slogan =
        readme.data.match(/####(.*)/gm) !== null
          ? readme.data.match(/####(.*)/gm)[0].substring(5)
          : 'Description coming soon...';
      const date = new Date(forks.data.pushed_at);
      repos[moduleName].slogan = slogan;
      repos[moduleName].forks = Number(forks.data.forks_count);
      repos[moduleName].stars = Number(forks.data.stargazers_count);
      repos[moduleName].date = forks.data.pushed_at;
      repos[moduleName].updated = date.toDateString();
      repos[moduleName].link = `https://github.com/hapijs/${moduleName}`;

      for (const key of Object.keys(repos)) {
        if (repos[key].versions.length > 1) {
          if (
            repos[key].versions[0].name === repos[key].versions[1].name &&
            repos[key].versions[0].license === 'Commercial'
          ) {
            const temp = repos[key].versions[0];
            repos[key].versions[0] = repos[key].versions[1];
            repos[key].versions[1] = temp;
          }
        }
      }
    }

    const orderedRepos = {};
    Object.keys(repos)
      .sort()
      .forEach(function (key) {
        orderedRepos[key] = repos[key];
      });

    const joi = orderedRepos.joi;

    delete orderedRepos.joi;

    newRepos = Object.assign({ joi }, orderedRepos);
  }
  await fs.writeFile(
    './static/lib/moduleInfo.json',
    JSON.stringify(newRepos, null, 2)
  );
}

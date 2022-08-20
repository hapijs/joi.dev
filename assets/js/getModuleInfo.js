let axios = require("axios");
let Semver = require("semver");
let Yaml = require("js-yaml");
let fs = require("fs");
let Toc = require("markdown-toc");
require("dotenv").config();

const modules = [
  "address",
  "formula",
  "joi",
  "joi-date",
  "pinpoint",
];

getInfo();

async function getInfo() {
  let repos = {};
  let newRepos = {};
  let intro = "";
  let example = "";
  let usage = "";
  let faq = "";
  let advance = "";
  let finalHtmlDisplay = "";
  let finalMenu = "";
  const options = {
    headers: {
      accept: "application/vnd.github.v3.raw+json",
      authorization: "token " + process.env.GITHUB_TOKEN
    }
  };
  for (const moduleName of modules) {
    finalHtmlDisplay = "";
    finalMenu = "";
    let branches = await axios.get(
      "https://api.github.com/repos/hapijs/" +
      moduleName +
      "/branches",
      options
    );
    console.log(moduleName)
    branches = branches.data.sort((a, b) => (a.name > b.name) ? 1 : -1)
    if (
      moduleName !== "assets" &&
      moduleName !== ".github" &&
      moduleName !== "joi.dev"
    ) {
      repos[moduleName] = {
        name: moduleName,
        versions: [],
        versionsArray: [],
        api: false
      };
      for (let branch of branches) {
        intro = "";
        example = "";
        usage = "";
        faq = "";
        advance = "";

        if (branch.name.match(/^v+[0-9]+|\bmaster\b/g)) {
          const gitHubVersion = await axios.get(
            "https://api.github.com/repos/hapijs/" +
            moduleName +
            "/contents/package.json?ref=" +
            branch.name,
            options
          );
          let nodeYaml = []
          if (branch.name !== 'master' && moduleName !== 'joi') {
            nodeYaml = await axios.get(
              "https://api.github.com/repos/hapijs/" +
              moduleName +
              "/contents/.travis.yml?ref=" +
              branch.name,
              options
            );
          }
          //Get API
          try {
            if (modules.includes(moduleName)) {
              const api = await axios.get(
                "https://api.github.com/repos/hapijs/" +
                moduleName +
                "/contents/API.md?ref=" +
                branch.name,
                options
              );
              repos[moduleName].api = true;
              let rawString = await api.data.toString();

              if (branch.name === "master") {
                let intros = await rawString.match(
                  /(?=#.*Intro)([\s\S]*?)(?=\n#)/
                );
                if (intros) {
                  rawString = await rawString.replace(
                    /(?=#.*Intro)([\s\S]*?)(?=\n#)/,
                    ""
                  );
                  intro = intros[0];
                }
                let usages = await rawString.match(
                  /(?=#.*Usage)([\s\S]*?)(?=\n#)/
                );
                if (usages) {
                  rawString = await rawString.replace(
                    /(?=#.*Usage)([\s\S]*?)(?=\n#)/,
                    ""
                  );
                  usage = usages[0];
                }
                let advanced = await rawString.match(
                  /(?=#.*Advanced\W\W)([\s\S]*?)(?=\n#)/
                );
                if (advanced) {
                  rawString = await rawString.replace(
                    /(?=#.*Advanced\W\W)([\s\S]*?)(?=\n#)/,
                    ""
                  );
                  advance = advanced[0];
                }
                let examples = await rawString.match(
                  /(?=#.*Example\s\s)([\s\S]*?)(?=\n#)/
                );
                if (examples && moduleName !== "bell") {
                  rawString = await rawString.replace(
                    /(?=#.*Example)([\s\S]*?)(?=\n#)/,
                    ""
                  );
                  example = examples[0];
                }
                rawString = (await rawString) + "#";
                let faqs = await rawString.match(
                  /(?=#.*F.A.Q.)([\s\S]*?)(?=\n#)/
                );
                if (faqs) {
                  rawString = await rawString.replace(
                    /(?=#.*F.A.Q.)([\s\S]*?)(?=\n#)/,
                    ""
                  );
                  faq = faqs[0];
                }
              }

              rawString = rawString.substring(0, rawString.length - 1);

              //Auto generate TOC
              let apiTocString = "";
              let apiTocArray = await rawString.match(/\n#.+/g);
              let pattern = "####";

              for (let i = 0; i < apiTocArray.length; ++i) {
                let testPattern = apiTocArray[i].match(/(?=#)(.*)(?=\s)/);
                if (testPattern[0].length < pattern.length) {
                  pattern = testPattern[0];
                }
                apiTocString = apiTocString + apiTocArray[i];
              }
              finalMenu = Toc(apiTocString, { bullets: "-" }).content;


              //Generate API and Menu HTML
              let finalDisplay = await rawString.replace(/\/>/g, "></a>");
              finalMenu = await finalMenu.replace(/Boom\./g, "");
              finalMenu = await finalMenu.replace(/\(([^#*]+)\)/g, "()");
              console.log("HERERERERE")
              const apiHTML = await axios.post(
                "https://api.github.com/markdown",
                {
                  text: finalDisplay,
                  mode: "markdown"
                },
                {
                  headers: {
                    authorization: "token " + process.env.GITHUB_TOKEN
                  }
                }
              );
              let apiString = await apiHTML.data.toString();
              finalHtmlDisplay = await apiString.replace(/user-content-/g, "");
            }
          } catch (err) {
            continue;
          }

          let nodeVersions = [];
          if (branch.name !== 'master' && moduleName !== 'joi') {
            nodeVersions = Yaml.safeLoad(nodeYaml.data).node_js.reverse();
          } else {
            nodeVersions = ["14", "12"]
          }
          if (repos[moduleName].versionsArray.indexOf(gitHubVersion.data.version) === -1) {
            repos[moduleName].versionsArray.push(
              gitHubVersion.data.version
            );
            repos[moduleName].versions.push({
              name: gitHubVersion.data.version,
              branch: branch.name,
              license: gitHubVersion.data.name.includes("commercial")
                ? "Commercial"
                : "BSD",
              node: nodeVersions.join(", ").replace("node,", "")
            });
            repos[moduleName][gitHubVersion.data.version] = {
              menu: finalMenu,
              api: await finalHtmlDisplay,
              intro: intro,
              example: example,
              usage: usage,
              faq: faq,
              advanced: advance,
              license: gitHubVersion.data.name.includes("commercial")
                ? "Commercial"
                : "BSD"
            };
          }
          await repos[moduleName].versions.sort(function (a, b) {
            return Semver.compare(b.name, a.name);
          });
        }
      }
    }

    if (
      moduleName !== "assets" &&
      moduleName !== ".github" &&
      moduleName !== "joi.dev"
    ) {
      let readme = await axios.get(
        "https://api.github.com/repos/hapijs/" +
        moduleName +
        "/contents/README.md",
        options
      );
      let forks = await axios.get(
        "https://api.github.com/repos/hapijs/" + moduleName,
        options
      );
      let slogan =
        (await readme.data.match(/####(.*)/gm)) !== null
          ? await readme.data.match(/####(.*)/gm)[0].substring(5)
          : "Description coming soon...";
      let date = await new Date(forks.data.pushed_at);
      (repos[moduleName].slogan = await slogan),
        (repos[moduleName].forks = await Number(
          forks.data.forks_count
        )),
        (repos[moduleName].stars = await Number(
          forks.data.stargazers_count
        )),
        (repos[moduleName].date = await forks.data.pushed_at),
        (repos[moduleName].updated = await date.toDateString()),
        (repos[moduleName].link =
          "https://github.com/hapijs/" + moduleName);

      for (let key of Object.keys(repos)) {
        if (repos[key].versions.length > 1) {
          if (
            repos[key].versions[0].name === repos[key].versions[1].name &&
            repos[key].versions[0].license === "Commercial"
          ) {
            let temp = repos[key].versions[0];
            repos[key].versions[0] = repos[key].versions[1];
            repos[key].versions[1] = temp;
          }
        }
      }
    }

    const orderedRepos = {};
    await Object.keys(repos)
      .sort()
      .forEach(function (key) {
        orderedRepos[key] = repos[key];
      });

    let hapi = orderedRepos.hapi;

    delete orderedRepos.hapi;

    newRepos = await Object.assign({ hapi }, orderedRepos);
  }
  await fs.writeFile(
    "./static/lib/moduleInfo.json",
    JSON.stringify(newRepos),
    function (err) {
      if (err) throw err;
    }
  );
}

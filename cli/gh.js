const { Octokit } = require('@octokit/rest');
const Semver = require('semver');
const { marked } = require('./markdown');

const gh = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

async function getRawContent(moduleName, filePath, tagName) {
  return await gh.repos.getContent({
    owner: 'hapijs',
    repo: moduleName,
    path: filePath,
    ref: tagName,
    mediaType: {
      format: 'raw',
    },
  });
}

async function getRepoInfo(moduleName) {
  return await gh.repos.get({
    owner: 'hapijs',
    repo: moduleName,
  });
}

async function getMilestones(moduleName) {
  const milestones = [];
  for await (const response of gh.paginate.iterator(gh.issues.listMilestones, {
    owner: 'hapijs',
    repo: moduleName,
    state: 'closed',
    per_page: 100,
  })) {
    milestones.push(...response.data);
  }
  return milestones.sort((a, b) => Semver.compare(a.title, b.title));
}

async function getMilestoneIssues(moduleName, milestoneNumber) {
  const issues = [];
  for await (const response of gh.paginate.iterator(gh.issues.listForRepo, {
    owner: 'hapijs',
    repo: moduleName,
    state: 'closed',
    milestone: milestoneNumber,
    per_page: 100,
  })) {
    issues.push(...response.data);
  }
  return issues;
}

async function getHtmlContent(path, repo = '.github') {
  const { data } = await gh.repos.getContent({
    owner: 'hapijs',
    repo,
    path,
    mediaType: {
      format: 'raw',
    },
  });
  return marked.parse(data);
}

module.exports = {
  getHtmlContent,
  getRawContent,
  getRepoInfo,
  getMilestones,
  getMilestoneIssues,
};

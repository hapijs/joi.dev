const fs = require('fs/promises');
const Semver = require('semver');
const { getMilestones, getMilestoneIssues } = require('./gh');
const { getModuleChangelogPath, getExisting } = require('./paths');

async function generateChangelog(moduleName) {
  let foundNewMilestones = false;

  const changelog = [];

  const filePath = getModuleChangelogPath(moduleName);

  const existing = await getExisting(filePath);
  const existingMap = existing
    ? new Map(existing.map((c) => [c.version, c]))
    : new Map();

  console.info(`[changelog] Generating for ${moduleName}`);

  const milestones = await getMilestones(moduleName);

  for (const milestone of milestones) {
    if (existingMap.has(milestone.title)) {
      changelog.push(existingMap.get(milestone.title));
      console.info(`[changelog] Skipping ${moduleName}@${milestone.title}`);
      continue;
    }

    console.info(
      `[changelog] Getting issues for ${moduleName}@${milestone.title}`
    );

    const issues = await getMilestoneIssues(moduleName, milestone.number);

    changelog.push({
      id: milestone.id,
      number: milestone.number,
      version: milestone.title,
      date: milestone.closed_at,
      url: milestone.html_url,
      issues: issues.map((issue) => ({
        id: issue.id,
        number: issue.number,
        title: issue.title,
        url: issue.html_url,
        labels: issue.labels.map((label) => label.name),
      })),
    });

    foundNewMilestones = true;
  }

  if (foundNewMilestones) {
    await fs.writeFile(
      filePath,
      JSON.stringify(
        changelog.sort((a, b) => Semver.compare(b.version, a.version)),
        null,
        2
      )
    );
  }
}

exports.generateChangelog = generateChangelog;

import fs from 'node:fs/promises';
import path from 'node:path';

import { Semaphore } from 'es-toolkit';
import Semver from 'semver';

import { getMilestoneIssues, getMilestones } from './gh.js';
import { getExisting, getModuleChangelogPath, getModuleMarkdownChangelogPath } from './paths.js';

import type { ChangelogItem } from './types.js';

export const generateChangelog = async (moduleName: string) => {
  let foundNewMilestones = false;

  const filePath = getModuleChangelogPath(moduleName);
  const existing = await getExisting<ChangelogItem[]>(filePath);
  const existingMap = new Map<string, ChangelogItem>(existing?.map((c) => [c.version, c]));

  console.info(`[changelog] Generating for ${moduleName}`);

  const milestones = await getMilestones(moduleName);

  const changelog: ChangelogItem[] = [];

  const limit = new Semaphore(10);
  const tasks = milestones.map(async (milestone) => {
    if (existingMap.has(milestone.title)) {
      console.info(`[changelog] Skipping ${moduleName}@${milestone.title}`);
      return existingMap.get(milestone.title)!;
    }

    await limit.acquire();
    try {
      console.info(`[changelog] Getting issues for ${moduleName}@${milestone.title}`);

      const issues = await getMilestoneIssues(moduleName, milestone.number);

      foundNewMilestones = true;

      return {
        date: milestone.closed_at,
        id: milestone.id,
        issues: issues.map((issue) => ({
          id: issue.id,
          labels: issue.labels.map((label) => label.name),
          number: issue.number,
          title: issue.title,
          url: issue.html_url,
        })),
        number: milestone.number,
        url: milestone.html_url,
        version: milestone.title,
      };
    } finally {
      limit.release();
    }
  });

  changelog.push(...(await Promise.all(tasks)));

  const sortedChangelog = changelog.toSorted((a, b) => Semver.compare(b.version, a.version));

  if (foundNewMilestones) {
    await fs.writeFile(filePath, JSON.stringify(sortedChangelog, null, 2));
  }

  await generateModuleMarkdownChangelog(moduleName, sortedChangelog);
};

const generateModuleMarkdownChangelog = async (moduleName: string, sortedChangelog: ChangelogItem[]) => {
  const majorVersions = new Set<string>();
  sortedChangelog.forEach((m) => {
    const [major] = m.version.split('.');
    if (major) {
      majorVersions.add(major);
    }
  });

  const changelogPath = getModuleMarkdownChangelogPath(moduleName);
  await fs.mkdir(path.dirname(changelogPath), { recursive: true });
  let content = '';

  const sortedMajors = [...majorVersions].toSorted((a, b) => parseInt(b, 10) - parseInt(a, 10));

  for (const major of sortedMajors) {
    content += `## Version ${major} {#v${major}}\n\n`;

    const milestones = sortedChangelog.filter((m) => m.version.startsWith(`${major}.`));

    for (const milestone of milestones) {
      const hasBreaking = milestone.issues.some((issue) => issue.labels.some((label) => label === 'breaking changes'));

      const releaseNotesIssue = milestone.issues.find((issue) =>
        issue.labels.some((label) => label === 'release notes'),
      );

      content += `### [${milestone.version}](${milestone.url}) `;

      if (releaseNotesIssue) {
        content += `<a class="release-notes-link" href="${releaseNotesIssue.url}" target="_blank" title="View Release Notes"><img class="release-notes-img" src="/img/release-notes.png" alt="" /></a> `;
      }

      if (hasBreaking) {
        content += `<span class="breaking-badge"></span> `;
      }

      content += `{#${milestone.version}} `;

      content += `\n\n`;

      for (const issue of milestone.issues) {
        content += `- [#${issue.number}](${issue.url}) ${escapeHtml(issue.title)}\n`;
      }
      content += '\n';
    }
  }

  await fs.writeFile(changelogPath, content);
};

const escapeHtml = (text: string) => text.replaceAll('<', '&lt;').replaceAll('>', '&gt;');

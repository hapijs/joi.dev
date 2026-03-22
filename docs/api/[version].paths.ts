import fs from 'node:fs';
import path from 'node:path';

import { defineRoutes } from 'vitepress';

import joiInfo from '../../generated/modules/joi/info.json' with { type: 'json' };

import type { ModuleInfo } from '../../cli/types.js';

export default defineRoutes({
  paths() {
    const info = joiInfo as ModuleInfo;
    const majors = info.versionsArray.map((v) => parseInt(v.split('.')[0], 10));

    return majors.map((major) => {
      const versionInfo = info.versions.find((v) => parseInt(v.name.split('.')[0], 10) === major);
      const fullVersion = versionInfo?.name ?? `${major}.x.x`;
      const version = `${major}.x.x`;
      let content = fs.readFileSync(path.resolve(`generated/markdown/joi/${major}/api.md`), 'utf8');
      content = content.replaceAll('{{', '&#123;&#123;').replaceAll('}}', '&#125;&#125;');
      return {
        content,
        params: { fullVersion, major: major.toString(), version },
      };
    });
  },
});

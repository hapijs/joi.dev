import fs from 'node:fs';
import path from 'node:path';

import { defineRoutes } from 'vitepress';

import modulesData from '../../../../generated/metadata/modules.json' with { type: 'json' };

import type { ModuleInfo, ModuleMetadata } from '../../../../cli/types.js';

export default defineRoutes({
  paths() {
    const data = modulesData as Record<string, ModuleMetadata>;
    return Object.keys(data)
      .filter((name) => name !== 'joi')
      .flatMap((name: string) => {
        const info = data[name] as unknown as ModuleInfo;
        const majors = info.versionsArray.map((v: string) => parseInt(v.split('.')[0], 10));

        return majors.map((major: number) => {
          const versionInfo = info.versions.find((v) => parseInt(v.name.split('.')[0], 10) === major);
          const fullVersion = versionInfo?.name ?? `${major}.x.x`;
          const version = `${major}.x.x`;
          let content = fs.readFileSync(path.resolve(`generated/markdown/${name}/${major}/api.md`), 'utf8');
          content = content.replaceAll('{{', '&#123;&#123;').replaceAll('}}', '&#125;&#125;');
          return {
            content,
            params: { fullVersion, name, package: info.package, version },
          };
        });
      });
  },
});

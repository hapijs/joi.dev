import { defineRoutes } from 'vitepress';

import joiInfo from '../../generated/modules/joi/info.json' with { type: 'json' };

import type { ModuleInfo } from '../../cli/types.js';

export default defineRoutes({
  paths() {
    const info = joiInfo as ModuleInfo;
    const versions = info.versionsArray
      .map((v) => parseInt(v.split('.')[0], 10))
      .map((major) => ({
        params: { version: `${major}.x.x` },
      }));

    // Also handle the base /tester path
    versions.push({
      params: { version: 'index' },
    });

    return versions;
  },
});

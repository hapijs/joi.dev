import { defineRoutes } from 'vitepress';

import JoiInfo from '../../generated/modules/joi/info.json' with { type: 'json' };

import type { ModuleInfo } from '../../cli/types.js';

export default defineRoutes({
    paths() {
        const info = JoiInfo as ModuleInfo;
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

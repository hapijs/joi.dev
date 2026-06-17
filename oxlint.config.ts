import HapiRecommended from '@hapi/oxc-plugin/oxlint';
import { defineConfig } from 'oxlint';

import type { OxlintConfig } from 'oxlint';

export default defineConfig({
    extends: [HapiRecommended],
    env: {
        ...HapiRecommended.env,
        browser: true,
    },
    globals: {
        defineProps: 'readonly',
        defineModel: 'readonly',
        defineExpose: 'readonly',
    },
}) as OxlintConfig;

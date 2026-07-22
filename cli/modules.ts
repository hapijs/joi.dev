import type { ModuleSpec } from './types.js';

export const modules: Record<string, ModuleSpec> = {
    address: {
        compatibility: {
            5: '>= 14',
        },
        package: '@hapi/address',
    },
    formula: {
        compatibility: {
            3: '>= 14',
            4: '>= 22',
        },
        package: '@hapi/formula',
    },
    joi: {
        compatibility: {
            17: '>= 14',
            18: '>= 20',
        },
        package: 'joi',
    },
    'joi-date': {
        compatibility: {
            2: '>= 14',
        },
        package: '@joi/date',
    },
    pinpoint: {
        compatibility: {
            2: '>= 14',
            3: '>= 22',
        },
        package: '@hapi/pinpoint',
    },
    tlds: {
        compatibility: {
            1: '>= 14',
            2: '>= 22',
        },
        package: '@hapi/tlds',
    },
};

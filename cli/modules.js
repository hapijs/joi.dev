const modules = {
  // Order is important here, so having joi first has an impact
  joi: {
    package: 'joi',
    compatibility: {
      17: ['14', '16', '18'],
    },
  },
  address: {
    package: '@hapi/address',
    compatibility: {
      5: ['14', '16', '18'],
    },
  },
  formula: {
    package: '@hapi/formula',
    compatibility: {
      3: ['14', '16', '18'],
    },
  },
  'joi-date': {
    package: '@joi/date',
    compatibility: {
      2: ['14', '16', '18'],
    },
  },
  pinpoint: {
    package: '@hapi/pinpoint',
    compatibility: {
      2: ['14', '16', '18'],
    },
  },
  tlds: {
    package: '@hapi/tlds',
    compatibility: {
      1: ['14', '16', '18', '20'],
    },
  },
};

exports.modules = modules;

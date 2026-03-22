import { defineRoutes } from 'vitepress';

import modulesData from '../../../generated/metadata/modules.json' with { type: 'json' };

import type { ModuleMetadata } from '../../../cli/types.js';

const renderInstall = (info: ModuleMetadata) => {
  let content = `
### Compatibility

| Major version | License | Node.js |
| ------------- | ------- | ------- |
`;

  const versions = [...info.versions].toReversed();
  for (const v of versions) {
    const [major] = v.name.split('.');
    content += `| ${major} | ${v.license} | ${v.node} |\n`;
  }

  return content;
};

export default defineRoutes({
  paths() {
    const data = modulesData as Record<string, ModuleMetadata>;
    return Object.keys(data)
      .filter((name) => name !== 'joi')
      .map((name: string) => {
        const info = data[name];
        const content = renderInstall(info);
        const lastVersion = info.versions.at(-1)!;
        const [latestMajor] = lastVersion.name.split('.');
        const fullVersion = lastVersion.name;
        const version = `${latestMajor}.x.x`;
        return {
          content,
          params: { fullVersion, name, package: info.package, slogan: info.slogan, version },
        };
      });
  },
});

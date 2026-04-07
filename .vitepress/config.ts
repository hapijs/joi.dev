import { defineConfig } from 'vitepress';
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';

import modulesData from '../generated/metadata/modules.json' with { type: 'json' };
import joiInfo from '../generated/modules/joi/info.json' with { type: 'json' };
import { formatVersion } from './utils.js';

const modulesItems = Object.keys(modulesData)
  .filter((name) => name !== 'joi')
  .map((name) => ({
    link: `/module/${name}/install`,
    text: name,
  }));

const getModuleSidebar = (moduleName: string) => {
  const moduleData = modulesData[moduleName as keyof typeof modulesData];
  return [
    {
      items: [{ link: '/module/', text: 'All Modules' }, ...modulesItems],
      text: 'Modules',
    },
    {
      items: [
        { link: `/module/${moduleName}/install`, text: 'Installation' },
        {
          items: moduleData.versions.map((version) => ({
            link: `/module/${moduleName}/api/${formatVersion(version.name)}`,
            text: formatVersion(version.name),
          })),
          link: `/module/${moduleName}/api/${formatVersion(moduleData.versions[0].name)}`,
          text: 'API',
        },
        { link: `/module/${moduleName}/changelog`, text: 'Changelog' },
      ],
      text: moduleName,
    },
  ];
};

const moduleSidebars = Object.fromEntries(
  Object.keys(modulesData)
    .filter((name) => name !== 'joi')
    .map((name) => [`/module/${name}/`, getModuleSidebar(name)]),
);

export default defineConfig({
  appearance: true,
  cleanUrls: true,
  description: 'The most powerful data validation library for JS',
  head: [['link', { href: '/favicon2.png', rel: 'icon' }]],
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin);
    },
    lineNumbers: true,
    theme: {
      dark: 'vitesse-dark',
      light: 'vitesse-light',
    },
  },
  outDir: 'dist',
  srcDir: 'docs',
  themeConfig: {
    docFooter: {
      next: false,
      prev: false,
    },
    footer: {
      copyright: 'Copyright © 2012-present hapi.js team',
      message:
        '<a href="https://www.netlify.com" target="_blank"><img src="https://www.netlify.com/assets/badges/netlify-badge-dark.svg" alt="Deploys by Netlify" style="display: inline-block; vertical-align: middle; height: 30px; margin-left: 10px;" /></a>',
    },
    logo: '/img/joiTransparent.png',
    nav: [
      { link: '/', text: 'Home' },
      { activeMatch: '^/api/', link: `/api/${formatVersion(joiInfo.versionsArray[0])}`, text: 'API' },
      {
        activeMatch: '^/resources/',
        link: '/resources/changelog',
        text: 'Resources',
      },
      { activeMatch: '^/module/', link: '/module/', text: 'Modules' },
      { activeMatch: '^/policies/', link: '/policies/coc', text: 'Policies' },
      { activeMatch: '^/tester/', link: '/tester/', text: 'Sandbox' },
    ],
    outline: {
      label: 'On this page',
      level: 'deep',
    },
    sidebar: {
      '/api/': [
        {
          items: [
            {
              items: joiInfo.versionsArray.map((version) => ({
                link: `/api/${formatVersion(version)}`,
                text: formatVersion(version),
              })),
              link: `/api/${formatVersion(joiInfo.versionsArray[0])}`,
              text: 'API',
            },
          ],
          text: 'joi',
        },
      ],
      '/module/': [
        {
          items: [{ link: '/module/', text: 'All Modules' }, ...modulesItems],
          text: 'Modules',
        },
      ],
      '/policies/': [
        {
          items: [
            { link: '/policies/coc', text: 'Code of Conduct' },
            { link: '/policies/contributing', text: 'Contributing' },
            { link: '/policies/license', text: 'License' },
            { link: '/policies/security', text: 'Security' },
            { link: '/policies/styleguide', text: 'Style Guide' },
            { link: '/policies/support', text: 'Support' },
          ],
          text: 'Policies',
        },
      ],
      '/resources/': [
        {
          items: [
            { link: '/resources/changelog', text: 'Changelog' },
            { link: '/resources/status', text: 'Module Status' },
          ],
          text: 'Resources',
        },
      ],
      '/tester/': [
        {
          items: joiInfo.versionsArray.map((version) => ({
            link: `/tester/${formatVersion(version)}`,
            text: formatVersion(version),
          })),
          text: 'Versions',
        },
      ],
      ...moduleSidebars,
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/hapijs/joi' }],
  },
  title: 'joi.dev',
  titleTemplate: 'joi.dev - :title',
  vite: {
    plugins: [groupIconVitePlugin()],
  },
});

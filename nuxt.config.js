export default {
  modern: true,

  server: {
    host: '0.0.0.0',
  },

  generate: {
    fallback: true,
    interval: 2000,
    routes: [
      '/module/address',
      '/module/address/api',
      '/module/address/changelog',
      '/module/formula',
      '/module/formula/api',
      '/module/formula/changelog',
      '/module/joi-date',
      '/module/joi-date/api',
      '/module/joi-date/changelog',
      '/module/pinpoint',
      '/module/pinpoint/api',
      '/module/pinpoint/changelog',
    ],
  },
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'joi.dev',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'The most powerful schema description language and data validator for JavaScript.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'joi, validation, schema, hapi, hapijs, hapi.js, node, node.js, javascript, framework',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon2.png?v=1.0' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Inconsolata:400|Lato:400,900&display=swap',
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['bulma'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/vue-codemirror',
    '~/plugins/vue-highlightjs',
    '~/plugins/vue-darkmode',
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/markdownit',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/svg',
    '@nuxtjs/pwa',
  ],

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    linkify: true,
    html: true,
    breaks: true,
    injected: true,
  },

  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },

  manifest: {
    name: 'joi.dev',
    short_name: 'joi',
    background_color: '#ffffff',
    theme_color: '#0080ff',
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    retry: true,
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    splitChunks: {
      layouts: true,
    },
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: false,
        minifyJS: false,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
    },
    loaders: {
      scss: {
        implementation: require('sass'),
      },
    },
    postcss: null,
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {}
  },
};

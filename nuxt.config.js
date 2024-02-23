export default {
  modern: true,

  server: {
    host: '0.0.0.0',
  },

  generate: {
    fallback: true,
    interval: 2000,
    routes: ['address', 'formula', 'joi-date', 'pinpoint'].flatMap((m) => [
      `/module/${m}`,
      `/module/${m}/api`,
      `/module/${m}/changelog`,
    ]),
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

  css: [
    './assets/styles/main.css',
    './assets/styles/variables.css',
    './assets/styles/api.css',
    './assets/styles/markdown.css',
  ],

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  // css: ['bulma'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/vue-codemirror', '~/plugins/vue-darkmode'],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/svg', '@nuxtjs/pwa'],

  manifest: {
    name: 'joi.dev',
    short_name: 'joi',
    background_color: '#ffffff',
    theme_color: '#0080ff',
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
    cssSourceMap: true,
    extractCSS: {
      ignoreOrder: true,
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
    postcss: {
      postcssOptions: {
        plugins: {
          'postcss-nested': {},
        },
      },
    },
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {}
  },
};


export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
 head: {
  title: "joi",
  htmlAttrs: {
    lang: "en"
  },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content:
        "The most powerful schema description language and data validator for JavaScript."
    },
    {
      hid: "keywords",
      name: "keywords",
      content: "joi, validation, schema, hapi, hapijs, hapi.js, node, node.js, javascript, framework"
    }
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.png?v=1.0" },
    {
      rel: "stylesheet",
      href:
        "https://fonts.googleapis.com/css?family=Inconsolata:400|Lato:400,900&display=swap"
    }
  ]
},
  /*
  ** Global CSS
  */
 css: ["bulma"],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: ["~/plugins/vue-codemirror", "~/plugins/vue-highlightjs"],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/markdownit",
    '@nuxtjs/axios',
    "@nuxtjs/dotenv",
    '@nuxtjs/pwa',
  ],

  markdownit: {
    linkify: true,
    html: true,
    breaks: true,
    injected: true
  },

  googleAnalytics: {
    id: "UA-144917045-1"
  },

  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
 build: {
  splitChunks: {
    layouts: true
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
      useShortDoctype: true
    }
  }
  /*
   ** You can extend webpack config here
   */
  // extend(config, ctx) {}
}
}

// use material design colors by name in vuetify below
import colors from 'vuetify/es5/util/colors'


// https://nuxtjs.org/guide/configuration/
export default {
  // https://nuxtjs.org/api/configuration-mode/
  // options: 'spa', 'universal', default: 'universal'
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    // add external stylesheets, libraries, and fonts here
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/global.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/localStorage.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
  ],
  /*
  ** Nuxtjs auth module
  */
 auth: {
  strategies: {
    // jwt
    local: {
      endpoints: {
        login: { url: 'api/auth/login', method: 'post', propertyName: 'token' },
        logout: { url: 'api/auth/logout', method: 'post' },
      },
      // tokenRequired: true,
      // tokenType: 'bearer'
      }
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'http://localhost:3333/api',
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  ** https://vuetifyjs.com/en/customization/theme
  ** https://vuetifyjs.com/en/styles/colors
  */
  vuetify: {
    theme: {
      dark: false,
      light: true,
      themes: {
        light: {
          primary: colors.blueGrey.darken2,
          accent: colors.blueGrey.lighten1,
          secondary: colors.blue.darken3,
          info: colors.blueGrey.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.blueGrey.accent3,
          background: colors.blueGrey.base,
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
}

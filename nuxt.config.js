export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.APP_NAME,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  ssr: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'primeflex/primeflex.css',
    '~/assets/styles/layout.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/primevue.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    ['@nuxtjs/eslint-module', {
      fix: true
    }],
    // https://github.com/nuxt-community/composition-api
    '@nuxtjs/composition-api/module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://www.primefaces.org/primevue/showcase-v2/#/setup
    'primevue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://dev.auth.nuxtjs.org/
    '@nuxtjs/auth-next'
  ],

  auth: {
    strategies: {
      cookie: {
        endpoints: {
          csrf: {
            url: '/sanctum/csrf-cookie'
          },
          login: {
            url: '/login'
          },
          logout: {
            url: '/logout'
          },
          user: {
            url: '/api/user'
          }
        },
        user: {
          property: 'data'
        }
      }
    },

    redirect: {
      login: '/login',
      logout: '/login',
      home: '/'
    },

    plugins: ['~/plugins/axios']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL,
    credentials: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // https://github.com/primefaces/primevue/issues/844
    transpile: ['primevue']
  },

  primevue: {
    ripple: true,
    inputStyle: 'outlined',
    components: ['InputText', 'Button', 'Toast', 'Password', 'Checkbox', 'Badge', 'RadioButton', 'InputSwitch', 'DataTable', 'Column', 'Menu']
  },

  publicRuntimeConfig: {
    appName: process.env.APP_NAME
  }
}

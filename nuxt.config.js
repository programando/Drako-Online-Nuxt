import dotenv from "dotenv"; dotenv.config();
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Drako-Ventas Online',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'http-equiv', name: 'http-equiv', content: 'text/html' },
      { hid: 'http-equiv', name: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;1,300&display=swap' },
    ],
  },
   server: {
    port: 3000 
  },
   
  env: {
      URL_BASE      : process.env.URL_BASE,
      URL_API       : process.env.URL_API,
      URL_WEB       : process.env.URL_WEB,
      URL_RESET_PASS: process.env.URL_RESET_PASS,
    }, 
   

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
     { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
     { src: '@/plugins/filters.js' },
     { src: '@/plugins/vuex-persist.js', ssr: false },
     '~/plugins/clickaway',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/postcss8',
    '@nuxtjs/fontawesome',
    '@nuxtjs/dotenv',
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-sweetalert2/nuxt',
    '@nuxtjs/toast',
    '@nuxtjs/auth-next' ,

  ],
  

  sweetalert: {
    confirmButtonColor: '#41b882',
    cancelButtonColor: '#ff7674'
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url: process.env.URL_API,
        endpoints: {
          user  : { url: '/usuarios/autenticado', method: 'get' },
          login : { url: '/usuarios/login'      , method: 'post' },
          logout: { url:'/usuarios/logout'      , method: 'post'}
        }
      },
     },
     redirect: {
       login: '/',
       logout: '/',
       home: '/',
       callback:'/'
     }
  }

}

const webpack = require("webpack")
const env = require('dotenv').config()


module.exports = {
  mode: 'universal',
  // target: 'static',
  //mode: 'spa',
  // ssr: true,
  env: env.parsed,

  /*
  ** Headers of the page
  */
  head: {
    title: 'ShopTown',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      // { src: 'https://js.stripe.com/v3/' },
      // { src: 'https://code.jquery.com/jquery-3.6.3.js', integrity: "sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=", crossorigin: "anonymous" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
    ]
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/redirect-module',
    // '@nuxtjs/fontawesome',
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/buyerlogin',
            method: 'post',
            propertyName: 'meta.token'
          },
          user: {
            url: '/auth/me',
            method: 'get',
            propertyName: 'data'
          },


        }
      }
    }
  },

  router: {
    middleware: [
      'clearValidationErrors'
    ]
  },

  axios: {
    baseURL: process.env.BASEURL,
    url: '/'
  },

  css: [
    '~/static/assets/css/tailwind.css',
  ],

  plugins: [
    '~/plugins/mixins/user.js',
    '~/plugins/mixins/validation.js',
    { src: '~/plugins/axios.js', ssr: false },
    { src: '~/plugins/mixins/paginate', ssr: false }, //
    { src: '~/plugins/mixins/my-jquery-code.js', ssr: false }, //
    { src: '~/plugins/mixins/lingallery.js', ssr: false }, //
    { src: '~/plugins/mixins/vuehtml2pdf.js', ssr: false }, //
    // { src: '~/plugins/fontawesome.js', mode: 'client' }
  ],

  /*
  ** Customize the progress bar color
  */

  // loading: '~/components/LoadingBar.vue',
  // loadingIndicator: {
  //   name: 'circle',
  //   color: '#3B8070',
  //   background: 'white'
  // },
  // loading: { 
  //   // color: '#3B8070',
  //   color: 'red',
  //   height: '15px',
  //   // continuous: true
  // },


  buildModules: [
    '@nuxt/postcss8',
    // ...
  ],
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    // vendor: ["jquery", "bootstrap"],
    // vendor: ['vue-select'],
    //   plugins: [
    //   new webpack.ProvidePlugin({
    //     $: "jquery"
    //   })
    // ],
    // plugins: [
    //  '~plugins/vue-select.js'
    // ],
    vendor: ["jquery"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })
    ],
    // postcss: {
    //   plugins: {
    //     'postcss-custom-properties': false,

    //   },

    // },
    /*
    ** Run ESLint on save
    */
    // postcss: [
    //   require('tailwindcss')('./tailwind.js'),
    //   require('autoprefixer')
    // ],
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
    generate: {
      minify: {
        collapseWhitespace: false
      }
    },
    extend(config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}


export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/fav-icon.svg'
      },
      {
        rel: 'StyleSheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap'
      }
    ]

  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    'quill/dist/quill.core.css',
    {
      src: '@/assets/app.css',
      lang: 'css'
    },
    {
      src: '@/assets/transition.css',
      lang: 'css'
    },
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/vue-pdf.js', mode: 'client' },{ src: '~plugins/ga.js', mode: 'client' },{ src: '~plugins/quill.js', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'vue-scrollto/nuxt',
    // '@nuxtjs/font-awesome'
    [
      'nuxt-fontawesome', {
        imports: [{
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // config.output.globalObject = 'this'
      // config.module.rules.push(
      //   {
      //     test: /\.pdf$/,
      //     loader: 'url-loader'
      //   }
      // )
    }
  }
}
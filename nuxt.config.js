
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'shinnopo chronicle',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
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
    { src: '~assets/main.scss', lang: 'scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/particles.js',
    { src: '~/plugins/particles.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/font-awesome'
  ],
  manifest: {
    name: 'shinnopo_nuxt_portfolio',
    lang: 'ja'
  },

  server: {
    port: 8080, // デフォルト: 3000
    host: '0.0.0.0',
  },
  /*
  ** Build configuration
  */
  build: {
    extend(config, ctx) {
    },
  }
}

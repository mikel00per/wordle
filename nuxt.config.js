import { resolve } from 'path';

export default {
  // Source directory: https://nuxtjs.org/docs/configuration-glossary/configuration-srcdir/
  srcDir: 'src/',
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/wordle/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Wordle',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'This is my own implementation of the word-guessing game Wordle.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/notifier.ts'],

  // Aliases: https://nuxtjs.org/docs/directory-structure/nuxt-config#alias
  alias: {
    '@components': resolve(__dirname, './src/components'),
    '@services': resolve(__dirname, './src/services'),
    '@constants': resolve(__dirname, './src/constants'),
    '@pages': resolve(__dirname, './src/pages'),
    '@static': resolve(__dirname, './src/static'),
    '@store': resolve(__dirname, './src/store'),
    '@styles': resolve(__dirname, './src/styles'),
    '@customTypes': resolve(__dirname, './src/types'),
    '@utils': resolve(__dirname, './src/utils'),
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components', '~/components/Icons'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/color-mode',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Configure axios global options which will be applied to all requests
  // https://axios.nuxtjs.org/options
  axios: {
    baseURL: 'https://wordleapi.azurewebsites.net/api', // Used as fallback if no runtime config is provided
  },
};

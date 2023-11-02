// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    'nuxt-swiper',
    'nuxt-svgo',
    '@vueuse/nuxt',
    '@nuxtjs/eslint-module',
    '@nuxt/ui',
  ],
  swiper: {
    modules: [
      'navigation',
      'pagination',
      'thumbs',
      'free-mode',
      'controller',
      'autoplay',
      'effect-creative',
      'scrollbar',
      'grid',
    ],
  },
  devtools: { enabled: true },
  css: ['~/assets/css/fonts.css'],
  svgo: {
    autoImportPath: './assets/images/svg/',
  },
  colorMode: {
    preference: 'light',
  },
  alias: {
    '@global': './global',
    '@img': './assets/images',
  },
  app: {
    head: {
      title: 'Ukrainemart',
    },
  },
});

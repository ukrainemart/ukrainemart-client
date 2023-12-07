// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      url: process.env.NUXT_URL,
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/profile/**': { ssr: false },
  },
  modules: [
    '@nuxt/image',
    'nuxt-swiper',
    'nuxt-svgo',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    '@vueuse/nuxt',
    // '@nuxtjs/eslint-module',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@vee-validate/nuxt',
  ],
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VForm',
      Field: 'VField',
      FieldArray: 'VFieldArray',
      ErrorMessage: 'VErrorMessage',
    },
  },
  i18n: {
    vueI18n: './i18n/i18n.config.ts',
  },
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
  imports: {
    dirs: ['stores'],
  },
  alias: {
    '@global': './global',
    '@img': './assets/images',
  },
  app: {
    head: {
      title: 'Ukrainemart',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1',
        },
      ],
    },
  },
});

import axios from 'axios';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      url: process.env.NUXT_URL,
    },
  },
  routeRules: {
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
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@vee-validate/nuxt',
    '@davestewart/nuxt-scrollbar',
    'nuxt-simple-sitemap',
  ],
  sitemap: {
    exclude: ['/profile/**', '/profile'],
    urls: async () => {
      const baseUrl = process.env.NUXT_URL || 'https://ukrainemart.com';
      const res = await axios.get(`${baseUrl}/api/sitemap`);

      return res.data;
    },
  },
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
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'selectedLanguage',
      redirectOn: 'root',
    },
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
      },
      {
        code: 'ua',
        name: 'Українська',
        iso: 'uk-UA',
      },
      {
        code: 'ru',
        name: 'Русский',
        iso: 'ru-RU',
      },
    ],
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
        {
          name: 'description',
          content:
            'Перша в Україні B2B платформа для українських експортерів та міжнародних імпортерів',
        },
        {
          name: 'keywords',
          content: 'Україна, B2B платформа, експортер, міжнародних, імпортер',
        },
      ],
    },
  },
});

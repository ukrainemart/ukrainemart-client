import en from './locales/en.json';
import ua from './locales/ua.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    ua,
  },
}));

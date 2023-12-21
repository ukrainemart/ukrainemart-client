import en from './locales/en.json';
import ua from './locales/ua.json';
import { ukPluralRules } from './ukPluralRules';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    ua,
    ru: ua,
  },
  pluralRules: {
    ua: ukPluralRules,
    ru: ukPluralRules,
  },
}));

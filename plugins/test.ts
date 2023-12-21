export default defineNuxtPlugin(async (app) => {
  let defaultLanguage = 'en';
  if (context.req.headers['accept-language']) {
    const browserLanguage = context.req.headers['accept-language'].split(',')[0];
    if (browserLanguage.startsWith('uk')) {
      defaultLanguage = 'uk';
    }
  }

  context.app.i18n.locale = defaultLanguage;
});

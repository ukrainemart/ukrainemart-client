export const useMultiLang = (item: any, key: string): string => {
  const { $i18n } = useNuxtApp();
  const { locale } = $i18n;

  const localeValue = locale.value === 'ru' ? 'ua' : locale.value;

  if (!item || !item[`${key}_${localeValue}`]) return ''; // NOTE for SSR support

  return item[`${key}_${localeValue}`] || '';
};

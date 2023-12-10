export const useMultiLang = (item: any, key: string): string => {
  const { $i18n } = useNuxtApp();
  const { locale } = $i18n;

  if (!item || !item[`${key}_${locale.value}`]) return ''; // NOTE for SSR support

  return item[`${key}_${locale.value}`] || '';
};

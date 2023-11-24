export const useMultiLang = (item: any, key: string): string => {
  const { locale } = useI18n();

  if (!item || !item[`${key}_${locale.value}`]) return ''; // NOTE for SSR support

  return item[`${key}_${locale.value}`] || '';
};

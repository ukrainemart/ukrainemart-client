export function useMultiLang(item: any, key: string) {
  // const { locale } = useI18n();
  if (!item) return '';
  try {
    return item[`${key}_ua`] || '';
  } catch (err: any) {
    console.error(err);
    return false;
  }
}

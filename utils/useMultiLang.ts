export function useMultiLang(item: any, key: string) {
  // const { locale } = useI18n();
  if (!item) return false;
  try {
    return item[`${key}_ua`] || '';
  } catch (err: any) {
    console.log(err);
    return false;
  }
}

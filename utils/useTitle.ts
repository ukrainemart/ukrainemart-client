export function useTitle(title: any) {
  const { $i18n } = useNuxtApp();
  const { t } = $i18n;

  const reactiveTitle = computed(() => (typeof title !== 'string' ? title.value : t(`${title}`)));

  useHead({
    titleTemplate: reactiveTitle.value,
  });
  console.log(reactiveTitle.value);
  watchDeep(reactiveTitle, () => {
    console.log(reactiveTitle.value);
    useHead({
      titleTemplate: reactiveTitle.value,
    });
  });
}

<script setup lang="ts">
  const props = defineProps<{
    selected: PriceProduct['type'];
  }>();

  console.log(props.selected);

  const { t } = useI18n();

  type Variant = {
    title: string;
    value: PriceProduct['type'];
  };

  const variants = computed<Variant[]>(() => [
    {
      title: `${t('from')} - ${t('to')}`,
      value: 'variated',
    },
    {
      title: t('fixed_price'),
      value: 'fixed',
    },
  ]);

  const selectedTitle = computed(() => {
    const current = variants.value.find((el: Variant) => el.value === props.selected);

    return current?.title;
  });
</script>

<template>
  <UiSelectOutline
    :currentValue="selectedTitle"
    :options="variants"
    value-attribute="value"
    option-attribute="title"
    class="w-full max-w-[130px] lowercase md:max-w-[220px] xl:max-w-[200px]"
  />
</template>

<style scoped></style>

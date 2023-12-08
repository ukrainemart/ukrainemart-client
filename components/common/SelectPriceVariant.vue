<script setup lang="ts">
  const props = defineProps<{
    selected: PriceProduct['type'];
    name: string;
    modelValue: PriceProduct['type'];
  }>();

  const value = ref<PriceProduct['type']>('');

  watchDeep(
    () => props.selected,
    () => {
      console.log(props.modelValue);

      value.value = props.selected;
    }
  );

  const emits = defineEmits(['update:modelValue']);

  const handleInput = () => {
    emits('update:modelValue', value.value);
  };

  watchDeep(value, () => {
    handleInput();
  });

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
  <UiSelectOutlineValidate
    v-model="value"
    :name="name"
    :currentValue="selectedTitle"
    :options="variants"
    valueAttribute="value"
    optionAttribute="title"
    class="w-full max-w-[130px] lowercase md:max-w-[220px] xl:max-w-[200px]"
  />
</template>

<style scoped></style>

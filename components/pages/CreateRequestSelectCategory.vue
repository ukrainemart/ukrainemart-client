<script setup lang="ts">
  const props = defineProps<{
    categories: Category[];
    modelValue: any;
    name: string;
  }>();
  const emits = defineEmits(['update:modelValue']);

  const updateValue = (value: any) => {
    emits('update:modelValue', value);
  };

  const value = ref('');

  const categoryOptions = computed(
    () =>
      props.categories?.map((el: Category) => {
        return {
          id: el.id,
          title: useMultiLang(el, 'title'),
        };
      }) || []
  );
  const getCurrentCategory = computed(
    () =>
      (categoryOptions.value.find((el: any) => el.id === +props.modelValue) || '') as {
        id: any;
        title: string;
      }
  );

  const getStartValue = () => {
    value.value = props.modelValue;
  };

  watchDeep(value, () => {
    updateValue(value.value);
  });
  watchDeep(
    () => props.modelValue,
    () => {
      getStartValue();
    }
  );

  getStartValue();
</script>

<template>
  <UiSelectOutlineValidate
    v-model="value"
    :name="name"
    :currentValue="getCurrentCategory.title"
    :options="categoryOptions"
    :placeholder="`${$t('add_product.select_category')}`"
    value-attribute="id"
    option-attribute="title"
  />
</template>

<style scoped></style>

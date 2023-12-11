<script setup lang="ts">
  const props = defineProps<{
    countries: Country[];
    modelValue: any;
    name: string;
  }>();
  const emits = defineEmits(['update:modelValue']);

  const updateValue = (value: any) => {
    emits('update:modelValue', value);
  };

  const value = ref('');

  const countriesOptions = computed(
    () =>
      props.countries?.map((el: Country) => {
        return {
          id: el.title_en,
          title: useMultiLang(el, 'title'),
        };
      }) || []
  );
  const getCurrentCounty = computed(
    () =>
      (countriesOptions.value.find((el: any) => el.id === props.modelValue) || '') as {
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
    :currentValue="getCurrentCounty.title"
    :placeholder="`${$t('labels.select_country')}`"
    :options="countriesOptions"
    value-attribute="id"
    option-attribute="title"
  />
</template>

<style scoped></style>

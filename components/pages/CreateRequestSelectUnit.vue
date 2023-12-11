<script setup lang="ts">
  const props = defineProps<{
    units: Unit[];
    modelValue: any;
    name: string;
  }>();
  const emits = defineEmits(['update:modelValue']);

  const updateValue = (value: any) => {
    emits('update:modelValue', value);
  };

  const value = ref('');

  const unitsOptions = computed(
    () =>
      props.units?.map((el: Unit) => {
        return {
          id: el.id,
          title: useMultiLang(el, 'title'),
        };
      }) || []
  );
  const getCurrentUnit = computed(
    () =>
      (unitsOptions.value.find((el: any) => el.id === +props.modelValue) || '') as {
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
    :message="false"
    :currentValue="getCurrentUnit.title"
    :options="unitsOptions"
    value-attribute="id"
    option-attribute="title"
  />
</template>

<style scoped></style>

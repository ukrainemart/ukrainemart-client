<script setup lang="ts">
  type Option = {
    title: string;
    value: string;
  };
  const props = defineProps<{
    modelValue: string;
    name: string;
  }>();
  const emits = defineEmits(['update:modelValue']);

  const { t } = useI18n();
  const value = ref('');

  const options = computed<Option[]>(() => [
    {
      value: 'day',
      title: t('labels.days'),
    },
    {
      value: 'month',
      title: t('labels.months'),
    },
    {
      value: 'year',
      title: t('labels.years'),
    },
  ]);

  const updateValue = () => {
    emits('update:modelValue', value.value);
  };

  const getStartValue = () => {
    value.value = props.modelValue;
  };

  const getCurrentCategory = computed(
    () => (options.value.find((el: Option) => el.value === props.modelValue) || '') as Option
  );

  watch(value, () => {
    updateValue();
  });

  getStartValue();
</script>

<template>
  <UiSelectOutlineValidate
    v-model="value"
    :message="false"
    :options="options"
    :name="name"
    :currentValue="getCurrentCategory.title"
    value-attribute="value"
    option-attribute="title"
  />
</template>

<style scoped></style>

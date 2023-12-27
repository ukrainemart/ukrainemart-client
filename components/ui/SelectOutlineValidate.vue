<script setup lang="ts">
  interface Props {
    currentValue: any;
    options: any[];
    name: string;
    modelValue: any;
    valueAttribute: string;
    optionAttribute: string;
    message?: boolean;
    placeholder?: string;
    validateOnValueUpdate?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    message: true,
    placeholder: '',
    validateOnValueUpdate: true,
  });

  const { value, errorMessage } = useField(
    () => props.name,
    {},
    {
      validateOnValueUpdate: props.validateOnValueUpdate,
    }
  );

  const getStartValue = () => {
    value.value = props.modelValue;
  };

  watchDeep(
    () => props.modelValue,
    () => {
      getStartValue();
    }
  );
  getStartValue();

  const emits = defineEmits(['update:modelValue']);

  const handleInput = () => {
    emits('update:modelValue', value.value);
  };

  watchDeep(value, () => {
    handleInput();
  });
</script>

<template>
  <div class="relative flex flex-col">
    <UiSelectOutline
      v-model="value"
      :class="{ '!border-status_red': errorMessage }"
      :options="options"
      :placeholder="placeholder"
      :currentValue="currentValue"
      :value-attribute="valueAttribute"
      :option-attribute="optionAttribute"
    />
    <UiAlertInputError
      v-if="message"
      class="absolute left-0 top-full mt-[5px] normal-case"
      :error="errorMessage || ''"
    />
  </div>
</template>

<style scoped></style>

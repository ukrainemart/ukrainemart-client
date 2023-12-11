<script setup lang="ts">
  interface Props {
    modelValue: string;
    placeholder: string;
    message?: boolean;
    name: string;
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
  <div class="relative">
    <UiDatePicker
      v-model="value"
      :class="{ '!border-status_red': errorMessage }"
      :placeholder="placeholder"
    />
    <UiAlertInputError
      v-if="message"
      class="absolute left-0 top-full mt-[5px] normal-case"
      :error="errorMessage"
    />
  </div>
</template>

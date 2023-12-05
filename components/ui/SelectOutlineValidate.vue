<script setup lang="ts">
  const props = defineProps<{
    currentValue: any;
    options: any[];
    name: string;
    modelValue: any;
    valueAttribute: string;
    optionAttribute: string;
  }>();

  const { value, errorMessage } = useField(() => props.name);

  watchDeep(
    () => props.modelValue,
    () => {
      value.value = props.modelValue;
    }
  );

  const emits = defineEmits(['update:modelValue']);

  const handleInput = () => {
    emits('update:modelValue', value.value);
  };

  watchDeep(value, () => {
    handleInput();
  });
</script>

<template>
  <div class="flex flex-col">
    <UiSelectOutline
      v-model="value"
      :class="{ '!border-status_red': errorMessage }"
      :options="options"
      :currentValue="currentValue"
      :value-attribute="valueAttribute"
      :option-attribute="optionAttribute"
    />
    <UiAlertInputError class="mt-[5px] normal-case" :error="errorMessage" />
  </div>
</template>

<style scoped></style>

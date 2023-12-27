<script setup lang="ts">
  defineProps<{
    modelValue?: any;
    placeholder?: string;
    error?: boolean;
  }>();

  const emits = defineEmits(['update:modelValue']);

  const handleInput = (event: Event) => {
    const inputValue = (event.target as HTMLInputElement).value;
    emits('update:modelValue', inputValue);
  };
</script>

<template>
  <input
    :value="modelValue"
    class="input_outline"
    :class="{ '!border-status_red': error }"
    :placeholder="placeholder ? placeholder : ''"
    @input="handleInput"
  />
</template>

<style scoped></style>

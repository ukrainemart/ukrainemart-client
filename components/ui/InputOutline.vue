<script setup lang="ts">
  defineProps<{
    modelValue?: string;
    customClass?: string;
    placeholder?: string;
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
    :class="customClass ? customClass : 'input_outline'"
    :placeholder="placeholder ? placeholder : ''"
    @input="handleInput"
  />
</template>

<style scoped></style>

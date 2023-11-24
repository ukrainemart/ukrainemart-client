<script setup lang="ts">
  defineProps<{
    modelValue?: string;
    customClass?: string;
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
    @input="handleInput"
  />
</template>

<style scoped></style>

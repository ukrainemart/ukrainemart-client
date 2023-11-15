<script setup lang="ts">
  defineProps<{
    modelValue?: string;
  }>();

  const emits = defineEmits(['update:modelValue']);

  const handleInput = (event: Event) => {
    const inputValue = (event.target as HTMLInputElement).value;
    emits('update:modelValue', inputValue);
  };
</script>

<template>
  <textarea
    :value="modelValue"
    class="input_outline resize-none !rounded-[20px] md:!rounded-[30px]"
    @input="handleInput"
  >
<slot/></textarea
  >
</template>

<style scoped></style>

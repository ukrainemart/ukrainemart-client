<script setup lang="ts">
  defineProps<{
    modelValue?: string;
    error?: boolean;
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
    :class="{ '!border-status_red': error }"
    class="input_outline resize-none !rounded-[20px] py-[10px] md:!rounded-[30px] xl:py-[15px]"
    @input="handleInput"
  >
<slot/></textarea
  >
</template>

<style scoped></style>

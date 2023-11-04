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
  <input
    :value="modelValue"
    class="text-[10px] font-medium text-black md:text-[15px] 4xl:text-[20px]"
    @input="handleInput"
  />
</template>

<style scoped></style>

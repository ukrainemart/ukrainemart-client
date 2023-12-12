<script setup lang="ts">
  defineProps<{
    modelValue?: string;
    placeholder?: string;
  }>();

  const emits = defineEmits(['update:modelValue']);

  const handleInput = (event: Event) => {
    const inputValue = (event.target as HTMLInputElement).value;
    emits('update:modelValue', inputValue);
  };
</script>

<template>
  <div class="input_outline flex items-center !p-0">
    <UiButtonTextOpacity class="input_outline_padding h-full border-r border-black pr-[20px]"
      >+</UiButtonTextOpacity
    >
    <input
      :placeholder="placeholder"
      :value="modelValue"
      type="number"
      class="input_without_arrow input_outline_padding basis-full bg-transparent focus:outline-none"
      @input="handleInput"
    />
  </div>
</template>

<style></style>

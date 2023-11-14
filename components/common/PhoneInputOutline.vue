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
  <div
    class="flex items-center rounded-[50px] border border-black bg-transparent px-[15px] text-[7px] font-medium text-black focus:outline-none md:px-[20px] md:text-[10px] xl:px-[25px] xl:text-[14px]"
  >
    <UiButtonTextOpacity class="h-full border-r border-black pr-[20px]">+38</UiButtonTextOpacity>
    <input
      :value="modelValue"
      type="number"
      class="input_without_arrow basis-full bg-transparent py-[11px] pl-[15px] focus:outline-none md:py-[14px] md:pl-[20px] xl:py-[16px] xl:pl-[25px]"
      @input="handleInput"
    />
  </div>
</template>

<style></style>

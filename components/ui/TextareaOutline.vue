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
    class="resize-none rounded-[20px] border border-black bg-transparent px-[15px] py-[11px] text-[7px] font-medium text-black focus:outline-none md:rounded-[30px] md:px-[20px] md:py-[14px] md:text-[10px] xl:px-[25px] xl:py-[16px] xl:text-[14px]"
    @input="handleInput"
  >
<slot/></textarea
  >
</template>

<style scoped></style>

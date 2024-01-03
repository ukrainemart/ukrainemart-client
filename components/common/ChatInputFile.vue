<script setup lang="ts">
  defineProps<{
    modelValue: File;
  }>();

  const emits = defineEmits(['update:modelValue']);

  const updateInput = (value: File) => {
    emits('update:modelValue', value);
  };
</script>

<template>
  <div class="relative h-[16px] w-[8px] xl:h-[22px] xl:w-[11px]">
    <SvgoPaperClip class="!h-[full] !w-full" />

    <label class="absolute left-0 top-0 z-50 h-full w-full cursor-pointer">
      <UiInputFile class="invisible h-full w-full" @updateInput="updateInput" />
    </label>
  </div>
</template>

<style scoped></style>

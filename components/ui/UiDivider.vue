<script setup lang="ts">
  defineProps<{
    label: string;
    ui?: any;
  }>();
</script>

<template>
  <UDivider
    :ui="{
      ...ui,
      label: 'text-black text-[7px] 4xl:text-[14px] md:text-[10px]',
      border: { base: 'border-black' },
    }"
    :label="label"
  />
</template>

<style scoped></style>

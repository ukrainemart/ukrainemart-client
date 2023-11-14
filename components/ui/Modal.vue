<script setup lang="ts">
  defineProps<{
    ui?: any;
  }>();
</script>

<template>
  <UModal
    :ui="{
      container: 'items-start sm:items-start',
      base: '!p-[25px] md:!px-[39px] md:!py-[30px] 4xl:!py-[35px] 4xl:!px-[54px]',
      overlay: { background: 'bg-dark-transparent' },
      rounded: 'rounded-[5px] md:rounded-[10px]',
      ...ui,
    }"
  >
    <slot />
  </UModal>
</template>

<style scoped></style>

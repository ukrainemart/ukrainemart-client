<script setup lang="ts">
  type Props = {
    styles?: string; // Additional custom styles for the button
  };

  withDefaults(defineProps<Props>(), {
    styles: '',
  });
</script>

<template>
  <h1
    :class="
      cn(
        'font-namu text-[24px] font-medium leading-[24px] text-black md:text-[32px] md:leading-[32px] lg:text-[42px] lg:leading-[42px]',
        styles
      )
    "
  >
    <slot />
  </h1>
</template>

<style></style>

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
        'font-namu text-[20px] font-medium leading-[24px] text-black md:text-[27px] md:leading-[32px] 2xl:text-[35px] 2xl:leading-[42px]',
        styles
      )
    "
  >
    <slot />
  </h1>
</template>

<style></style>

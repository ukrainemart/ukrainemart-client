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
        'font-montserrat text-[17px] font-medium leading-[20px] text-black md:text-[24px] md:leading-[29px] lg:text-[30px] lg:leading-[36px]',
        styles
      )
    "
  >
    <slot />
  </h1>
</template>

<style></style>

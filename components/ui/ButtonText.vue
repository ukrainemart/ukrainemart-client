<script setup lang="ts">
  type Props = {
    styles?: string; // Additional custom styles for the button
  };

  withDefaults(defineProps<Props>(), {
    styles: '',
  });
</script>

<template>
  <button
    type="button"
    :class="
      cn(
        'flex items-center font-montserrat text-[12px] font-medium leading-[14px] text-black transition-colors duration-100 ease-in focus:outline-none disabled:cursor-not-allowed md:text-[16px] md:leading-[19px] xl:text-[20px] xl:leading-6',
        styles
      )
    "
  >
    <slot />
  </button>
</template>

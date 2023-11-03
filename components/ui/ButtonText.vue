<script setup lang="ts">
  type Props = {
    styles?: string; // Additional custom styles for the button
  };

  withDefaults(defineProps<Props>(), {
    styles: '',
  });
</script>

<template>
  <UiButtonOpacity
    :class="
      cn(
        'flex items-center font-montserrat text-[12px] font-medium leading-[14px] text-black transition-opacity duration-100 ease-linear hover:opacity-70 focus:outline-none disabled:cursor-not-allowed md:text-[16px] md:leading-[19px] lg:text-[20px] lg:leading-6',
        styles
      )
    "
  >
    <slot />
  </UiButtonOpacity>
</template>

<!-- // TODO: add disabled styles -->

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
        'flex items-center justify-center gap-[9px] rounded-[50px] bg-black px-[28px] py-[8px] font-montserrat text-[12px] font-medium leading-4 text-white transition-opacity duration-100 ease-linear hover:opacity-70 focus:outline-none disabled:cursor-not-allowed md:py-[10px] md:text-[16px] md:leading-[19px] lg:px-[35px] lg:py-[13px] lg:text-[20px] lg:leading-6',
        styles
      )
    "
  >
    <slot />
  </UiButtonOpacity>
</template>

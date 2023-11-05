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
  <button
    type="button"
    :class="
      cn(
        'group flex items-center justify-center gap-[9px] rounded-[50px] border border-solid border-black bg-white px-[27px] py-[7px] font-montserrat text-[12px] font-medium leading-4 text-black transition-colors duration-100 ease-in hover:bg-black hover:text-white focus:outline-none disabled:cursor-not-allowed md:px-[33px] md:py-[9px] md:text-[16px] md:leading-[19px] xl:border-[2px] xl:px-[38px] xl:py-[11px] xl:text-[20px] xl:leading-6',
        styles
      )
    "
  >
    <slot />
  </button>
</template>

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
        'relative flex items-center font-montserrat text-[12px] font-medium leading-[14px] text-black transition-colors duration-100 ease-in before:absolute before:bottom-[-3px] before:left-2 before:h-[2px] before:w-full before:bg-transparent before:content-[\'\'] focus:outline-none disabled:cursor-not-allowed md:text-[16px] md:leading-[19px] md:hover:before:bg-black xl:text-[20px] xl:leading-6',
        styles
      )
    "
  >
    <slot />
  </button>
</template>

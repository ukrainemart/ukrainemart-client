<script setup lang="ts">
  type Props = {
    text: string; // The text to display on the button
    styles?: string; // Additional custom styles for the button
  };

  withDefaults(defineProps<Props>(), {
    styles: '',
  });
</script>

<template>
  <button
    :class="
      cn(
        'font-montserrat text-[12px] font-medium leading-4 text-black transition-opacity duration-100 ease-linear hover:opacity-70 focus:outline-none disabled:cursor-not-allowed lg:text-[20px] lg:leading-6',
        styles
      )
    "
  >
    <slot name="icon" />

    {{ text }}
  </button>
</template>

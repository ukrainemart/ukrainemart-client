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
        'flex items-center justify-center gap-[9px] rounded-[50px] border border-solid border-black bg-white px-[27px] py-[7px] font-montserrat text-[12px] font-medium leading-4 text-black ease-linear  focus:outline-none disabled:cursor-not-allowed lg:border-2 lg:px-[33px] lg:py-[11px] lg:text-[20px] lg:leading-6',
        styles
      )
    "
  >
    <slot />
  </UiButtonOpacity>
</template>

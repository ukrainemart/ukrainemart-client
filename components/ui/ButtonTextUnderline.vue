<script setup lang="ts">
  defineProps<{
    styles?: string;
  }>();
</script>

<template>
  <UiButtonText
    :styles="
      cn(
        'relative before:absolute before:bottom-[-3px] before:bg-black before:transition-all before:duration-100 before:h-[2px] before:ease-in md:hover:before:w-full before:left-2 before:w-0 before:content-[\'\']',
        styles
      )
    "
  >
    <slot />
  </UiButtonText>
</template>

<style></style>

<script setup lang="ts">
  defineProps<{
    styles?: string;
  }>();
</script>

<template>
  <UiButtonText
    :styles="
      cn(
        'relative before:absolute before:bottom-[-3px] md:hover:before:bg-black before:left-2 before:h-[2px] before:w-full before:bg-transparent before:content-[\'\']',
        styles
      )
    "
  >
    <slot />
  </UiButtonText>
</template>

<style></style>

<script setup lang="ts">
  type Props = {
    styles?: string; // Additional custom styles for the button
  };

  withDefaults(defineProps<Props>(), {
    styles: '',
  });
</script>

<template>
  <UiButtonText class="hover:opacity-hover" :styles="styles">
    <slot />
  </UiButtonText>
</template>

<script setup lang="ts">
  defineProps<{
    styles?: string;
  }>();
</script>

<template>
  <span
    :class="
      cn(
        'relative block before:absolute before:inset-0 before:m-auto before:h-full before:w-[2px] before:rotate-45 before:bg-black before:content-[\'\'] after:absolute after:inset-0 after:m-auto after:h-full after:w-[2px] after:-rotate-45 after:bg-black after:content-[\'\']',
        styles
      )
    "
  />
</template>

<style></style>

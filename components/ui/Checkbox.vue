<script setup lang="ts">
  defineProps<{
    ui?: any;
  }>();
</script>

<template>
  <UCheckbox :ui="{ ...ui, border: 'border-black', color: '!text-black' }" class="text-black" />
</template>

<style scoped></style>

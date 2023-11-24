<script setup lang="ts">
  defineProps<{
    ui?: any;
  }>();
</script>

<template>
  <UCheckbox
    :ui="{ border: 'border-black', color: '!text-black', background: 'bg-transparent', ...ui }"
    class="text-black"
  />
</template>

<style scoped></style>

<script setup lang="ts">
  const options = [
    {
      id: 'ua',
      title: 'ua',
    },
    {
      id: 'en',
      title: 'en',
    },
  ];
</script>

<template>
  <UiSwitcher :options="options" />
</template>

<style scoped></style>

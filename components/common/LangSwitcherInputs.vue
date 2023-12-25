<script setup lang="ts">
  defineProps<{
    errorEn: boolean;
  }>();

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
  <UiSwitcher :options="options" :error="errorEn" />
</template>

<style scoped></style>

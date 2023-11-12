<script setup lang="ts">
  import TabExporter from '../pages/TabExporter.vue';
  import TabProduct from '../pages/TabProduct.vue';

  const items = [
    {
      label: 'Детальніше про товар',
      content: TabExporter,
    },
    {
      label: 'Детальніше про експортера',
      content: TabProduct,
    },
  ];
</script>

<template>
  <UiTabs :items="items" />
</template>

<style></style>

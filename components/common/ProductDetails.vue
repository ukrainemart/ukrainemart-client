<script setup lang="ts">
  import TabExporter from '../pages/TabExporter.vue';
  import TabProduct from '../pages/TabProduct.vue';

  const items = [
    {
      label: 'Про товар',
      content: TabExporter,
    },
    {
      label: 'Про експортера',
      content: TabProduct,
    },
  ];
</script>

<template>
  <UiTabs
    :items="items"
    :ui="{
      wrapper: 'overflow-hidden mb-[25px] text-[12px] md:mb-[100px] md:text-[16px]',
      content: 'leading-[15px] md:leading-[20px] 2xl:leading-[24px]',
    }"
  />
</template>

<style></style>

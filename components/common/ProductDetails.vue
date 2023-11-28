<script setup lang="ts">
  import TabExporter from '../pages/TabExporter.vue';
  import TabProduct from '../pages/TabProduct.vue';

  const props = defineProps<{
    product: Product;
  }>();

  const items = computed(() => [
    {
      label: 'Про товар',
      content: TabProduct,
      data: useMultiLang(props.product, 'description'),
    },
    {
      label: 'Про експортера',
      content: TabExporter,
      data: props.product?.company?.description,
    },
  ]);
</script>

<template>
  <UiTabs
    :items="items"
    :ui="{
      wrapper: 'overflow-hidden mb-[25px] text-[12px] md:mb-[100px] md:text-[16px]',
    }"
  />
</template>

<style></style>

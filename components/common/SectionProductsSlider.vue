<script setup lang="ts">
  defineProps<{
    products: any[];
  }>();
</script>

<template>
  <UiSectionTitleSlider
    :slides="products"
    :breakpoints="{
      375: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    }"
  >
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #slide="{ slide }">
      <CommonCardProduct :product="slide" />
    </template>
  </UiSectionTitleSlider>
</template>

<style scoped></style>

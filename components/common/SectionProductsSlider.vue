<script setup lang="ts">
  const { width } = useWindowSize();
  const { BREAKPOINTS_4XL } = useVariables();

  const showAllSlides = computed(() => {
    if (width.value >= BREAKPOINTS_4XL) {
      return false;
    }
    return true;
  });

  defineProps<{
    products: any[];
  }>();
</script>

<template>
  <UiSectionTitleSlider
    :showAll="showAllSlides"
    :slides="products"
    :centeredSlides="showAllSlides"
    type="products"
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
      <slot name="title" />
    </template>
    <template #slide="{ slide }">
      <CommonCardProduct :product="slide" />
    </template>
  </UiSectionTitleSlider>
</template>

<style scoped></style>

<script lang="ts" setup>
  const { width } = useWindowSize();
  const { BREAKPOINTS_MD } = useVariables();

  const showSideSlider = computed(() => width.value >= BREAKPOINTS_MD);
</script>

<template>
  <div class="pb-[70px] md:pb-[100px] 2xl:pb-[130px]">
    <CommonBreadcrumbs />
    <div class="container flex flex-wrap 2xl:justify-between">
      <div class="flex flex-col md:flex-row md:gap-x-5 2xl:gap-x-10">
        <div class="mb-[20px] flex gap-[5px] md:mb-[35px] 2xl:mb-[80px] 2xl:gap-[10px]">
          <CommonProductSideSlider v-if="showSideSlider" />
          <CommonProductSlider />
        </div>
        <CommonProductInfo />
      </div>

      <CommonProductDetails class="order-2" />
      <CommonSellerInfo />
    </div>

    <CommonSectionProductsSlider :products="[1, 1, 1, 1, 1, 11, 1, 1]" class="!pt-0">
      <template #title> Інші товари від цього продавця </template>
    </CommonSectionProductsSlider>

    <CommonSectionProductsSlider :products="[1, 1, 1, 1, 1, 11, 1, 1]" class="">
      <template #title> Інші товари з цієї категорії </template>
    </CommonSectionProductsSlider>

    <CommonSectionCategories />
  </div>
</template>

<style></style>

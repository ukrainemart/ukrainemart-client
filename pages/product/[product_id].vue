<script lang="ts" setup>
  const { width } = useWindowSize();
  const { BREAKPOINTS_MD } = useVariables();

  const showSideSlider = computed(() => width.value >= BREAKPOINTS_MD);
</script>

<template>
  <div>
    <CommonBreadcrumbs />
    <div class="container 2xl:flex 2xl:justify-between">
      <div class="flex flex-col md:flex-row md:gap-x-5 2xl:gap-x-10">
        <div class="mb-[20px] flex gap-[5px] md:mb-[35px] 2xl:mb-[80px] 2xl:gap-[10px]">
          <CommonProductSideSlider v-if="showSideSlider" />
          <CommonProductSlider />
        </div>
        <CommonProductInfo />
      </div>

      <!-- <CommonProductDetails /> -->
      <CommonSellerInfo />
    </div>
  </div>
</template>

<style></style>

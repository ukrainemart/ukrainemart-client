<script lang="ts" setup>
  const { width } = useWindowSize();
  const { BREAKPOINTS_MD } = useVariables();
  const route = useRoute();
  const productId = route.params.id;
  const product = ref<Product>();

  const mainSlider = ref(null);
  const sideSwiper = ref(null);
  const showSideSlider = computed(() => width.value >= BREAKPOINTS_MD);

  const setThumbsSwiper = (swiper: any) => {
    sideSwiper.value = swiper;
  };

  const setControlledMainSwiper = (swiper: any) => {
    mainSlider.value = swiper;
  };

  const getProduct = async () => {
    // REVIEW useApi => useApiFetch
    try {
      const res = await useApi(`${useUrlApi()}/product/show/${productId}`);

      product.value = res as Product;
    } catch (error) {
      console.error(error);
    }
  };

  getProduct();
</script>

<template>
  <div class="pb-[70px] md:pb-[100px] 2xl:pb-[130px]">
    <CommonBreadcrumbs />
    <div class="container grid 2xl:grid-cols-[1fr_min-content] 2xl:gap-x-5">
      <div class="flex w-full flex-col md:flex-row md:gap-x-5 xl:w-fit 2xl:gap-x-10">
        <div class="mb-[20px] flex gap-[5px] md:mb-[35px] 2xl:mb-[80px] 2xl:gap-[10px]">
          <CommonProductSideSlider
            v-if="showSideSlider"
            :slides="product?.images"
            @swiper="setThumbsSwiper"
          />

          <CommonProductSlider
            :thumbs="{ swiper: sideSwiper }"
            :slides="product?.images"
            @swiper="setControlledMainSwiper"
          />
        </div>

        <CommonProductInfo :product="product" />
      </div>

      <CommonProductDetails class="md:order-2 2xl:col-span-2" />
      <CommonSellerInfo :product="product" />
    </div>

    <CommonSectionProductsSlider :products="[1, 1, 1, 1, 1, 11, 1, 1]" class="!pt-0">
      <template #title> Інші товари від цього продавця </template>
    </CommonSectionProductsSlider>

    <CommonSectionProductsSlider :products="[1, 1, 1, 1, 1, 11, 1, 1]">
      <template #title> Інші товари з цієї категорії </template>
    </CommonSectionProductsSlider>

    <CommonSectionCategories />
  </div>
</template>

<style></style>

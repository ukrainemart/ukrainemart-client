<script lang="ts" setup>
  const route = useRoute();
  const productId = route.params.id;
  const product = ref<Product>();
  const loading = ref(true);

  const mainSlider = ref(null);
  const sideSwiper = ref(null);

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
      loading.value = false;
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
          <div v-if="loading" class="hidden md:block">
            <UiSkeleton class="h-[435px] w-[50px] 2xl:h-[584px] 2xl:w-[100px]" />
          </div>
          <CommonProductSideSlider
            v-else
            class="hidden md:block"
            :slides="product?.images"
            @swiper="setThumbsSwiper"
          />

          <UiSkeleton
            v-if="loading"
            class="h-[470px] w-[335px] md:h-[435px] md:w-[330px] 2xl:h-[584px] 2xl:w-[450px]"
          />
          <CommonProductSlider
            v-else
            :thumbs="{ swiper: sideSwiper }"
            :slides="product?.images"
            @swiper="setControlledMainSwiper"
          />
        </div>

        <CommonProductInfo :product="product" :loading="loading" />
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

<script lang="ts" setup>
  const route = useRoute();
  const productId = route.params.id;
  // const product = ref<Product>();
  // const loading = ref(true);
  // const NUM_SKELETON_ITEMS = 7;
  const mainSlider = ref(null);
  const sideSwiper = ref(null);
  // const products = ref<Product[]>([]);
  const product = ref<Product>();

  const setThumbsSwiper = (swiper: any) => {
    sideSwiper.value = swiper;
  };

  const setControlledMainSwiper = (swiper: any) => {
    mainSlider.value = swiper;
  };

  const { data } = await useApiFetch(`${useUrlApi()}/product/show/${productId}`);
  product.value = data.value as Product;
  // const getProducts = async () => {
  //   // REVIEW useFetchApi
  //   try {
  //     const res = await useApi(`${useUrlApi()}/product/list`);

  //     products.value = res as Product[];
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // getProducts();
</script>

<template>
  <div class="pb-[70px] md:pb-[100px] 2xl:pb-[130px]">
    <CommonBreadcrumbs :breadcrumb="product?.category" />

    <div class="container grid 2xl:grid-cols-[1fr_min-content] 2xl:gap-x-5">
      <div class="flex w-full flex-col md:flex-row md:gap-x-5 xl:w-fit 2xl:gap-x-10">
        <div class="mb-[20px] flex gap-[5px] md:mb-[35px] 2xl:mb-[80px] 2xl:gap-[10px]">
          <!-- REVIEW <div
            v-if="loading"
            class="hidden h-[435px] flex-col gap-[5px] md:flex 2xl:h-[584px] 2xl:gap-[10px]"
          >
            <UiSkeleton
              v-for="i in NUM_SKELETON_ITEMS"
              :key="i"
              class="h-[62px] w-[50px] 2xl:h-[124px] 2xl:w-[100px]"
            />
          </div> -->
          <CommonProductSideSlider
            class="!hidden md:!block"
            :slides="product?.images"
            @swiper="setThumbsSwiper"
          />

          <!-- REVIEW <UiSkeleton
            v-if="loading"
            class="h-[470px] w-[335px] md:h-[435px] md:w-[330px] 2xl:h-[584px] 2xl:w-[450px]"
          /> -->
          <CommonProductSlider
            :thumbs="{ swiper: sideSwiper }"
            :slides="product?.images"
            @swiper="setControlledMainSwiper"
          />
        </div>

        <CommonProductInfo :product="product" />
      </div>

      <CommonProductDetails :product="product" class="md:order-2 2xl:col-span-2" />
      <CommonSellerInfo :product="product" />
    </div>

    <CommonSectionProductsSlider
      v-if="product && product.product_company.length > 0"
      :products="product?.product_company"
      class="!pt-0"
    >
      <template #title> Інші товари від цього продавця </template>
    </CommonSectionProductsSlider>

    <CommonSectionProductsSlider
      v-if="product && product.product_same_category.length > 0"
      :products="product?.product_same_category"
    >
      <template #title> Інші товари з цієї категорії </template>
    </CommonSectionProductsSlider>

    <CommonSectionCategories />
  </div>
</template>

<style></style>

<script lang="ts" setup>
  const route = useRoute();
  const productId = route.params.id;
  const loading = ref(true);
  const NUM_SKELETON_ITEMS = 7;
  const mainSlider = ref(null);
  const sideSwiper = ref(null);
  const thumbsSwiper = ref(null);
  const isChat = ref<boolean>(false);
  const product = ref<Product>();
  const auth = useAuthStore();
  const userCompanyId = computed(() => auth.user?.company?.id);
  const isChatOpenBtn = computed(() => userCompanyId.value !== product.value?.company_id);
  const titleProduct = computed(() => useMultiLang(product.value, 'title'));
  useTitle(titleProduct);

  const setThumbsSwiper = (swiper: any) => (sideSwiper.value = swiper);

  const setControlledMainSwiper = (swiper: any) => (mainSlider.value = swiper);

  const switchChat = (value: boolean) => {
    isChat.value = value;
  };

  const checkLoading = () => {
    if (process.client) {
      loading.value = false;
    }
  };

  const fetchProduct = async () => {
    try {
      const response = await useApiFetch(`${useUrlApi()}/product/show/${productId}`);
      product.value = response?.data.value as Product;
      checkLoading();
    } catch (error) {
      console.error(error);
    }
  };

  fetchProduct();
</script>

<template>
  <div class="pb-[70px] md:pb-[100px] 2xl:pb-[130px]">
    <CommonModalChat
      v-model="isChat"
      :recipientName="product?.company?.title"
      :productId="product?.id"
    />
    <CommonBreadcrumbs
      v-if="product"
      :breadcrumb="product.category"
      :productCrumb="useMultiLang(product, 'title')"
    />

    <div class="container grid 2xl:grid-cols-[1fr_min-content] 2xl:gap-x-5">
      <div class="flex w-full flex-col md:flex-row md:gap-x-5 xl:w-fit 2xl:gap-x-10">
        <div class="mb-[20px] flex gap-[5px] md:mb-[35px] 2xl:mb-[80px] 2xl:gap-[10px]">
          <div
            v-if="loading"
            class="hidden h-[435px] flex-col gap-[5px] md:flex 2xl:h-[584px] 2xl:gap-[10px]"
          >
            <UiSkeleton
              v-for="i in NUM_SKELETON_ITEMS"
              :key="i"
              class="h-[62px] w-[50px] 2xl:h-[124px] 2xl:w-[100px]"
            />
          </div>
          <CommonProductSideSlider
            v-if="product?.images && !loading"
            ref="thumbsSwiper"
            class="!hidden md:!block"
            :slides="product?.images"
            @swiper="setThumbsSwiper"
          />

          <UiSkeleton
            v-if="loading"
            class="mx-auto h-[470px] w-[335px] md:h-[435px] md:w-[330px] 2xl:h-[584px] 2xl:w-[450px]"
          />
          <CommonProductSlider
            v-if="product?.images && !loading"
            :thumbs="{ swiper: sideSwiper }"
            :slides="product?.images"
            @swiper="setControlledMainSwiper"
          />
        </div>

        <CommonProductInfo
          v-if="product"
          :isChatOpenBtn="isChatOpenBtn"
          :product="product"
          @switchChat="switchChat"
        />
      </div>

      <CommonProductDetails v-if="product" :product="product" class="md:order-2 2xl:col-span-2" />
      <CommonSellerInfo
        v-if="product"
        :isChatOpenBtn="isChatOpenBtn"
        :product="product"
        @switchChat="switchChat"
      />
    </div>

    <CommonSectionProductsSlider
      v-if="product && product.product_company.length > 0"
      :products="product?.product_company"
      class="!pt-0"
    >
      <template #title>
        {{ $t('other_products_from_seller') }}
      </template>
    </CommonSectionProductsSlider>

    <CommonSectionProductsSlider
      v-if="product && product.product_same_category.length > 0"
      :products="product?.product_same_category"
    >
      <template #title>
        {{ $t('other_products_from_category') }}
      </template>
    </CommonSectionProductsSlider>

    <CommonSectionCategories />
  </div>
</template>

<style></style>

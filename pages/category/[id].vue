<script setup lang="ts">
  const route = useRoute();
  const categoryId = route.params.id;
  const category = ref<Category>();
  const products = ref<Product[]>([]);
  const isOpenFilterMenu = ref(false);
  const NUM_GHOST_CARDS = 5;

  const getProducts = async () => {
    // REVIEW useApi => useApiFetch
    try {
      const res = await useApi(`${useUrlApi()}/category/products/${categoryId}`);

      products.value = res as Product[];
    } catch (error) {
      console.error(error);
    }
  };

  const getCategory = async () => {
    // REVIEW useApi => useApiFetch
    try {
      const res = await useApi(`${useUrlApi()}/category/${categoryId}`);

      category.value = res as Category;
      getProducts();
    } catch (error) {
      console.error(error);
    }
  };

  getCategory();
</script>

<template>
  <div class="pb-[70px] md:pb-[100px] 2xl:pb-[130px]">
    <CommonBreadcrumbs />

    <div class="container grid-cols-[300px_1fr] gap-x-[50px] lg:grid">
      <aside>
        <PagesCategoryFilters :category="category" class="hidden lg:block" />
      </aside>

      <div>
        <div class="">
          <CommonProductTitle class="mb-5 md:mb-[30px] lg:mb-10">
            {{ useMultiLang(category, 'title') }}
          </CommonProductTitle>

          <div class="mb-[15px] flex items-center justify-between md:mb-5">
            <button
              type="button"
              class="text-[14px] font-medium md:text-[18px] lg:hidden"
              @click="isOpenFilterMenu = true"
            >
              Фільтри
            </button>
            <button
              type="button"
              class="text-[10px] font-medium text-status_gray md:text-[12px] lg:text-[16px]"
            >
              Очистити фільтри
            </button>
          </div>
        </div>

        <div
          class="max-w-cards-product-slider-container-xs px-padding-x-slider-container-xs md:px-padding-x-slider-container-md lg:max-w-cards-product-slider-container-lg lg:px-padding-x-slider-container-lg 2xl:max-w-cards-product-slider-container-2xl 2xl:px-padding-x-slider-container-2xl 4xl:max-w-screen-4xl"
        >
          <div class="mb-[30px] flex flex-wrap justify-evenly md:mb-[40px] lg:mb-[50px]">
            <CommonCardProduct
              v-for="product in products"
              :key="product.id"
              :product="product"
              class="w-[152px] md:w-[220px] 4xl:w-[348px]"
            />

            <!-- NOTE This loop creates five hidden cards to fill in gaps in a layout. It helps evenly space elements but makes sure the last row looks snug against the start instead of spreading out. -->
            <div
              v-for="i in NUM_GHOST_CARDS"
              :key="i"
              class="h-px w-[152px] md:w-[220px] 4xl:w-[348px]"
            />
          </div>
        </div>

        <div class="">
          <UiPagination />
        </div>
      </div>
    </div>

    <PagesCategoryFilterMenu
      v-model="isOpenFilterMenu"
      :isOpen="isOpenFilterMenu"
      :category="category"
      class="lg:hidden"
    />
  </div>
</template>

<style></style>

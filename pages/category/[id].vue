<script setup lang="ts">
  const route = useRoute();
  const categoryId = route.params.id;
  const category = ref<Category>();
  const products = ref<Product[]>([]);
  const isOpenFilterMenu = ref(false);
  const loading = ref(true);
  // const NUM_SKELETON_ITEMS = 20;

  const getProducts = async () => {
    try {
      const res = await useApiFetch(`${useUrlApi()}/category/products/${categoryId}`);

      products.value = res.data.value as Product[];
      loading.value = false;
    } catch (error) {
      console.error(error);
    }
  };

  // const getCategory = async () => {
  //   try {
  //     const res = await useApiFetch(`${useUrlApi()}/category/get/${categoryId}`);

  //     category.value = res.data.value as Category;
  //     getProducts();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const getCategory = async () => {
    // REVIEW useApi => useApiFetch
    try {
      const res = await useApi(`${useUrlApi()}/category/get/${categoryId}`);

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

    <div class="container grid-cols-[225px_1fr] gap-x-[30px] lg:grid lg:grid-cols-[300px_1fr]">
      <aside>
        <PagesCategoryFilters :category="category" class="hidden lg:block" />
      </aside>

      <div>
        <div class="mb-5">
          <CommonProductTitle class="mb-5 xl:mb-[30px] 2xl:mb-10">
            {{ useMultiLang(category, 'title') }}
          </CommonProductTitle>

          <div class="mb-[15px] flex items-center justify-between md:mb-[15px]">
            <button
              type="button"
              class="text-[14px] font-medium md:text-[18px] lg:hidden"
              @click="isOpenFilterMenu = true"
            >
              Фільтри
            </button>

            <!-- TODO v-if active filters -->
            <button
              type="button"
              class="text-[10px] font-medium text-status_gray md:text-[12px] lg:text-[16px]"
            >
              Очистити фільтри
            </button>
          </div>

          <CommonFilterTags />
        </div>

        <div class="">
          <div
            class="mb-[30px] grid grid-cols-12 gap-x-[25px] gap-y-5 md:mb-[40px] md:gap-x-[32px] md:gap-y-10 lg:mb-[50px] 4xl:gap-x-[44px] 4xl:gap-y-[60px]"
          >
            <!-- <div v-if="loading" class="flex flex-wrap justify-evenly">
              <UiSkeleton
                v-for="i in NUM_SKELETON_ITEMS"
                :key="i"
                class="h-[260px] w-[166px] md:h-[370px] md:w-[220px] 4xl:h-[508px] 4xl:w-[348px]"
              />
            </div> -->

            <CommonCardProduct
              v-for="product in products"
              :key="product.id"
              :product="product"
              class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-4 xl:col-span-3"
            />
          </div>
        </div>

        <div class="">
          <!-- <UiSkeleton v-if="loading" class="mx-auto h-[27px] w-[125px]" /> -->
          <UiPagination v-if="!loading" />
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

<script setup lang="ts">
  const route = useRoute();
  const categoryId = route.params.id;
  const category = ref<Category>();
  const products = ref<Product[]>([]);
  const isOpenFilterMenu = ref(false);
  const loading = ref(true);
  const NUM_SKELETON_CARDS = 20;

  const getProducts = async () => {
    // REVIEW useApi => useApiFetch
    try {
      const res = await useApi(`${useUrlApi()}/category/products/${categoryId}`);

      products.value = res as Product[];
      loading.value = false;
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

    <div class="container grid-cols-[225px_1fr] gap-x-[30px] lg:grid">
      <aside>
        <PagesCategoryFilters :category="category" class="hidden lg:block" />
      </aside>

      <div>
        <div class="mb-5">
          <UiSkeleton
            v-if="loading"
            class="mb-5 h-[20px] w-full md:h-[32px] xl:mb-[30px] 2xl:mb-10 2xl:h-[35px]"
          />
          <CommonProductTitle v-else class="mb-5 xl:mb-[30px] 2xl:mb-10">
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
          <div class="mb-[30px] flex flex-wrap justify-evenly md:mb-[40px] lg:mb-[50px]">
            <div v-if="loading" class="flex flex-wrap justify-evenly">
              <UiSkeleton
                v-for="i in NUM_SKELETON_CARDS"
                :key="i"
                class="h-[260px] w-[166px] md:h-[370px] md:w-[220px] 4xl:h-[508px] 4xl:w-[348px]"
              />
            </div>

            <CommonCardProduct
              v-for="product in products"
              v-else
              :key="product.id"
              :product="product"
              class="w-[166px] md:w-[234px] 4xl:w-[348px]"
            />
          </div>
        </div>

        <div class="">
          <UiSkeleton v-if="loading" class="mx-auto h-[27px] w-[125px]" />
          <UiPagination v-else />
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

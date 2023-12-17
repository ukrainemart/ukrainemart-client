<script setup lang="ts">
  const route = useRoute();
  const router = useRouter();
  const categoryId = route.params.id;
  const category = ref<Category>();
  const products = ref<Product[]>([]);
  const isOpenFilterMenu = ref(false);
  const isLoading = ref(true);
  const titleProduct = computed(() => useMultiLang(category.value, 'title'));
  useTitle(titleProduct);
  const minAmount = ref(0);
  const priceRange = reactive({
    api: {
      min: 0,
      max: 0,
    },
    input: {
      min: 0,
      max: 0,
    },
  });
  // const NUM_SKELETON_ITEMS = 20;

  const handlerFilter = (filterValue: any, filterType: string) => {
    switch (filterType) {
      case 'price': {
        priceRange.input.min = filterValue.min;
        priceRange.input.max = filterValue.max;
        break;
      }
      case 'minAmount': {
        minAmount.value = filterValue;
        break;
      }
      default:
        throw new Error(`Unexpected filterType - ${filterType} or filterValue - ${filterValue}`);
    }
  };

  provide('priceRange', { priceRange, handlerFilter });
  provide('minAmount', { minAmount, handlerFilter });
  provide('products', products);

  const updateUrlWithFilters = () => {
    const query: { [key: string]: number } = {
      min_price: priceRange.input.min,
      max_price: priceRange.input.max,
      min_amount: minAmount.value,
    };

    Object.keys(query).forEach((key) => {
      if (!query[key]) {
        delete query[key];
      }
    });

    router.push({ query });
  };

  const getValueQuery = () => {
    if (!route.query) return false;

    let minPrice = Number(route.query?.min_price);
    let maxPrice = Number(route.query?.max_price);

    if (Number.isNaN(minPrice) || minPrice < priceRange.api.min || minPrice > priceRange.api.max) {
      minPrice = priceRange.api.min;
    }

    if (Number.isNaN(maxPrice) || maxPrice < priceRange.api.min || maxPrice > priceRange.api.max) {
      maxPrice = priceRange.api.max;
    }

    priceRange.input.min = minPrice;
    priceRange.input.max = maxPrice;
    minAmount.value = Number(route.query?.min_amount) || minAmount.value;
  };

  const getProducts = async () => {
    try {
      const res = await useFetch(
        `${useUrlApi()}/category/products/${categoryId}` +
          `?min_price=${priceRange.input.min}` +
          `&max_price=${priceRange.input.max}` +
          `&min_amount=${minAmount.value}`
      );

      products.value = res.data.value as Product[];
      isLoading.value = false;
    } catch (error) {
      console.error(error);
    }
  };

  const getCategory = async () => {
    try {
      const res = await useFetch(`${useUrlApi()}/category/get/${categoryId}`);

      if (res) {
        category.value = res.data.value as Category;

        priceRange.api.min = category.value.min_price;
        priceRange.api.max = category.value.max_price;
        priceRange.input.min = category.value.min_price;
        priceRange.input.max = category.value.max_price;

        getValueQuery();
      }
    } catch (error) {
      console.error(error);
    }
  };

  getCategory();

  watchDeep([priceRange, minAmount], async () => {
    isLoading.value = true;
    await getProducts();
    updateUrlWithFilters();
  });
</script>

<template>
  <div class="pb-[70px] md:pb-[100px] 2xl:pb-[130px]">
    <CommonBreadcrumbs v-if="category" :breadcrumb="category" />

    <div
      class="container grid-cols-[225px_1fr] gap-x-[30px] lg:grid lg:grid-cols-[300px_1fr] xl:gap-x-[50px]"
    >
      <aside>
        <PagesCategoryFilters v-if="category" :category="category" class="hidden lg:block" />
      </aside>

      <div>
        <div class="mb-5">
          <CommonProductTitle class="mb-5 xl:mb-[30px] 2xl:mb-10">
            {{ useMultiLang(category, 'title') }}
          </CommonProductTitle>

          <div class="mb-[15px] flex items-center justify-between md:mb-[15px] lg:hidden">
            <button
              type="button"
              class="text-[14px] font-medium md:text-[18px]"
              @click="isOpenFilterMenu = true"
            >
              {{ $t('category.filters') }}
            </button>
          </div>
        </div>

        <div>
          <!-- TODO uncomment it after solving the ssr slow isLoading problem <div
            v-if="isLoading"
            class="mb-[30px] grid grid-cols-12 gap-x-[25px] gap-y-5 md:mb-[40px] md:gap-x-[32px] md:gap-y-10 lg:mb-[50px] 4xl:gap-x-[44px] 4xl:gap-y-[60px]"
          >
            <CommonSkeletonCardProduct
              v-for="i in NUM_SKELETON_ITEMS"
              :key="i"
              class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-4 xl:col-span-3"
            />
          </div> -->

          <div
            v-if="!isLoading && products.length"
            class="mb-[30px] grid grid-cols-12 gap-x-[25px] gap-y-5 md:mb-[40px] md:gap-x-[32px] md:gap-y-10 lg:mb-[50px] 4xl:gap-x-[44px] 4xl:gap-y-[60px]"
          >
            <CommonCardProduct
              v-for="product in products"
              :key="product.id"
              :product="product"
              class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-4 xl:col-span-3"
            />
          </div>

          <div v-if="!isLoading && !products.length">
            {{ $t('search.nothing_found') }}
          </div>
        </div>
      </div>
    </div>

    <UiSideModal
      v-model="isOpenFilterMenu"
      :label="$t('category.filters')"
      class="lg:hidden"
      @toggleModal="isOpenFilterMenu = false"
    >
      <PagesCategoryFilters v-if="category" :category="category" />
    </UiSideModal>
  </div>
</template>

<style></style>

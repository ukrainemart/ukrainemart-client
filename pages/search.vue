<script setup lang="ts">
  const route = useRoute();
  const { param } = route.query;
  const breadcrumb = {
    title_ua: 'Пошук',
    title_en: 'Search',
  };
  const categories = ref<Category[]>();
  const products = ref<Product[]>([]);
  const isLoading = ref<boolean>(true);

  useTitle('Пошук | Ukrainemart');

  const getSearchResult = async (query: string) => {
    try {
      const res: { products: Product[]; categories: Category[] } = await useApi(
        `${useUrlApi()}/search/query?search=${query}`
      );

      categories.value = res.categories;
      products.value = res.products;
      isLoading.value = false;
    } catch (err) {
      console.error(err);
    }
  };

  getSearchResult(param as string);
</script>

<template>
  <div class="pb-[70px] md:pb-[100px] 2xl:pb-[130px]">
    <CommonBreadcrumbs :breadcrumb="breadcrumb" />

    <div class="container">
      <div>
        <div class="mb-5">
          <CommonProductTitle class="mb-5 xl:mb-[30px] 2xl:mb-10">
            {{ `Результати за пошуком "${param}"` }}
          </CommonProductTitle>

          <p
            v-if="!isLoading"
            class="mb-[15px] text-[10px] text-status_gray md:text-[12px] xl:mb-5 xl:text-[20px]"
          >
            {{ `Знайдено ${products.length} товарів` }}
          </p>
        </div>

        <div
          v-if="!isLoading"
          class="mb-5 flex flex-wrap gap-x-5 gap-y-[20px] md:mb-[30px] md:gap-[25px] xl:gap-x-[30px]"
        >
          <NuxtLink
            v-for="category in categories"
            :key="category.id"
            :to="`/category/${category.id}`"
            class="text-[12px] font-medium hover:underline md:text-[14px] lg:text-[16px]"
          >
            {{ useMultiLang(category, 'title') }}
          </NuxtLink>
        </div>

        <div
          class="mb-[30px] grid grid-cols-12 gap-x-[25px] gap-y-5 md:mb-[40px] md:gap-x-[32px] md:gap-y-10 lg:mb-[50px] xl:grid-cols-10 4xl:gap-x-[44px] 4xl:gap-y-[60px]"
        >
          <CommonCardProduct
            v-for="product in products"
            :key="product.id"
            :product="product"
            class="col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

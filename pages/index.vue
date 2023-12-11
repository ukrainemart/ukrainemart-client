<script lang="ts" setup>
  useTitle('home');

  definePageMeta({
    layout: 'header-without-logo',
  });

  type MainPageData = {
    products: Product[];
    importRequests: Request[];
  };

  const products = ref<Product[]>([]);
  const requests = ref<Request[]>([]);

  const getProducts = async () => {
    // REVIEW useFetchApi
    try {
      const res: any = await useFetch(`${useUrlApi()}/main_page`);
      const data: MainPageData = res.data.value;

      products.value = data?.products as Product[];
      requests.value = data?.importRequests as Request[];
    } catch (error) {
      console.error(error);
    }
  };

  getProducts();
</script>

<template>
  <div>
    <CommonHeroSection />
    <CommonSectionProductsSlider :products="products">
      <template #title>
        {{ $t('goodsFromUaExporters') }}
      </template>
    </CommonSectionProductsSlider>
    <CommonSectionRequestsImporters :title="$t('requestsFromIntlImporters')" :requests="requests" />
    <CommonSectionPopularCategories />
    <CommonSectionFaq />
    <CommonSectionOurPartners />
  </div>
</template>

<style></style>

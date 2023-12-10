<script lang="ts" setup>
  useTitle('home');

  definePageMeta({
    layout: 'header-without-logo',
  });

  const products = ref<Product[]>([]);

  const getProducts = async () => {
    // REVIEW useFetchApi
    try {
      const res: any = await useFetch(`${useUrlApi()}/main_page`);

      products.value = res?.data?.value?.products as Product[];
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
    <CommonSectionRequestsImporters />
    <CommonSectionPopularCategories />
    <CommonSectionFaq />
    <CommonSectionOurPartners />
  </div>
</template>

<style></style>

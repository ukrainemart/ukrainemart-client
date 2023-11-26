<script lang="ts" setup>
  definePageMeta({
    layout: 'header-without-logo',
  });

  const products = ref<Product[]>([]);

  const getProducts = async () => {
    // REVIEW useFetchApi
    try {
      const res = await useApi(`${useUrlApi()}/main_page`);

      products.value = res as Product[];
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
    <CommonSectionOurPartners class="hidden xl:block" />
  </div>
</template>

<style></style>

<script lang="ts" setup>
  definePageMeta({
    layout: 'header-without-logo',
  });
</script>

<template>
  <div>
    <CommonHeroSection />
    <CommonSectionProductsSlider :products="[1, 1, 1, 1, 1, 11, 1, 1]">
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

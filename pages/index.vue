<script lang="ts" setup></script>

<template>
  <div>
    <LayoutHeader />
    <CommonHeroSection />
    <CommonSectionProductsSlider :products="[1, 1, 1, 1, 1, 11, 1, 1]">
      <template #title> Товари від українських експортерів </template>
    </CommonSectionProductsSlider>
    <CommonSectionRequestsImporters />
    <CommonSectionPopularCategories />
    <CommonSectionFaq />
    <CommonSectionOurPartners class="hidden xl:block" />
  </div>
</template>

<style></style>

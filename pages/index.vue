<script lang="ts" setup></script>

<template>
  <div>
    <Hello />
    <PagesCategoriesSection></PagesCategoriesSection>
    <div>
      <UiSectionTitleXl>
        <template #title> Інші товари від цього продавця </template>
      </UiSectionTitleXl>
      <div class="container max-w-[1787px] lg:max-w-[1820px] xl:max-w-[1840px]">
        <Swiper
          class="products_swiper !overflow-y-visible"
          :modules="[SwiperAutoplay]"
          :slides-per-view="5"
        >
          <SwiperSlide v-for="slide in 10" :key="slide">
            <CommonCardProduct />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<style>
  .products_swiper {
  }
</style>

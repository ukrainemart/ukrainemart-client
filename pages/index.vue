<script lang="ts" setup></script>

<template>
  <div>
    <Hello />
    <PagesCategoriesSection></PagesCategoriesSection>
    <UiSectionTitleXl>
      <template #title> Інші товари від цього продавця </template>
      <template #content>
        <Swiper
          class="products_swiper !overflow-y-visible"
          :modules="[SwiperAutoplay]"
          :slides-per-view="5"
        >
          <SwiperSlide v-for="slide in 10" :key="slide">
            <CommonCardProduct />
          </SwiperSlide>
        </Swiper>
      </template>
    </UiSectionTitleXl>
  </div>
</template>

<style>
  .products_swiper {

  }
</style>

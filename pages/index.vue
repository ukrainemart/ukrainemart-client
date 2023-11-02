<script lang="ts" setup>
  const prev = ref(null);
  const next = ref(null);
</script>

<template>
  <div>
    <CommonCategoriesSection></CommonCategoriesSection>
    <div>
      <UiSectionTitleXl>
        <template #title> Інші товари від цього продавця </template>
        <template #additional_elements>
          <div class="hidden gap-[50px] md:flex">
            <button ref="prev">
              <UiButtonOpacityIconPrev class="text-[50px]"></UiButtonOpacityIconPrev>
            </button>
            <button ref="next">
              <UiButtonOpacityIconNext class="text-[50px]"></UiButtonOpacityIconNext>
            </button>
          </div>
        </template>
      </UiSectionTitleXl>
      <div
        class="container max-w-cards-product-slider-container-xs px-padding-x-slider-container-xs md:px-padding-x-slider-container-md lg:max-w-cards-product-slider-container-lg lg:px-padding-x-slider-container-lg 2xl:max-w-cards-product-slider-container-2xl 2xl:px-padding-x-slider-container-2xl 4xl:max-w-screen-4xl"
      >
        <Swiper
          class="products_swiper !overflow-y-visible"
          :modules="[SwiperAutoplay, SwiperScrollbar, SwiperNavigation, SwiperGrid]"
          :slides-per-view="5"
          :scrollbar="{
            enabled: true,
            draggable: true,
            dragSize: 65,
          }"
          :navigation="{ nextEl: next, prevEl: prev }"
          :fill="'column'"
          :rows="2"
        >
          <SwiperSlide v-for="slide in 10" :key="slide" class="self-stretch">
            <CommonCardProduct />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<style>
  .products_swiper .swiper-scrollbar-drag {
    @apply bg-black;
    height: 10px;
  }
  .products_swiper .swiper-scrollbar {
    margin: 0 auto;
    right: 0;
    left: 0;
    width: 260px;
    height: 10px;
    overflow: hidden;
    /* display: none; */
  }
</style>

<script setup lang="ts">
  const prev = ref(null);
  const next = ref(null);

  defineProps<{
    slides?: any[];
    breakpoints?: object;
  }>();
</script>

<template>
  <div class="py-[35px] md:py-[50px] 4xl:py-[75px]">
    <UiSectionTitle class="!p-0">
      <template #title> <slot name="title"></slot></template>
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
    </UiSectionTitle>
    <div
      class="container max-w-cards-product-slider-container-xs px-padding-x-slider-container-xs md:px-padding-x-slider-container-md lg:max-w-cards-product-slider-container-lg lg:px-padding-x-slider-container-lg 2xl:max-w-cards-product-slider-container-2xl 2xl:px-padding-x-slider-container-2xl 4xl:max-w-screen-4xl"
    >
      <Swiper
        class="products_swiper !overflow-y-visible"
        :modules="[SwiperAutoplay, SwiperScrollbar, SwiperNavigation, SwiperGrid]"
        :scrollbar="{
          enabled: true,
          draggable: true,
          dragSize: 65,
        }"
        :breakpoints="breakpoints || false"
        :navigation="{ nextEl: next, prevEl: prev }"
        :fill="'column'"
        :rows="2"
      >
        <SwiperSlide v-for="slide in slides" :key="slide" class="self-stretch">
          <slot name="slide" :slide="slide"></slot>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style>
  .products_swiper .swiper-scrollbar-drag {
    @apply h-[5px] cursor-pointer bg-black hover:opacity-hover md:h-[7px] 4xl:h-[10px];
  }

  .products_swiper .swiper-scrollbar {
    @apply left-0 right-0 mx-auto h-[5px] w-[145px] overflow-hidden md:h-[7px] md:w-[200px] 4xl:h-[10px] 4xl:w-[250px];
  }

  .products_swiper .swiper-wrapper {
    @apply pb-[30px];
  }
</style>

<script setup lang="ts">
  defineProps<{
    slides?: any[];
    breakpoints?: any;
    showAll?: boolean;
    type?: string;
    centeredSlides?: boolean;
  }>();

  const prev = ref(null);
  const next = ref(null);
</script>

<template>
  <div class="no-scrollbar overflow-hidden py-[35px] md:py-[50px] 4xl:py-[75px]">
    <UiSectionTitle class="!p-0">
      <template #title>
        <slot name="title" />
      </template>
      <template #additional_elements>
        <div class="hidden gap-[50px] 4xl:flex">
          <button ref="prev">
            <UiButtonOpacityIconPrev class="text-[50px]" />
          </button>
          <button ref="next">
            <UiButtonOpacityIconNext class="text-[50px]" />
          </button>
        </div>
      </template>
    </UiSectionTitle>
    <div class="container">
      <Swiper
        :class="
          cn('products_swiper !overflow-y-visible', {
            '!overflow-x-visible': showAll,
          })
        "
        :modules="[SwiperAutoplay, SwiperScrollbar, SwiperNavigation, SwiperGrid]"
        :scrollbar="{
          enabled: true,
          draggable: true,
          dragSize: 65,
        }"
        :breakpoints="breakpoints"
        :centered-slides-bounds="centeredSlides"
        :centered-slides="centeredSlides"
        :spaceBetween="30"
        :navigation="centeredSlides ? false : { nextEl: next, prevEl: prev }"
        :fill="'column'"
        :rows="2"
      >
        <SwiperSlide v-for="slide in slides" :key="slide" class="self-stretch">
          <slot name="slide" :slide="slide" />
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

  .products_swiper .swiper-slide {
    @apply h-auto;
  }
</style>

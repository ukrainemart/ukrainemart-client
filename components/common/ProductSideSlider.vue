<script setup lang="ts">
  defineProps<{
    // slides?: any[];
    breakpoints?: any;
    showAll?: boolean;
    type?: string;
    centeredSlides?: boolean;
  }>();

  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>

<template>
  <Swiper
    :direction="'vertical'"
    :breakpoints="{
      834: {
        slidesPerView: 6,
      },
      1400: {
        slidesPerView: 4,
      },
    }"
    class="product_side_swiper"
  >
    <SwiperSlide v-for="slide in slides" :key="slide" class="">
      <div class="h-full">
        <img src="@img/product_slide_4.png" class="h-full w-full cursor-pointer" />
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style>
  .product_side_swiper {
    @apply mx-0 h-[435px] w-[50px] 2xl:h-[584px] 2xl:w-[100px];
  }

  .product_side_swiper .swiper-wrapper {
    @apply gap-[5px] 2xl:gap-[10px];
  }
</style>

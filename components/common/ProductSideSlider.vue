<script setup lang="ts">
  defineProps<{
    slides: ImageProduct[];
    breakpoints?: any;
    showAll?: boolean;
    type?: string;
    centeredSlides?: boolean;
  }>();
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
    centeredSlidesBounds
    :pagination="{ clickable: true }"
  >
    <SwiperSlide v-for="slide in slides" :key="slide" class="">
      <div class="h-full">
        <img
          :src="slide.path"
          alt=""
          class="h-full w-full cursor-pointer rounded-[1px] object-cover"
        />
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

  .product_side_swiper .swiper-slide-thumb-active {
    position: relative;
  }

  .product_side_swiper .swiper-slide-thumb-active::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
  }
</style>

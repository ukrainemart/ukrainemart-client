<script setup lang="ts">
  defineProps<{
    slides: ImageProduct[];
  }>();
</script>

<template>
  <Swiper
    :modules="[SwiperScrollbar, SwiperThumbs]"
    :scrollbar="{
      enabled: true,
      draggable: true,
      dragSize: 36,
    }"
    class="products_swiper product_swiper"
  >
    <SwiperSlide v-for="slide in slides" :key="slide" class="!flex">
      <div class="w-full">
        <img :src="slide.path" class="h-[440px] w-full object-cover md:h-[435px] 2xl:h-[584px]" />
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<style>
  .product_swiper {
    @apply md:mx-0;
  }

  .product_swiper .swiper-scrollbar {
    @apply md:hidden;
  }

  .product_swiper .swiper-wrapper {
    @apply w-[335px] md:mx-0 md:w-[330px] md:!pb-0 2xl:w-[450px];
  }
</style>

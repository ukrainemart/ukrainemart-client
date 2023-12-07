<script setup lang="ts">
  const categories = ref<Category[]>([]);

  const fetchCategories = async () => {
    const { data } = await useFetch(`${useUrlApi()}/category/main`);
    categories.value = data.value as Category[];
  };

  fetchCategories();
</script>

<template>
  <div v-if="categories.length > 0" class="bg-white py-[15px] md:py-[23px] 4xl:py-[35px]">
    <div class="no-scrollbar container overflow-scroll">
      <div
        class="flex items-center gap-[20px] md:gap-[35px] 2xl:justify-between 4xl:w-auto 4xl:gap-[0px]"
      >
        <Swiper
          class="swiper_main w-full"
          :slides-per-view="'auto'"
          :spaceBetween="30"
          :breakpoints="{
            375: {
              spaceBetween: 30,
            },
            768: {
              spaceBetween: 50,
            },
          }"
        >
          <SwiperSlide v-for="category in categories" :key="category.id" class="!h-auto !w-fit">
            <CommonCategoryItem
              :to="`category/${category.id}`"
              :title="`${useMultiLang(category, 'title')}`"
            >
              <img
                class="h-full w-full object-contain"
                :src="category.logo"
                :alt="`${useMultiLang(category, 'title')}`"
              />
            </CommonCategoryItem>
          </SwiperSlide>
          <SwiperSlide class="!h-auto !w-fit">
            <CommonCategoryItem title="Більше категорій" class="flex-row-reverse text-right">
              <SvgoArrowRightSecond class="!h-full !w-full" />
            </CommonCategoryItem>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

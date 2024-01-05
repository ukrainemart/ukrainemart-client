<script setup lang="ts">
  const props = defineProps<{
    products?: Product[];
  }>();

  const { width } = useWindowSize();
  const { BREAKPOINTS_4XL } = useVariables();
  const loading = ref(true);

  const setLoading = () => {
    if (process.client && props.products) {
      loading.value = false;
    }
  };

  const showAllSlides = computed(() => {
    if (width.value >= BREAKPOINTS_4XL) {
      return false;
    }
    return true;
  });

  watchDeep(
    () => props.products,
    () => {
      setLoading();
    }
  );
</script>

<template>
  <div v-if="loading" class="container mt-[50px] xl:mt-[70px]">
    <UiSkeleton class="mb-[40px] h-[20px] w-[30%] md:h-[30px]" />
    <div
      class="mb-[30px] grid grid-cols-12 gap-x-[25px] gap-y-5 md:mb-[40px] md:gap-x-[32px] md:gap-y-10 lg:mb-[50px] xl:grid-cols-10 4xl:gap-x-[44px] 4xl:gap-y-[60px]"
    >
      <SkeletonCardProduct class="col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2" />
      <SkeletonCardProduct class="col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2" />

      <SkeletonCardProduct
        class="col-span-6 hidden sm:col-span-4 sm:block md:col-span-3 xl:col-span-2"
      />
      <SkeletonCardProduct
        class="col-span-6 hidden sm:col-span-4 md:col-span-3 md:block xl:col-span-2"
      />
      <SkeletonCardProduct
        class="col-span-6 hidden sm:col-span-4 md:col-span-3 xl:col-span-2 xl:block"
      />
    </div>
  </div>
  <UiSectionTitleSlider
    v-if="!loading && products && products.length > 0"
    :showAll="showAllSlides"
    :slides="products"
    :centeredSlides="showAllSlides"
    type="products"
    :breakpoints="{
      375: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    }"
  >
    <template #title>
      <slot name="title" />
    </template>
    <template #slide="{ slide }">
      <CommonCardProduct class="h-full" :product="slide" />
    </template>
  </UiSectionTitleSlider>
</template>

<style scoped></style>

<script setup lang="ts">
  defineProps<{
    requests: Request[];
    title: string;
  }>();

  const loading = ref(true);

  const setLoading = () => {
    if (process.client) {
      loading.value = false;
    }
  };
  setLoading();
</script>

<template>
  <div v-if="loading" class="container mt-[50px] xl:mt-[70px]">
    <UiSkeleton class="mb-[40px] h-[20px] w-[30%] md:h-[30px]" />
    <div
      class="mb-[30px] grid grid-cols-12 gap-x-[25px] gap-y-5 md:mb-[40px] md:gap-x-[32px] md:gap-y-10 lg:mb-[50px] 4xl:gap-x-[44px] 4xl:gap-y-[60px]"
    >
      <SkeletonRequestImporter class="col-span-12 sm:!col-span-6 md:!col-span-4" />
      <SkeletonRequestImporter class="col-span-6 hidden sm:!col-span-6 sm:block md:!col-span-4" />

      <SkeletonRequestImporter class="col-span-6 hidden sm:!col-span-6 md:!col-span-4 md:block" />
    </div>
  </div>
  <UiSectionTitleSlider
    v-if="requests && requests.length > 0"
    :showAll="true"
    :slides="requests"
    :breakpoints="{
      375: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 45,
      },
    }"
  >
    <template #title>
      {{ title }}
    </template>
    <template #slide="{ slide }">
      <CommonRequestImportersItem :request="slide" class="mb-[20px]" :item="slide" />
    </template>
  </UiSectionTitleSlider>
</template>

<style scoped></style>

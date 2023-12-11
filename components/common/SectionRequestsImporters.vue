<script setup lang="ts">
  defineProps<{
    requests: Request[];
    title: string;
  }>();
</script>

<template>
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

<script setup lang="ts"></script>

<template>
  <UiSectionTitleSlider
    :showAll="true"
    :slides="[1, 1, 1, 1, 1, 1, 1, 1]"
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
    <template #title> Запити від міжнародних імпортерів </template>
    <template #slide="{ slide }">
      <CommonRequestImportersItem class="mb-[20px]" :item="slide" />
    </template>
  </UiSectionTitleSlider>
</template>

<style scoped></style>

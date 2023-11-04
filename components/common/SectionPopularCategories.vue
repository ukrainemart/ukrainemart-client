<script setup lang="ts"></script>

<template>
  <UiSectionTitle>
    <template #title> Популярні категорії </template>
    <template #content>
      <div
        class="grid min-h-[560px] grid-rows-4 gap-[20px] md:grid-cols-2 md:gap-[5px] 4xl:min-h-[1081px] 4xl:gap-[10px]"
      >
        <CommonPopularCategoryItem
          image="assets/images/metal.jpg"
          altImage="metal"
          class="md:row-span-2 4xl:row-span-2"
        >
          Метал та похідні товари
        </CommonPopularCategoryItem>
        <CommonPopularCategoryItem
          image="~/assets/images/metal.jpg"
          altImage="metal"
          class="md:row-span-3"
        >
          Зернові культури
        </CommonPopularCategoryItem>
        <CommonPopularCategoryItem
          image="~/assets/images/metal.jpg"
          altImage="metal"
          class="md:row-span-2 4xl:row-span-3"
        >
          Добрива
        </CommonPopularCategoryItem>
        <CommonPopularCategoryItem
          image="~/assets/images/metal.jpg"
          altImage="metal"
          class="md:row-span-1"
        >
          Папір та картон
        </CommonPopularCategoryItem>
      </div>
    </template>
  </UiSectionTitle>
</template>

<style scoped></style>

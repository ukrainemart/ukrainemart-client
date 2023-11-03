<script setup lang="ts"></script>

<template>
  <UiSectionTitle>
    <template #title> Популярні категорії </template>
    <template #content>
      <div
        class="grid min-h-[560px] gap-[20px] md:grid-cols-2 grid-rows-4 md:gap-[5px] 4xl:min-h-[1081px] 4xl:gap-[10px]"
      >
        <PagesPopularCategoryItem
          image="assets/images/metal.jpg"
          altImage="metal"
          class="md:row-span-2 4xl:row-span-2"
        >
          Метал та похідні товари
        </PagesPopularCategoryItem>
        <PagesPopularCategoryItem
          image="~/assets/images/metal.jpg"
          altImage="metal"
          class="md:row-span-3"
        >
          Зернові культури
        </PagesPopularCategoryItem>
        <PagesPopularCategoryItem
          image="~/assets/images/metal.jpg"
          altImage="metal"
          class="md:row-span-2 4xl:row-span-3"
        >
          Добрива
        </PagesPopularCategoryItem>
        <PagesPopularCategoryItem
          image="~/assets/images/metal.jpg"
          altImage="metal"
          class="md:row-span-1"
        >
          Папір та картон
        </PagesPopularCategoryItem>
      </div>
    </template>
  </UiSectionTitle>
</template>

<style scoped></style>

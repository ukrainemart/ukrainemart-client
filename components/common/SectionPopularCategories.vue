<script setup lang="ts">
  const categories = ref<Category[]>([]);

  const fetchCategories = () => {
    const { data } = useFetch(`${useUrlApi()}/category/popular`);
    categories.value = data.value as Category[];
  };

  fetchCategories();
</script>

<template>
  <UiSectionTitle v-if="categories && categories.length >= 4">
    <template #title>
      {{ $t('popularCategory') }}
    </template>
    <template #content>
      <div
        class="grid min-h-[560px] grid-rows-4 gap-[20px] md:grid-cols-2 md:gap-[5px] 4xl:min-h-[1081px] 4xl:gap-[10px]"
      >
        <CommonPopularCategoryItem
          :link="`/category/${categories[0]?.id}`"
          :image="categories[0]?.image"
          :altImage="useMultiLang(categories[0], 'title')"
          class="md:row-span-2 4xl:row-span-2"
        >
          {{ useMultiLang(categories[0], 'title') }}
        </CommonPopularCategoryItem>
        <CommonPopularCategoryItem
          :link="`/category/${categories[1]?.id}`"
          :image="categories[1]?.image"
          :altImage="useMultiLang(categories[1], 'title')"
          class="md:row-span-3"
        >
          {{ useMultiLang(categories[1], 'title') }}
        </CommonPopularCategoryItem>
        <CommonPopularCategoryItem
          :link="`/category/${categories[2]?.id}`"
          :image="categories[2]?.image"
          :altImage="useMultiLang(categories[2], 'title')"
          class="md:row-span-2 4xl:row-span-3"
        >
          {{ useMultiLang(categories[2], 'title') }}
        </CommonPopularCategoryItem>
        <CommonPopularCategoryItem
          :link="`/category/${categories[3]?.id}`"
          :image="categories[3]?.image"
          :altImage="useMultiLang(categories[3], 'title')"
          class="md:row-span-1 4xl:row-span-2"
        >
          {{ useMultiLang(categories[3], 'title') }}
        </CommonPopularCategoryItem>
      </div>
    </template>
  </UiSectionTitle>
</template>

<style scoped></style>

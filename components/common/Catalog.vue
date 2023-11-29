<script setup lang="ts">
  import CustomScrollbar from 'custom-vue-scrollbar';

  const catalog = ref<Catalog[]>([]);
  const currentCategories = ref<Catalog[]>([]);
  const navigationStack = ref<Catalog[]>([]);

  const selectedParentCategory = ref<Catalog | null>(null);
  const selectedChildCategory = ref<Catalog | null>(null);
  const { width: screenWidth } = useWindowSize();
  const { BREAKPOINTS_LG } = useVariables();
  const customScrollbarHeight = '210px';

  const parentCategories = computed(() =>
    catalog.value.filter((item) => item.parent_category === 0)
  );

  const showChildren = (category: Catalog) => {
    navigationStack.value.push(category);
    currentCategories.value = category.children;
  };

  const navigateToParentCategory = () => {
    navigationStack.value.pop();
    if (navigationStack.value.length > 0) {
      currentCategories.value = navigationStack.value[navigationStack.value.length - 1].children;
    } else {
      currentCategories.value = parentCategories.value;
    }
  };

  const selectParentCategory = (category: Catalog) => {
    selectedParentCategory.value = category;
    [selectedChildCategory.value] = category.children;
  };

  const selectChildCategory = (category: Catalog) => {
    selectedChildCategory.value = category;
  };

  const getCatalog = async () => {
    try {
      const res = await useApi(`${useUrlApi()}/catalog`);

      catalog.value = res as Catalog[];
      currentCategories.value = parentCategories.value;

      if (screenWidth.value >= BREAKPOINTS_LG) {
        [selectedParentCategory.value] = parentCategories.value;
        [selectedChildCategory.value] = selectedParentCategory.value.children;
      }
    } catch (error) {
      console.error(error);
    }
  };

  getCatalog();
</script>

<template>
  <!-- MOBILE START -->
  <div v-if="screenWidth < BREAKPOINTS_LG" class="flex flex-col items-start">
    <button
      v-if="navigationStack.length > 0"
      class="flex items-center"
      @click="navigateToParentCategory"
    >
      <SvgoArrowDown :fontControlled="false" class="h-full w-[10px] rotate-90 text-transparent" />
      Назад
    </button>

    <template v-for="category in currentCategories" :key="category.id">
      <CommonCatalogItem :category="category" @show-children="showChildren" />
    </template>
  </div>
  <!-- MOBILE END -->

  <!-- DESKTOP CONTAINERS START -->
  <div v-else class="container grid grid-cols-[max-content_max-content_1fr] gap-4 2xl:gap-[30px]">
    <ul class="categories_container w-[350px]">
      <CustomScrollbar :autoHide="false" :style="{ height: customScrollbarHeight }">
        <li
          v-for="category in parentCategories"
          :key="category.id"
          @mouseover="selectParentCategory(category)"
        >
          <CommonCatalogItem :category="category" />
        </li>
      </CustomScrollbar>
    </ul>

    <ul
      v-if="
        selectedParentCategory &&
        selectedParentCategory.children &&
        selectedParentCategory.children.length > 0
      "
      class="categories_container w-[350px]"
    >
      <CustomScrollbar :autoHide="false" :style="{ height: customScrollbarHeight }">
        <li
          v-for="category in selectedParentCategory.children"
          :key="category.id"
          @mouseover="selectChildCategory(category)"
        >
          <CommonCatalogItem :category="category" />
        </li>
      </CustomScrollbar>
    </ul>

    <ul
      v-if="
        selectedChildCategory &&
        selectedChildCategory.children &&
        selectedChildCategory.children.length > 0
      "
      class="categories_container"
    >
      <CustomScrollbar :autoHide="false" :style="{ height: customScrollbarHeight }">
        <li v-for="category in selectedChildCategory.children" :key="category.id">
          <CommonCatalogItem :category="category" />
        </li>
      </CustomScrollbar>
    </ul>
  </div>
  <!-- DESKTOP CONTAINERS END -->
</template>

<style>
  @import 'custom-vue-scrollbar/dist/style.css';

  .categories_container {
    @apply w-full min-w-[250px] rounded-[20px] bg-white shadow-lg;
  }

  /* .scrollbar__content--vertical {
    @apply h-full;
  } */
</style>

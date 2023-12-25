<script setup lang="ts">
  const props = defineProps<{
    toggleCatalogModal: () => void;
    closeCatalog?: () => void;
  }>();

  const router = useRouter();
  const navigationStack = ref<Catalog[]>([]);
  const currentCategoryLevel = ref(0);
  const currentMobileParentCategory = ref<Catalog | null>(null);
  const MIDDLE_CATEGORY_LEVEL = 1;
  const LAST_CATEGORY_LEVEL = 2;
  const { width: screenWidth } = useWindowSize();
  const { BREAKPOINTS_LG } = useVariables();

  const parentCategories = inject('parentCategories') as Ref<Catalog[]>;
  const { currentCategories, updateCurrentCategories } = inject('currentCategories') as {
    currentCategories: Ref<Catalog[]>;
    updateCurrentCategories: (value: Catalog[]) => void;
  };
  const { selectedParentCategory, updateParentCategory } = inject('selectedParentCategory') as {
    selectedParentCategory: Ref<Catalog | null>;
    updateParentCategory: (value: Catalog | null) => void;
  };
  const { selectedChildCategory, updateChildCategory } = inject('selectedChildCategory') as {
    selectedChildCategory: Ref<Catalog | null>;
    updateChildCategory: (value: Catalog | null) => void;
  };

  const showChildren = (category: Catalog) => {
    navigationStack.value.push(category);
    currentMobileParentCategory.value = category;
    updateCurrentCategories(category.children);
    currentCategoryLevel.value += 1;
  };

  const navigateToParentCategory = () => {
    navigationStack.value.pop();

    if (navigationStack.value.length > 0) {
      updateCurrentCategories(navigationStack.value[navigationStack.value.length - 1].children);
      currentMobileParentCategory.value = navigationStack.value[navigationStack.value.length - 1];
    } else {
      updateCurrentCategories(parentCategories.value);
      currentMobileParentCategory.value = null;
    }

    currentCategoryLevel.value -= 1;
  };

  const selectParentCategory = (category: Catalog) => {
    updateParentCategory(category);
    updateChildCategory(category.children[0]);
  };

  const selectChildCategory = (category: Catalog) => updateChildCategory(category);

  const handleLinkClick = (category: Catalog) => {
    if (screenWidth.value < BREAKPOINTS_LG) {
      props.toggleCatalogModal();
    }
    if (screenWidth.value >= BREAKPOINTS_LG && props.closeCatalog) {
      props.closeCatalog();
    }

    router.push(`/category/${category.id}`);
  };
</script>

<template>
  <!-- MOBILE START -->
  <div v-if="screenWidth < BREAKPOINTS_LG" class="flex flex-col items-start">
    <button
      v-if="navigationStack.length > 0"
      class="mb-[5px] flex items-center gap-x-[10px] text-[12px] leading-[15px] text-status_gray transition-colors duration-100 ease-linear hover:text-black md:text-[14px] md:leading-[17px]"
      @click="navigateToParentCategory"
    >
      <SvgoArrowNext :fontControlled="false" class="h-full w-[10px] rotate-180 text-transparent" />
      {{ $t('catalog.back') }}
    </button>

    <NuxtLink
      v-if="currentMobileParentCategory !== null"
      :to="`/category/${currentMobileParentCategory.id}`"
      class="catalog_item !w-fit underline underline-offset-1"
      @click="handleLinkClick(currentMobileParentCategory)"
    >
      <span class="catalog_text">
        {{ $t('catalog.all') }} {{ useMultiLang(currentMobileParentCategory, 'title') }}
      </span>
    </NuxtLink>

    <template v-for="category in currentCategories" :key="category.id">
      <CommonCatalogItem
        :category="category"
        viewport="mobile"
        :variant="
          currentCategoryLevel === LAST_CATEGORY_LEVEL
            ? 'image'
            : currentCategoryLevel === MIDDLE_CATEGORY_LEVEL
              ? 'logo'
              : null
        "
        @handleLinkClick="handleLinkClick"
        @showChildren="showChildren"
      />
    </template>
  </div>
  <!-- MOBILE END -->

  <!-- DESKTOP CONTAINERS START -->
  <div v-else class="container grid grid-cols-[max-content_max-content_1fr] gap-4 2xl:gap-[30px]">
    <ul class="categories_container max-w-[350px]">
      <li
        v-for="category in parentCategories"
        :key="category.id"
        @mouseover="selectParentCategory(category)"
      >
        <CommonCatalogItem
          :category="category"
          :isSelectedCategory="selectedParentCategory?.id === category.id"
          @handleLinkClick="handleLinkClick"
        />
      </li>
    </ul>

    <ul
      v-if="
        selectedParentCategory &&
        selectedParentCategory.children &&
        selectedParentCategory.children.length > 0
      "
      class="categories_container max-w-[350px]"
    >
      <li
        v-for="category in selectedParentCategory.children"
        :key="category.id"
        @mouseover="selectChildCategory(category)"
      >
        <CommonCatalogItem
          :category="category"
          :isSelectedCategory="selectedChildCategory?.id === category.id"
          :selectedParentCategory="selectedParentCategory"
          variant="logo"
          @handleLinkClick="handleLinkClick"
        />
      </li>
    </ul>

    <ul
      v-if="
        selectedChildCategory &&
        selectedChildCategory.children &&
        selectedChildCategory.children.length > 0
      "
      class="categories_container flex flex-wrap content-start"
    >
      <li v-for="category in selectedChildCategory.children" :key="category.id" class="h-fit">
        <CommonCatalogItem
          :category="category"
          variant="image"
          @handleLinkClick="handleLinkClick"
        />
      </li>
    </ul>
  </div>
  <!-- DESKTOP CONTAINERS END -->
</template>

<style>
  .categories_container {
    @apply min-h-[330px] w-full min-w-[250px] rounded-[20px] bg-white shadow-lg;
  }
</style>

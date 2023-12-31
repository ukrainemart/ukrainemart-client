<script setup lang="ts">
  const props = defineProps<{
    sameCategories: SameCategories[];
    breadcrumb: Breadcrumb;
  }>();

  const [isAllItemsVisible, setIsAllItemsVisible] = useToggle(false);
  const ITEMS_TO_SHOW = 5;

  const showedItems = computed(() => {
    if (isAllItemsVisible.value) {
      return props.sameCategories;
    }

    return props.sameCategories?.slice(0, ITEMS_TO_SHOW);
  });
</script>

<template>
  <div>
    <div
      v-if="breadcrumb && breadcrumb?.id !== undefined"
      class="mb-[7px] flex items-center gap-[2px] md:mb-2.5"
    >
      <NuxtLink :to="`/category/${breadcrumb.id}`" class="category_breadcrumb_item">
        {{ useMultiLang(breadcrumb, 'title') }}
      </NuxtLink>
    </div>

    <ul class="mb-[7px] ml-[14px] flex flex-col gap-y-[7px] md:mb-2.5 md:ml-[18px] md:gap-y-2.5">
      <li
        v-for="sameCategory in showedItems"
        :key="sameCategory?.id"
        class="category_breadcrumb_item"
      >
        <NuxtLink :to="`/category/${sameCategory?.id}`">
          {{ useMultiLang(sameCategory, 'title') }}
        </NuxtLink>
      </li>
    </ul>

    <div v-if="sameCategories?.length > ITEMS_TO_SHOW">
      <button
        class="group ml-[14px] flex items-center gap-[3px] md:ml-[18px]"
        @click="setIsAllItemsVisible(!isAllItemsVisible)"
      >
        <span class="category_breadcrumb_item">
          {{ isAllItemsVisible ? $t('hide') : $t('show_more') }}
        </span>

        <SvgoBreadcrumbArrowDown
          :fontControlled="false"
          :class="
            cn(
              'h-[3px] w-[5px] stroke-status_gray text-transparent group-hover:stroke-black lg:h-[5px] lg:w-[8px]',
              {
                'rotate-180': isAllItemsVisible,
              }
            )
          "
        />
      </button>
    </div>
  </div>
</template>

<style>
  .category_breadcrumb_item {
    @apply font-montserrat text-[10px] font-medium text-status_gray transition-colors duration-200 ease-in-out hover:text-black md:text-[12px] xl:text-[16px];
  }
</style>

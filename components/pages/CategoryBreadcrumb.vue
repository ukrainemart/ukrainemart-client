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
    <div class="mb-[7px] flex items-center gap-[2px] md:mb-2.5">
      <SvgoBreadcrumbArrowDown
        :fontControlled="false"
        class="h-[3px] w-[5px] rotate-90 text-transparent lg:h-[5px] lg:w-[8px]"
      />

      <!-- FIXME bug breadcrumb.id -->
      <!-- <NuxtLink :to="`/category/${breadcrumb?.id}`" class="breadcrumb_item"> -->
      {{ useMultiLang(breadcrumb, 'title') }}
      <!-- </NuxtLink> -->
    </div>

    <ul class="mb-[7px] ml-[14px] flex flex-col gap-y-[7px] md:mb-2.5 md:ml-2.5 md:gap-y-2.5">
      <li v-for="sameCategory in showedItems" :key="sameCategory?.id" class="breadcrumb_item">
        <NuxtLink :to="`/category/${sameCategory?.id}`">
          {{ useMultiLang(sameCategory, 'title') }}
        </NuxtLink>
      </li>
    </ul>

    <div v-if="sameCategories?.length > ITEMS_TO_SHOW">
      <button
        class="ml-[14px] flex items-center gap-[3px] md:ml-2.5"
        @click="setIsAllItemsVisible(!isAllItemsVisible)"
      >
        <span class="breadcrumb_item">
          {{ isAllItemsVisible ? 'Hide' : 'Показати більше' }}
        </span>

        <!-- FIXME hover text-black -->
        <SvgoBreadcrumbArrowDown
          :fontControlled="false"
          class="h-[3px] w-[5px] text-transparent lg:h-[5px] lg:w-[8px]"
        />
      </button>
    </div>
  </div>
</template>

<style>
  .breadcrumb_item {
    @apply text-[10px] text-status_gray transition-colors duration-200 ease-in-out hover:text-black md:text-[12px] xl:text-[16px];
  }
</style>

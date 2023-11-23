<script setup lang="ts">
  const props = defineProps<{
    sameCategories: SameCategories[];
    breadcrumb: Breadcrumb;
  }>();

  const [isAllItemsVisible, setIsAllItemsVisible] = useToggle(false);
  const ITEMS_TO_SHOW = 1; // TODO set 5

  const showedItems = computed(() => {
    if (isAllItemsVisible.value) {
      return props.sameCategories;
    }
    return props.sameCategories?.slice(0, ITEMS_TO_SHOW);
  });
</script>

<!-- TODO apply mobile styles  -->
<template>
  <div>
    <div class="flex items-center gap-[3px]">
      <SvgoBreadcrumbArrowLeft :fontControlled="false" class="h-[8px] w-[10px] text-transparent" />

      <!-- TODO add NuxtLink to -->
      <p class="text-status_gray hover:text-black">
        {{ useMultiLang(breadcrumb, 'title') }}
      </p>
    </div>

    <ul>
      <!-- TODO add NuxtLink to -->
      <li
        v-for="sameCategory in showedItems"
        :key="sameCategory.id"
        class="text-status_gray hover:text-black"
      >
        {{ useMultiLang(sameCategory, 'title') }}
      </li>
    </ul>

    <div v-if="sameCategories?.length > ITEMS_TO_SHOW">
      <button class="flex items-center gap-[5px]" @click="setIsAllItemsVisible(!isAllItemsVisible)">
        <span class="text-status_gray hover:text-black">
          {{ isAllItemsVisible ? 'Hide' : 'Показати більше' }}
        </span>

        <SvgoBreadcrumbArrowDown
          :fontControlled="false"
          class="h-[5px] w-[10px] text-transparent"
        />
      </button>
    </div>
  </div>
</template>

<style></style>

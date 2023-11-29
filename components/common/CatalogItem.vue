<script setup lang="ts">
  defineProps<{
    category: Catalog;
  }>();

  const emit = defineEmits(['show-children']);

  const showChildren = (category: Catalog) => {
    emit('show-children', category);
  };
</script>

<template>
  <NuxtLink v-if="!category.children.length" :to="`/category/${category.id}`" class="catalog_item">
    <span class="catalog_text">
      {{ useMultiLang(category, 'title') }}
    </span>
  </NuxtLink>

  <button v-else type="button" class="catalog_item" @click="showChildren(category)">
    <span class="catalog_text">
      {{ useMultiLang(category, 'title') }}
    </span>
    <SvgoArrowDown
      :fontControlled="false"
      class="ml-2 h-full w-[10px] -rotate-90 text-transparent"
    />
  </button>
</template>

<style>
  .catalog_item {
    @apply relative flex w-[calc(100%_-_25px)] items-center justify-between py-[7.5px] text-left before:absolute before:bottom-0 before:left-[-8px] before:top-0 before:rounded-l-[10px] before:bg-[#1111111f] before:content-[''] after:absolute after:bottom-0 after:right-[-8px] after:top-0 after:rounded-r-[10px] after:bg-[#1111111f] after:content-[''] hover:bg-[#1111111f] hover:before:w-2 hover:after:w-2 md:py-[12.5px] md:before:left-[-12px] md:after:right-[-12px] md:hover:before:w-3 md:hover:after:w-3 lg:rounded-[20px] lg:px-[25px] lg:before:content-[none] lg:after:content-[none];
  }

  .catalog_text {
    @apply truncate text-[12px] font-medium leading-[15px] md:text-[14px] md:leading-[17px];
  }

  /* // NOTE custom scrollbar */
  .scrollbar__thumb--vertical,
  .scrollbar__thumbPlaceholder--vertical {
    width: 5px !important;
  }

  .scrollbar__thumb {
    background-color: #00000040 !important;
  }
</style>

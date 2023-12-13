<script setup lang="ts">
  defineProps<{
    category: Category;
  }>();
</script>

<template>
  <div>
    <div class="mb-5 md:mb-7">
      <PagesCategoryFilterTitle>
        {{ $t('catalog.catalog') }}
      </PagesCategoryFilterTitle>

      <PagesCategoryBreadcrumb
        :breadcrumb="category?.breadcrumb"
        :sameCategories="category?.same_categories"
      />
    </div>

    <div class="mb-5 md:mb-7">
      <PagesCategoryFilterTitle>
        {{ $t('category.minimum_order') }}
      </PagesCategoryFilterTitle>

      <div class="flex gap-x-[10px] md:gap-x-[25px]">
        <CommonMinAmountFilter />
      </div>
    </div>

    <div class="mb-5">
      <PagesCategoryFilterTitle>
        {{ $t('category.price') }}
      </PagesCategoryFilterTitle>

      <CommonPriceFilter />
    </div>
  </div>
</template>

<style></style>

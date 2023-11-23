<script setup lang="ts">
  defineProps<{
    category: Category;
  }>();

  // const value = ref(50); // REVIEW remove it
</script>

<template>
  <div>
    <div class="mb-5">
      <CommonCategoryFilterTitle>Каталог</CommonCategoryFilterTitle>
      <CommonCategoryBreadcrumbs
        :breadcrumb="category?.breadcrumb"
        :sameCategories="category?.same_categories"
      />
    </div>

    <div class="mb-5">
      <CommonCategoryFilterTitle>Особливості постачальника</CommonCategoryFilterTitle>
      <CommonCategoryCheckbox htmlFor="checkboxId1" label="Верифікований постачальник" />
    </div>

    <div class="mb-5">
      <CommonCategoryFilterTitle>Особливості товару</CommonCategoryFilterTitle>
      <CommonCategoryCheckbox htmlFor="checkboxId2" label="Готовий до відправки" />
      <CommonCategoryCheckbox htmlFor="checkboxId3" label="Платні зразки" />
    </div>

    <div class="mb-5">
      <CommonCategoryFilterTitle>Мінімальне замовлення</CommonCategoryFilterTitle>
      <div class="flex gap-[10px]">
        <!-- TODO add placeholder -->
        <UiInputOutline customClass="input_outline_category" />
        <UiButtonPrimary styles="md:text-[14px] md:px-[20px] md:py-[4px]">Ok</UiButtonPrimary>
      </div>
    </div>

    <!-- TODO Copy PriceFilter from kuzka-shop
    <div class="mb-5">
      <CommonCategoryFilterTitle>Ціна</CommonCategoryFilterTitle>
      <URange v-model="value" name="range" />
      <div>
        <UiInputOutline />
        <UiInputOutline />
      </div>
    </div> -->
  </div>
</template>

<style>
  .input_outline_category {
    @apply input_outline_text_category input_outline_padding_category input_outline_height_category rounded-[50px] border border-black bg-transparent focus:outline-none;
  }

  .input_outline_text_category {
    @apply text-[7px] font-medium text-black md:text-[10px] 4xl:text-[14px];
  }

  .input_outline_padding_category {
    @apply px-[15px] 2xl:px-[20px] 4xl:px-[25px];
  }

  .input_outline_height_category {
    @apply h-[30px] 2xl:h-[40px] 4xl:h-[50px];
  }
</style>

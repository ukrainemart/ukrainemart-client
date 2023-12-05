<script setup lang="ts">
  defineProps<{
    category: Category;
  }>();
</script>

<template>
  <div>
    <div class="mb-5 md:mb-7">
      <PagesCategoryFilterTitle>Каталог</PagesCategoryFilterTitle>
      <PagesCategoryBreadcrumb
        :breadcrumb="category?.breadcrumb"
        :sameCategories="category?.same_categories"
      />
    </div>

    <div class="mb-5 md:mb-7">
      <PagesCategoryFilterTitle>Мінімальне замовлення</PagesCategoryFilterTitle>
      <div class="flex gap-x-[10px] md:gap-x-[25px]">
        <!-- TODO add placeholder -->
        <UiInputOutline customClass="input_outline_category" placeholder="50 Кг" />
        <!-- REVIEW DRY -->
        <button
          class="rounded-[50px] border border-solid border-black bg-black px-[30px] py-[4px] text-[12px] leading-[15px] text-white transition-colors duration-100 ease-in hover:bg-transparent hover:text-black focus:outline-none disabled:cursor-not-allowed md:text-[16px] md:leading-[20px]"
        >
          Ok
        </button>
      </div>
    </div>

    <div class="mb-5">
      <PagesCategoryFilterTitle>Ціна</PagesCategoryFilterTitle>
      <CommonPriceFilter />
    </div>
  </div>
</template>

<style>
  .input_outline_category {
    @apply input_outline_text_category input_outline_padding_category input_outline_sizes_category rounded-[50px] border border-black bg-transparent focus:outline-none;
  }

  .input_outline_text_category {
    @apply text-[7px] font-medium text-black md:text-[10px] 4xl:text-[14px];
  }

  .input_outline_padding_category {
    @apply px-[15px] 2xl:px-[20px] 4xl:px-[25px];
  }

  .input_outline_sizes_category {
    @apply h-[30px] w-full 4xl:h-[50px];
  }
</style>

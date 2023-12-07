<script setup lang="ts">
  defineProps<{
    isSearchActive: boolean;
    products: Product[];
    categories: Category[];
  }>();
</script>

<template>
  <div
    v-if="isSearchActive"
    class="absolute inset-x-0 rounded-b-[15px] bg-white py-[7px] text-left shadow-lg md:rounded-[20px] md:py-[18px] xl:py-[25px]"
  >
    <div v-if="categories.length">
      <p
        class="px_search mb-[6px] py-[6px] font-namu text-[14px] leading-[17px] md:mb-[9px] md:text-[18px] md:leading-[22px] xl:mb-5 xl:text-[22px] xl:leading-[26px]"
      >
        Категорії
      </p>

      <ul class="z-10 flex flex-col">
        <li v-for="category in categories" :key="category.id" class="">
          <!-- TODO: long title (truncate, gap) -->
          <NuxtLink
            :to="`/category/${category.id}`"
            class="px_search flex items-center justify-between py-[6px] lg:hover:bg-gray-100"
          >
            <span
              class="text-[10px] font-medium leading-[12px] md:text-[14px] md:leading-[17px] xl:text-[17px] xl:leading-[21px]"
            >
              {{ useMultiLang(category, 'title') }}
            </span>

            <SvgoSearchLinkArrow
              :fontControlled="false"
              class="h-[11px] w-[8px] md:h-[15px] md:w-[11px] xl:h-[18px] xl:w-[13px]"
            />
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div v-if="products.length && categories.length" class="mx-[15px] my-1 h-px bg-[#d9d9d9]" />

    <div v-if="products.length">
      <p
        class="px_search mb-[6px] py-[6px] font-namu text-[14px] leading-[17px] md:mb-[9px] md:text-[18px] md:leading-[22px] xl:mb-5 xl:text-[22px] xl:leading-[26px]"
      >
        Товари
      </p>

      <ul class="z-10 flex flex-col">
        <li v-for="product in products" :key="product.id" class="">
          <!-- TODO: long title (truncate, gap) -->
          <NuxtLink
            :to="`/product/${product.id}`"
            class="px_search flex items-center justify-between py-[6px] lg:hover:bg-gray-100"
          >
            <span
              class="text-[10px] font-medium leading-[12px] md:text-[14px] md:leading-[17px] xl:text-[17px] xl:leading-[21px]"
            >
              {{ useMultiLang(product, 'title') }}
            </span>

            <SvgoSearchLinkArrow
              :fontControlled="false"
              class="h-[11px] w-[8px] md:h-[15px] md:w-[11px] xl:h-[18px] xl:w-[13px]"
            />
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div v-if="products.length || categories.length" class="px_search py-[6px]">
      <!-- TODO: add to url -->
      <NuxtLink :to="'/'" class="flex w-fit">
        <span
          class="text-[10px] font-semibold leading-[12px] text-status_red md:text-[14px] md:leading-[17px] lg:hover:underline xl:text-[17px] xl:leading-[21px]"
        >
          Показати всі результати
        </span>
      </NuxtLink>
    </div>

    <div v-if="!products.length && !categories.length">
      <p
        class="px_search py-[6px] text-[10px] font-medium leading-[12px] md:text-[14px] md:leading-[17px] xl:text-[17px] xl:leading-[21px]"
      >
        Нічого не знайдено
      </p>
    </div>
  </div>
</template>

<style>
  .px_search {
    @apply px-[15px];
  }
</style>

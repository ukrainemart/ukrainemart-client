<script setup lang="ts">
  const searchRef = ref(null);
  const searchValue = ref<string>('');
  const isSearchActive = ref(false);
  const products = ref<Product[]>([]);
  const categories = ref<Category[]>([]);

  const updateSearchValue = (value: string) => (searchValue.value = value);
  const updateSearchActive = (value: boolean) => (isSearchActive.value = value);
  const updateProducts = (newProducts: Product[]) => (products.value = newProducts);
  const updateCategories = (newCategories: Category[]) => (categories.value = newCategories);

  onClickOutside(searchRef, () => updateSearchActive(false));
</script>

<template>
  <div ref="searchRef" class="relative min-w-[305px] md:w-[446px] lg:w-[600px]">
    <CommonSearchInput
      :searchValue="searchValue"
      :isSearchActive="isSearchActive"
      @updateSearchValue="updateSearchValue"
      @updateProducts="updateProducts"
      @updateCategories="updateCategories"
      @updateSearchActive="updateSearchActive"
    />

    <CommonSearchResult
      :isSearchActive="isSearchActive"
      :products="products"
      :categories="categories"
    />

    <!-- REVIEW optional? -->
    <p
      class="ld:mt-[5px] ml-[18px] mt-[3px] text-left text-[7px] font-medium text-black md:mt-[7px] md:text-[13px] lg:text-[17px]"
    >
      {{ `${$t('example')}:` }} <span class="underline">{{ $t('grain') }}</span> {{ $t('or') }}
      <span class="underline">{{ $t('oil') }}</span>
    </p>
  </div>
</template>

<style></style>

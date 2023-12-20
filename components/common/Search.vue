<script setup lang="ts">
  defineProps<{
    isExample?: boolean;
    isSearchModal?: boolean;
    toggleSearchModal?: () => void;
  }>();

  const searchRef = ref(null);
  const searchValue = ref<string>('');
  const isSearchActive = ref(false);
  const isSearchLoading = ref(false);
  const products = ref<Product[]>([]);
  const categories = ref<Category[]>([]);

  const updateSearchValue = (value: string) => (searchValue.value = value);
  const updateSearchActive = (value: boolean) => (isSearchActive.value = value);
  const updateProducts = (newProducts: Product[]) => (products.value = newProducts);
  const updateCategories = (newCategories: Category[]) => (categories.value = newCategories);
  const updateSearchLoading = (value: boolean) => (isSearchLoading.value = value);

  onClickOutside(searchRef, () => updateSearchActive(false));
</script>

<template>
  <div
    ref="searchRef"
    :class="
      cn('relative', {
        'min-w-[305px] md:w-[446px] lg:w-[600px]': !isSearchModal,
        'max-w-[562px]': isSearchModal,
      })
    "
  >
    <CommonSearchInput
      :searchValue="searchValue"
      :isSearchActive="isSearchActive"
      :isSearchLoading="isSearchLoading"
      :isSearchModal="isSearchModal"
      :toggleSearchModal="toggleSearchModal"
      @updateSearchValue="updateSearchValue"
      @updateProducts="updateProducts"
      @updateCategories="updateCategories"
      @updateSearchActive="updateSearchActive"
      @updateSearchLoading="updateSearchLoading"
    />

    <CommonSearchResult
      :searchValue="searchValue"
      :isSearchActive="isSearchActive"
      :products="products"
      :categories="categories"
      :isSearchModal="isSearchModal"
      :toggleSearchModal="toggleSearchModal"
      :isSearchLoading="isSearchLoading"
    />

    <p
      v-if="isExample"
      class="ld:mt-[5px] ml-[18px] mt-[3px] text-left text-[10px] font-medium text-black md:mt-[7px] md:text-[13px] lg:text-[17px]"
    >
      {{ `${$t('example')}:` }} <span class="underline">{{ $t('grain') }}</span> {{ $t('or') }}
      <span class="underline">{{ $t('oil') }}</span>
    </p>
  </div>
</template>

<style></style>

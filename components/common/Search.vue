<script setup lang="ts">
  const products = ref<Product[]>([]);
  // const searchValue = ref<string>('');

  // const updateSearch = (value: string) => (searchValue.value = value);
  const updateProducts = (newProducts: Product[]) => (products.value = newProducts);

  provide('products', { products, updateProducts });
  // provide('search', { searchValue, updateSearch });
</script>

<template>
  <div class="relative min-w-[305px] md:w-[446px] lg:w-[600px]">
    <CommonSearchInput />

    <CommonSearchResult :products="products" />

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

<script setup lang="ts">
  const { updateProducts } = inject('products') as {
    updateProducts: (newProducts: Product[]) => void;
  };
  // const { searchValue } = inject('search') as {
  //   searchValue: Ref<string>;
  // };
  const searchValue = ref<string>('');

  const getSearchResult = async (query: string) => {
    try {
      const res = await useApi(`${useUrlApi()}/search/query`, {
        method: 'POST',
        body: {
          search: query,
        },
      });

      updateProducts(res as Product[]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleInput = () => {
    searchValue.value = searchValue.value.trim();

    if (searchValue.value.length > 2) {
      getSearchResult(searchValue.value);
      // scroll
    } else {
      updateProducts([]);
    }
  };
</script>

<template>
  <div class="relative rounded-[50px] border border-solid border-black">
    <SvgoSearch
      :fontControlled="false"
      class="absolute right-[15px] top-1/2 z-[-1] !mb-0 h-[12px] w-[12px] -translate-y-1/2 cursor-text text-status_gray md:h-[17px] md:w-[17px] lg:h-5 lg:w-5"
    />

    <input
      v-model="searchValue"
      type="text"
      :placeholder="$t('startYourSearch')"
      class="w-full bg-transparent py-[9px] pl-[15px] pr-8 text-[16px] text-black outline-none placeholder:text-status_gray md:py-[12px] md:pl-[18px] md:pr-[36px] lg:py-[15px] lg:pl-[21px] lg:pr-10 lg:text-[17px]"
      @input="handleInput"
    />
  </div>
</template>

<style></style>

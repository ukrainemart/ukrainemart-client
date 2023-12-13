<script setup lang="ts">
  const props = defineProps<{
    searchValue: string;
    isSearchActive: boolean;
    isSearchModal?: boolean;
  }>();

  const router = useRouter();
  const emit = defineEmits([
    'updateSearchValue',
    'updateProducts',
    'updateCategories',
    'updateSearchActive',
  ]);

  const getSearchResult = async (query: string) => {
    try {
      const res: { products: Product[]; categories: Category[] } = await useApi(
        `${useUrlApi()}/search/shortQuery?search=${query}`
      );

      emit('updateProducts', res.products);
      emit('updateCategories', res.categories);
      emit('updateSearchActive', true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInput = useDebounceFn((event: Event | KeyboardEvent) => {
    const target = event.target as HTMLInputElement;
    const newSearchValue = target.value;
    emit('updateSearchValue', newSearchValue);

    if (newSearchValue.trim().length) {
      if (event instanceof KeyboardEvent && event.key === 'Enter') {
        router.push(`/search?param=${newSearchValue}`);
        emit('updateSearchActive', false);
      } else {
        getSearchResult(newSearchValue.trim());
      }
    } else {
      emit('updateSearchActive', false);
    }
  }, 400);

  watch(
    () => props.isSearchActive,
    (newVal) => {
      if (newVal === false) {
        emit('updateSearchValue', '');
      }
    }
  );
</script>

<template>
  <div
    :class="
      cn('relative  border border-solid border-black', {
        'rounded-[50px]': !isSearchActive,
        'rounded-t-[15px]': isSearchActive,
        // 'bg-[#bbbbbb]': isSearchModal,
        'bg-white': isSearchModal,
      })
    "
  >
    <SvgoSearch
      v-if="!isSearchModal"
      :fontControlled="false"
      class="absolute right-[15px] top-1/2 z-[-1] !mb-0 h-[12px] w-[12px] -translate-y-1/2 cursor-text text-status_gray md:h-[17px] md:w-[17px] lg:h-5 lg:w-5"
    />

    <SvgoSearchMobileMenu
      v-else
      :fontControlled="false"
      class="absolute right-[15px] top-1/2 !mb-0 h-[12px] w-[12px] -translate-y-1/2 cursor-text md:h-[17px] md:w-[17px] lg:h-5 lg:w-5"
    />

    <input
      :value="searchValue"
      type="text"
      :placeholder="$t('startYourSearch')"
      :class="
        cn(
          'relative w-full bg-transparent py-[9px] pl-[15px] pr-8 text-[12px] font-medium text-black outline-none placeholder:text-status_gray md:py-[12px] md:pl-[18px] md:pr-[36px] md:text-[14px] lg:py-[15px] lg:pl-[21px] lg:pr-10 lg:text-[17px]',
          {
            'placeholder:text-black': isSearchModal,
          }
        )
      "
      @input="handleInput($event)"
      @keydown="handleInput($event)"
    />
  </div>
</template>

<style></style>

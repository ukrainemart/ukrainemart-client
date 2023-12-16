<script setup lang="ts">
  const props = defineProps<{
    searchValue: string;
    isSearchActive: boolean;
    isSearchLoading: boolean;
    products: Product[];
    categories: Category[];
    isSearchModal?: boolean;
    toggleSearchModal?: () => void;
  }>();
  const router = useRouter();

  const handleClick = (path: string) => {
    if (props.toggleSearchModal) {
      props.toggleSearchModal();
    }

    router.push(path);
  };
</script>

<template>
  <!-- SKELETON START -->
  <div
    v-if="isSearchLoading"
    :class="
      cn(
        'absolute inset-x-0 z-10 rounded-b-[15px] bg-white py-[15px] text-left md:rounded-b-[20px] md:py-[18px] xl:py-[25px]',
        {
          relative: isSearchModal,
          'shadow-lg': !isSearchModal,
        }
      )
    "
  >
    <UiSkeleton class="mx-[15px] mb-[6px] h-[17px] w-[40%] md:mb-[9px] xl:mb-5" />
    <UiSkeleton class="mx-[15px] mb-[6px] h-[12px] w-[80%] md:mb-[9px] xl:mb-5" />
    <UiSkeleton class="mx-[15px] mb-[6px] h-[12px] w-[80%] md:mb-[9px] xl:mb-5" />
    <UiSkeleton class="mx-[15px] mb-[6px] h-[12px] w-[80%] md:mb-[9px] xl:mb-5" />
  </div>
  <!-- SKELETON END -->

  <div
    v-if="isSearchActive && !isSearchLoading"
    :class="
      cn(
        'absolute inset-x-0 z-10 rounded-b-[15px] bg-white py-[15px] text-left md:rounded-b-[20px] md:py-[18px] xl:py-[25px]',
        {
          relative: isSearchModal,
          'shadow-lg': !isSearchModal,
        }
      )
    "
  >
    <div v-if="categories.length">
      <p
        class="mb-[6px] px-[15px] font-namu text-[14px] leading-[17px] md:mb-[9px] md:text-[18px] md:leading-[22px] xl:mb-5 xl:text-[22px] xl:leading-[26px]"
      >
        {{ $t('category.plural') }}
      </p>

      <ul class="flex flex-col">
        <li v-for="category in categories" :key="category.id" class="">
          <!-- TODO: long title (truncate, gap) -->
          <NuxtLink
            :to="`/category/${category.id}`"
            class="flex items-center justify-between px-[15px] py-[8px] lg:hover:bg-gray-100 xl:py-[10px]"
            @click="handleClick(`/category/${category.id}`)"
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

    <div
      v-if="products.length && categories.length"
      class="mx-[15px] mb-2.5 h-px bg-status_dark_gray"
    />

    <div v-if="products.length">
      <p
        class="mb-[6px] px-[15px] font-namu text-[14px] leading-[17px] md:mb-[9px] md:text-[18px] md:leading-[22px] xl:mb-5 xl:text-[22px] xl:leading-[26px]"
      >
        {{ $t('search.products') }}
      </p>

      <ul class="flex flex-col">
        <li v-for="product in products" :key="product.id" class="">
          <!-- TODO: long title (truncate, gap) -->
          <NuxtLink
            :to="`/product/${product.id}`"
            class="flex items-center justify-between px-[15px] py-[8px] lg:hover:bg-gray-100 xl:py-[10px]"
            @click="handleClick(`/product/${product.id}`)"
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

    <div v-if="products.length || categories.length" class="px-[15px]">
      <NuxtLink
        :to="`/search?param=${searchValue}`"
        class="flex w-fit pt-[4px] xl:pt-[5px]"
        @click="handleClick(`/search?param=${searchValue}`)"
      >
        <span
          class="text-[10px] font-semibold leading-[12px] text-status_red md:text-[14px] md:leading-[17px] lg:hover:underline xl:text-[17px] xl:leading-[21px]"
        >
          {{ $t('search.show_all') }}
        </span>
      </NuxtLink>
    </div>

    <div v-if="!products.length && !categories.length">
      <p
        class="px-[15px] text-[10px] font-medium leading-[12px] md:text-[14px] md:leading-[17px] xl:text-[17px] xl:leading-[21px]"
      >
        {{ $t('search.nothing_found') }}
      </p>
    </div>
  </div>
</template>

<style></style>

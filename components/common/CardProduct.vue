<script setup lang="ts">
  const props = defineProps<{
    product: Product;
    isFavorites?: boolean;
  }>();
  const favorites = useFavoritesStore();

  const addToFavorites = () => {
    favorites.addToFavorites(props.product.id);
  };

  const isExistInFavorites = computed(() => {
    return !!favorites.favorites.find((el) => el.id === props.product.id);
  });

  const removeFavorites = () => {
    favorites.removeFavorites(props.product.id);
  };

  const onClickFavoritesBth = () => {
    if (isExistInFavorites.value) {
      removeFavorites();
      return false;
    }
    addToFavorites();
  };

  const savedPrices = computed(() => {
    if (props.product && props.product.price_type === 'variated') {
      return props.product?.prices?.map((price, i) => {
        return {
          minAmount: i === 0 ? price.min_amount : null,
          minPrice: i === 0 ? price.price : null,
          maxAmount: i === props.product.prices.length - 1 ? price.max_amount : null,
          maxPrice: i === props.product.prices.length - 1 ? price.price : null,
        };
      });
    }

    return [];
  });
</script>

<template>
  <NuxtLink
    :to="`/product/${product.id}`"
    class="relative block rounded-[10px] bg-white p-2.5 md:rounded-[15px] md:p-[15px] 4xl:rounded-[20px] 4xl:p-[20px]"
  >
    <div class="relative mb-[7px] pt-[128%] md:mb-2.5 md:pt-[127.5%] 4xl:mb-5 4xl:pt-[125%]">
      <img
        class="absolute left-0 top-0 h-full w-full rounded-[7px] object-cover"
        :src="product?.main_image?.path"
        :alt="useMultiLang(product, 'title')"
      />
    </div>

    <button
      class="group absolute right-[15%] top-[7%] w-[22%] rounded-[50%] bg-white pt-[22%]"
      @click.prevent="onClickFavoritesBth"
    >
      <SvgoHearth
        v-if="!isExistInFavorites"
        :class="
          cn(
            'absolute left-[50%] top-[50%] !h-[46%] !w-[46%] translate-x-[-50%] translate-y-[-40%] text-black duration-hover group-hover:text-status_red'
          )
        "
      />
      <SvgoHearthBg
        v-else
        :class="
          cn(
            'absolute left-[50%] top-[50%] !h-[46%] !w-[46%] translate-x-[-50%] translate-y-[-40%] text-status_red duration-hover group-hover:text-status_red'
          )
        "
      />
    </button>

    <h5
      class="mb-[5px] truncate text-[13px] font-medium leading-[15px] md:text-[16px] md:leading-[20px] 4xl:mb-2.5 4xl:text-[20px] 4xl:leading-[24px]"
    >
      {{ useMultiLang(product, 'title') }}
    </h5>

    <div v-if="product.prices">
      <div v-if="product?.price_type === 'fixed'" class="flex flex-col">
        <span class="price_amount">
          {{ product?.prices[0]?.min_amount }}
        </span>
        <span class="price_cost"> {{ product?.prices[0]?.price }}<CommonCurrency /> </span>
      </div>

      <div v-if="product?.price_type === 'variated'">
        <div class="price_amount">
          {{ `${savedPrices[0]?.minAmount}-${savedPrices[savedPrices.length - 1]?.maxAmount}` }}
        </div>

        <div class="price_cost">
          {{ `${savedPrices[0]?.minPrice}-${savedPrices[savedPrices.length - 1]?.maxPrice}` }}
          <CommonCurrency />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style>
  .price_amount {
    @apply mb-2.5 text-[13px] leading-[16px] text-status_gray md:text-[16px] md:leading-[20px] 4xl:mb-[15px] 4xl:text-[20px] 4xl:leading-[24px];
  }

  .price_cost {
    @apply flex items-center text-[15px] font-semibold leading-[18px] md:text-[20px] md:leading-[24px] 4xl:text-[25px] 4xl:leading-[30px];
  }
</style>

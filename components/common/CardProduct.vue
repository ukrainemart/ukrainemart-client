<script setup lang="ts">
  const props = defineProps<{
    product: Product;
  }>();

  type SavedPrices = {
    minPrice?: number;
    maxPrice?: number;
    minAmount?: number;
    maxAmount?: number;
  };

  const auth = useAuthStore();
  const user = computed(() => auth.user);
  const savedPrices = computed(() => {
    if (props.product && props.product.price_type === 'variated') {
      return props.product.prices.reduce((acc: SavedPrices, price, i) => {
        if (i === 0) {
          acc.minPrice = price.price;
          acc.minAmount = price.min_amount;
        }

        if (i === props.product.prices.length - 1) {
          acc.maxPrice = price.price;
          acc.maxAmount = price.max_amount;
        }

        return acc;
      }, {});
    }

    return {};
  });
</script>

<template>
  <NuxtLink
    :to="`/product/${product.id}`"
    class="group relative block rounded-[10px] border-[1px] border-transparent bg-white p-2.5 duration-hover hover:border-status_gray md:rounded-[15px] md:p-[15px] 4xl:rounded-[20px] 4xl:p-[20px]"
  >
    <div class="relative mb-[7px] pt-[128%] md:mb-2.5 md:pt-[127.5%] 4xl:mb-5 4xl:pt-[125%]">
      <img
        class="absolute left-0 top-0 h-full w-full rounded-[7px] object-cover"
        :src="product?.main_image?.path"
        :alt="useMultiLang(product, 'title')"
      />
    </div>
    <CommonButtonFavoriteCardProduct
      v-if="product.company_id !== user?.company?.id"
      :product="product"
    />

    <h5
      class="mb-[5px] truncate text-[13px] font-medium leading-[15px] md:text-[16px] md:leading-[20px] 4xl:mb-2.5 4xl:text-[20px] 4xl:leading-[24px]"
    >
      {{ useMultiLang(product, 'title') }}
    </h5>

    <div v-if="product.prices">
      <div v-if="product?.price_type === 'fixed'" class="flex flex-col">
        <span class="price_amount">
          {{
            `${product?.prices[0]?.min_amount} ${useMultiLang(product?.prices[0]?.unit, 'title')}`
          }}
        </span>
        <span class="price_cost"> {{ product?.prices[0]?.price }}<CommonCurrency /> </span>
      </div>

      <div v-if="product?.price_type === 'variated'">
        <div class="price_amount">
          {{
            `${savedPrices?.minAmount}-${savedPrices?.maxAmount} ${useMultiLang(
              product?.prices[0]?.unit,
              'title'
            )}`
          }}
        </div>

        <div class="price_cost">
          {{ `${savedPrices?.minPrice}-${savedPrices?.maxPrice}` }}
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

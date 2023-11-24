<script setup lang="ts">
  defineProps<{
    product: Product;
  }>();
</script>

<template>
  <div
    class="group relative rounded-[20px] p-padding-x-card-product-xs shadow-black duration-hover lg:px-padding-x-card-product-lg 2xl:px-padding-x-card-product-2xl hover:is-hover:bg-white is-hover:hover:shadow-2xl lg:is-hover:py-[15px] 2xl:is-hover:py-[20px]"
  >
    <NuxtLink
      :to="`/product/${product.id}`"
      class="absolute left-0 top-0 z-10 h-full w-full is-hover:hidden"
    />

    <div class="relative pt-[130%]">
      <img
        class="absolute left-0 top-0 h-full w-full rounded-[7px] object-cover"
        :src="product?.main_image?.path"
        :alt="useMultiLang(product, 'title')"
      />
    </div>

    <h5 class="mt-[5px] truncate font-medium text-black md:mt-[12px] xl:mt-[20px]">
      <UiTextPortalPrimaryXl class="">
        {{ useMultiLang(product, 'title') }}
      </UiTextPortalPrimaryXl>
    </h5>

    <div class="mt-[2px] md:mt-[8px] xl:mt-[15px]">
      <div v-if="product.price_type === 'fixed'" class="flex flex-col">
        <span class="text-[15px] text-status_gray md:text-[16px] 4xl:text-[25px]">
          {{ product.prices[0].min_amount }}
        </span>
        <span
          class="mt-[7px] text-[16px] font-semibold md:mt-2.5 md:text-[20px] 4xl:mt-[20px] 4xl:text-[27px]"
        >
          {{ product.prices[0].price }}<CommonCurrency />
        </span>
      </div>

      <ul v-if="product.price_type === 'variated'" class="">
        <!-- FIXME make the same offset (price1 - price2) -->
        <li v-for="(price, i) in product.prices" :key="i" class="inline-flex flex-col">
          <span v-if="i === 0" class="text-[15px] text-status_gray md:text-[16px] 4xl:text-[25px]">
            {{ price.min_amount }}-
          </span>
          <span
            v-if="i === 0"
            class="mt-[7px] text-[16px] font-semibold md:mt-2.5 md:text-[20px] 4xl:mt-[20px] 4xl:text-[27px]"
          >
            {{ price.price }}-
          </span>

          <!-- FIXME make the same offset (price1 - price2) -->
          <span
            v-if="i === product.prices.length - 1"
            class="text-[15px] text-status_gray md:text-[16px] 4xl:text-[25px]"
          >
            {{ price.max_amount }} kg
          </span>
          <span
            v-if="i === product.prices.length - 1"
            class="mt-[7px] text-[16px] font-semibold md:mt-2.5 md:text-[20px] 4xl:mt-[20px] 4xl:text-[27px]"
          >
            {{ price.price }}<CommonCurrency />
          </span>
        </li>
      </ul>
    </div>

    <div
      class="invisible relative z-20 mt-[20px] hidden justify-center is-hover:flex group-hover:is-hover:visible"
    >
      <UiButtonOutline @click="navigateTo(`/product/${product.id}`)">
        {{ $t('details') }}
      </UiButtonOutline>
    </div>
  </div>
</template>

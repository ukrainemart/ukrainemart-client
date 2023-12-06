<script setup lang="ts">
  const { products } = inject('products') as {
    products: Ref<Product[]>;
  };
</script>

<template>
  <div
    v-if="products.length"
    class="absolute inset-x-0 rounded-[15px] bg-white px-[15px] py-[7px] text-left shadow-lg md:rounded-[20px] md:p-[18px] xl:p-[25px]"
  >
    <p
      class="mb-[12px] font-namu text-[14px] leading-[17px] md:mb-[15px] md:text-[18px] md:leading-[22px] xl:mb-5 xl:text-[22px] xl:leading-[26px]"
    >
      Товари
    </p>

    <ul class="flex flex-col gap-y-[12px] md:gap-y-[15px] xl:gap-y-5">
      <li v-for="product in products" :key="product.id">
        <!-- TODO: long title (truncate, gap) -->
        <NuxtLink :to="`/product/${product.id}`" class="flex items-center justify-between">
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

      <li>
        <!-- TODO: add to url -->
        <NuxtLink :to="'/'" class="flex">
          <span
            class="text-[10px] font-semibold leading-[12px] text-status_red md:text-[14px] md:leading-[17px] xl:text-[17px] xl:leading-[21px]"
          >
            Показати всі результати
          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style></style>

<script setup lang="ts">
  defineProps<{
    product: Product;
  }>();
</script>

<template>
  <div class="mb-[70px] md:mb-0">
    <CommonProductTitle
      styles="mb-[15px] md:mb-[17px] 2xl:mb-5 text-[17px] md:text-[24px] 2xl:text-[30px]"
    >
      {{ useMultiLang(product, 'title') }}
    </CommonProductTitle>

    <div class="mb-5">
      <div
        v-if="product?.price_type === 'fixed'"
        class="flex flex-col gap-y-[3px] md:gap-y-[4px] xl:gap-y-[5px]"
      >
        <span class="text-[9px] font-medium text-status_gray md:text-[13px] xl:text-[18px]">
          {{ `${product?.prices[0].min_amount} ${useMultiLang(product.prices[0].unit, 'title')}` }}
        </span>
        <span class="text-[18px] font-semibold md:text-[24px] xl:text-[30px]">
          {{ product?.prices[0].price }}$
        </span>
      </div>

      <ul
        v-if="product?.price_type === 'variated'"
        class="flex gap-x-[20px] md:gap-x-[30px] xl:gap-x-[40px]"
      >
        <li
          v-for="(price, i) in product.prices"
          :key="i"
          class="flex flex-col gap-y-[3px] md:gap-y-[4px] xl:gap-y-[5px]"
        >
          <span class="text-[9px] font-medium text-status_gray md:text-[13px] xl:text-[18px]">
            {{ `${price.min_amount}-${price.max_amount} ${useMultiLang(price.unit, 'title')}` }}
          </span>
          <span class="text-[18px] font-semibold md:text-[24px] xl:text-[30px]">
            {{ price.price }}$
          </span>
        </li>
      </ul>
    </div>

    <ul
      v-for="section in product?.product_sections"
      :key="section.id"
      class="mb-[15px] flex flex-col gap-2.5 md:mb-[28px] md:gap-[12px] 2xl:gap-5"
    >
      <li
        v-if="section?.category_sections[0]"
        class="flex gap-[5px] font-medium text-black md:gap-2.5 2xl:gap-[15px]"
      >
        <UiTextPortalPrimaryXl>
          {{ useMultiLang(section?.category_sections[0], 'title') }}:
          <span class="text-status_gray">{{ useMultiLang(section, 'title') }}</span>
        </UiTextPortalPrimaryXl>
      </li>
    </ul>

    <div class="flex items-center gap-[15px] md:gap-[20px] xl:gap-[25px]">
      <UiButtonPrimaryIconEnvelop>
        {{ $t('labels.contact') }}
      </UiButtonPrimaryIconEnvelop>

      <CommonButtonFavoritePageProduct :product="product" />
    </div>
  </div>
</template>

<style></style>

<script setup lang="ts">
  defineProps<{
    product: Product;
  }>();
</script>

<template>
  <div class="mb-[70px] md:mb-0">
    <p
      class="mb-[5px] text-[7px] font-medium text-status_gray md:mb-2.5 md:text-[10px] 2xl:mb-[15px] 2xl:text-[14px]"
    >
      Цей продукт купували 250 разів
    </p>

    <CommonProductTitle
      styles="mb-[15px] md:mb-[17px] 2xl:mb-5 text-[17px] md:text-[24px] 2xl:text-[30px]"
    >
      {{ useMultiLang(product, 'title') }}
    </CommonProductTitle>

    <div class="mb-5">
      <div v-if="product?.price_type === 'fixed'">{{ product.prices[0].price }}$</div>

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
            {{ `${price.min_amount}-${price.max_amount} kg` }}
          </span>
          <span class="text-[18px] font-semibold md:text-[24px] xl:text-[30px]">
            {{ price.price }}$
          </span>
        </li>
      </ul>
    </div>

    <ul class="mb-[15px] flex flex-col gap-2.5 md:mb-[28px] md:gap-[12px] 2xl:gap-5">
      <li class="flex gap-[5px] font-medium text-black md:gap-2.5 2xl:gap-[15px]">
        <UiTextPortalPrimaryXl>
          Мінімальне замовлення:
          <span class="text-status_gray">10 кг</span>
        </UiTextPortalPrimaryXl>
      </li>
      <li class="flex gap-[5px] font-medium text-black md:gap-2.5 2xl:gap-[15px]">
        <UiTextPortalPrimaryXl>
          Тип пакування:
          <span class="text-status_gray">Мішок</span>
        </UiTextPortalPrimaryXl>
      </li>
      <li class="flex gap-[5px] font-medium text-black md:gap-2.5 2xl:gap-[15px]">
        <UiTextPortalPrimaryXl>
          Доступно:
          <span class="text-status_gray">200 кг</span>
        </UiTextPortalPrimaryXl>
      </li>
      <li class="flex gap-[5px] font-medium text-black md:gap-2.5 2xl:gap-[15px]">
        <UiTextPortalPrimaryXl>
          Термін придатності:
          <span class="text-status_gray">24 місяці</span>
        </UiTextPortalPrimaryXl>
      </li>
      <li class="flex gap-[5px] font-medium text-black md:gap-2.5 2xl:gap-[15px]">
        <UiTextPortalPrimaryXl>
          Формат доставки:
          <span class="text-status_gray">{{ '' }}</span>
        </UiTextPortalPrimaryXl>
      </li>
    </ul>

    <UiButtonPrimaryIconEnvelop>Зв’язатися</UiButtonPrimaryIconEnvelop>
  </div>
</template>

<style></style>

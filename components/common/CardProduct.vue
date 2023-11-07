<script setup lang="ts"></script>

<template>
  <div
    class="group relative rounded-[20px] p-padding-x-card-product-xs shadow-black duration-hover lg:px-padding-x-card-product-lg 2xl:px-padding-x-card-product-2xl hover:is-hover:bg-white is-hover:hover:shadow-2xl lg:is-hover:py-[15px] 2xl:is-hover:py-[20px]"
  >
    <NuxtLink
      :to="'/product/product_id'"
      class="absolute left-0 top-0 z-10 h-full w-full is-hover:hidden"
      href="#"
    />
    <div class="relative pt-[130%]">
      <img class="absolute left-0 top-0 h-full w-full rounded-[7px]" src="@img/oil.jpg" alt="" />
    </div>
    <h5 class="mt-[5px] line-clamp-2 font-medium text-black md:mt-[15px] xl:mt-[20px]">
      <UiTextPortalPrimaryXl>Соняшникова олія Деревина Зерно пшениці</UiTextPortalPrimaryXl>
    </h5>
    <UiTextPortalPrimaryXl class="mt-[7px] text-status_gray xl:mt-[10px]"
      >200 л</UiTextPortalPrimaryXl
    >
    <p
      class="mt-[10px] text-[16px] font-semibold text-black md:text-[22px] xl:mt-[15px] xl:text-[27px]"
    >
      100-150<CommonCurrency />
    </p>
    <div
      class="invisible relative z-20 mt-[20px] hidden justify-center is-hover:flex group-hover:is-hover:visible"
    >
      <UiButtonOutline @click="navigateTo(`/product/product_id`)">
        {{ $t('details') }}
      </UiButtonOutline>
    </div>
  </div>
</template>

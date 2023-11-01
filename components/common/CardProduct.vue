<script setup lang="ts"></script>

<template>
  <div
    class="relative rounded-[20px] p-[7px] shadow-black duration-hover hover:bg-white is-hover:hover:shadow-2xl lg:is-hover:px-[20px] lg:is-hover:py-[15px] 2xl:is-hover:px-[30px] 2xl:is-hover:py-[20px]"
  >
    <a class="absolute left-0 top-0 z-10 h-full w-full is-hover:hidden" href="#"></a>
    <div class="relative pt-[130%]">
      <img class="absolute left-0 top-0 h-full w-full rounded-[7px]" src="@img/oil.jpg" alt="" />
    </div>
    <h5 class="mt-[5px] line-clamp-2 font-medium text-black md:mt-[15px] xl:mt-[20px]">
      <UiTextPortalPrimaryXl>Соняшникова олія Деревина Зерно пшениці</UiTextPortalPrimaryXl>
    </h5>
    <UiTextPortalPrimaryXl class="mt-[7px] text-color-gray xl:mt-[10px]"
      >200 л</UiTextPortalPrimaryXl
    >
    <p
      class="mt-[10px] text-[16px] font-semibold text-black md:text-[22px] xl:mt-[15px] xl:text-[27px]"
    >
      100-150<CommonCurrency />
    </p>
    <div class="mt-[20px] hidden justify-center lg:flex">
      <button class="rounded-[50px] border-[2px] border-black px-[35px] py-[13px]">
        <UiTextPortalPrimary>Детальніше</UiTextPortalPrimary>
      </button>
    </div>
  </div>
</template>

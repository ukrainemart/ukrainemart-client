<script setup lang="ts"></script>

<template>
  <div class="mb-[70px] md:mb-0">
    <p
      class="mb-[5px] text-[7px] font-medium text-status_gray md:mb-2.5 md:text-[10px] 2xl:mb-[15px] 2xl:text-[14px]"
    >
      Цей продукт купували 250 разів
    </p>
    <CommonProductTitle styles="mb-[15px] md:mb-[17px] 2xl:mb-5" />
    <p class="mb-5 text-[22px] font-semibold md:mb-[22px] md:text-[27px] 2xl:mb-10 2xl:text-[35px]">
      50₴/кг
    </p>

    <ul class="mb-[15px] flex flex-col gap-2.5 md:mb-[28px] md:gap-[12px] 2xl:gap-5">
      <li class="flex gap-[5px] font-medium text-black md:gap-2.5 2xl:gap-[15px]">
        <UiTextPortalPrimaryXl
          >Мінімальне замовлення:
          <span class="text-status_gray">10 кг</span>
        </UiTextPortalPrimaryXl>
      </li>
      <li class="flex gap-[5px] font-medium text-black md:gap-2.5 2xl:gap-[15px]">
        <UiTextPortalPrimaryXl
          >Тип пакування:
          <span class="text-status_gray">Мішок</span>
        </UiTextPortalPrimaryXl>
      </li>
      <li class="flex gap-[5px] font-medium text-black md:gap-2.5 2xl:gap-[15px]">
        <UiTextPortalPrimaryXl
          >Доступно:
          <span class="text-status_gray">200 кг</span>
        </UiTextPortalPrimaryXl>
      </li>
      <li class="flex gap-[5px] font-medium text-black md:gap-2.5 2xl:gap-[15px]">
        <UiTextPortalPrimaryXl
          >Термін придатності:
          <span class="text-status_gray">24 місяці</span>
        </UiTextPortalPrimaryXl>
      </li>
      <li class="flex gap-[5px] font-medium text-black md:gap-2.5 2xl:gap-[15px]">
        <UiTextPortalPrimaryXl
          >Формат доставки:
          <span class="text-status_gray">{{ '' }}</span>
        </UiTextPortalPrimaryXl>
      </li>
    </ul>

    <UiButtonPrimaryIconEnvelop>Зв’язатися</UiButtonPrimaryIconEnvelop>
  </div>
</template>

<style></style>

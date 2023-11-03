<script setup lang="ts"></script>

<template>
  <div class="rounded-[20px] bg-white px-[20px] py-[15px] md:p-[30px]">
    <div class="flex items-center gap-[10px]">
      <img class="w-[21px] h-[14px] md:w-[29px] md:h-[19px] 4xl:w-[36px] 4xl:h-[24px]" src="@img/flag_spain.png" alt="flag spain" />
      <UiTextPortalPrimary>Іспанія</UiTextPortalPrimary>
    </div>
    <h3 class="mt-[5px] font-medium text-[17px] md:mt-[12px] md:text-[24px] 4xl:mt-[21px] 4xl:text-[30px]">
      Ми потребуємо соняшникову олію
    </h3>
    <UiTextPortalPrimary class="mt-[2px] text-color-gray md:mt-[8px] 4xl:mt-[15px]"
      >28.10.2023</UiTextPortalPrimary
    >
    <div
      class="mt-[7px] flex flex-col gap-[5px] md:mt-[20px] md:gap-[10px] 4xl:mt-[30px] 4xl:gap-[15px]"
    >
      <UiTextPortalPrimaryXl>
        Доставка:
        <span class="text-color-gray">10-14 днів</span>
      </UiTextPortalPrimaryXl>
      <UiTextPortalPrimaryXl>
        Кількість:
        <span class="text-color-gray">150 л</span>
      </UiTextPortalPrimaryXl>
      <UiTextPortalPrimaryXl>
        Запит діє:
        <span class="text-color-gray">до 03.11.2023 </span>
      </UiTextPortalPrimaryXl>
    </div>
  </div>
</template>

<style scoped></style>

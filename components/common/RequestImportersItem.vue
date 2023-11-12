<script setup lang="ts"></script>

<template>
  <div class="flex flex-col items-start rounded-[20px] bg-white px-[20px] py-[15px] md:p-[30px]">
    <div class="flex items-center gap-[10px]">
      <img
        class="h-[14px] w-[21px] md:h-[19px] md:w-[29px] 4xl:h-[24px] 4xl:w-[36px]"
        src="@img/flag_spain.png"
        alt="flag spain"
      />
      <UiTextPortalPrimary>Іспанія</UiTextPortalPrimary>
    </div>
    <h3 class="mt-[5px] text-[17px] font-medium md:mt-[12px] md:text-[20px] 4xl:mt-[21px]">
      Ми потребуємо соняшникову олію
    </h3>
    <UiTextPortalPrimary class="mt-[10px] text-status_gray 4xl:mt-[15px]">
      28.10.2023
    </UiTextPortalPrimary>
    <div
      class="mt-[7px] flex flex-col gap-[5px] md:mt-[20px] md:gap-[10px] 4xl:mt-[30px] 4xl:gap-[15px]"
    >
      <UiTextPortalPrimaryXl>
        {{ `${$t('delivery')}:` }}
        <span class="text-status_gray">10-14 днів</span>
      </UiTextPortalPrimaryXl>
      <UiTextPortalPrimaryXl>
        {{ `${$t('quantity')}:` }}
        <span class="text-status_gray">150 л</span>
      </UiTextPortalPrimaryXl>
      <UiTextPortalPrimaryXl>
        {{ `${$t('requestIsValid')}:` }}
        <span class="text-status_gray">до 03.11.2023 </span>
      </UiTextPortalPrimaryXl>
    </div>
    <UiButtonOutline class="mt-[15px] self-center md:mt-[35px] 4xl:mt-[25px]">
      {{ $t('details') }}
    </UiButtonOutline>
  </div>
</template>

<style scoped></style>

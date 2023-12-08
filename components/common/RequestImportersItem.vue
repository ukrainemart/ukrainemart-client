<script setup lang="ts">
  defineProps<{
    noButton?: boolean;
    requestLink: string;
  }>();
</script>

<template>
  <div class="relative grid grid-cols-2 rounded-[20px] bg-white px-[20px] py-[15px] md:p-[30px]">
    <div class="col-span-1 flex items-center gap-[10px]">
      <img
        class="h-[14px] w-[21px] md:h-[19px] md:w-[29px] 4xl:h-[24px] 4xl:w-[36px]"
        src="@img/flag_spain.png"
        alt="flag spain"
      />
      <UiTextPortalPrimary>Іспанія</UiTextPortalPrimary>
    </div>
    <div class="relative z-20 col-span-1">
      <slot name="buttons_action" />
    </div>
    <h3
      class="col-span-2 mt-[5px] text-[17px] font-medium md:mt-[12px] md:text-[20px] 4xl:mt-[21px]"
    >
      Ми потребуємо соняшникову олію
    </h3>
    <UiTextPortalPrimary class="col-span-2 mt-[10px] text-status_gray 4xl:mt-[15px]">
      28.10.2023
    </UiTextPortalPrimary>
    <div
      class="col-span-2 mt-[7px] flex flex-col gap-[5px] md:mt-[20px] md:gap-[10px] 4xl:mt-[30px] 4xl:gap-[15px]"
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
    <div class="col-span-2 flex justify-center">
      <UiButtonOutline
        v-if="!noButton"
        :to="requestLink"
        class="mt-[15px] self-center md:mt-[35px] 4xl:mt-[25px]"
      >
        {{ $t('details') }}
      </UiButtonOutline>
    </div>
    <nuxt-link v-if="noButton" class="absolute left-0 top-0 z-10 h-full w-full" :to="requestLink" />
  </div>
</template>

<style scoped></style>

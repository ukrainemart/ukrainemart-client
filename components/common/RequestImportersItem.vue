<script setup lang="ts">
  defineProps<{
    noButton?: boolean;
    request: RequestImporter;
    target: string;
  }>();
</script>

<template>
  <div class="relative grid grid-cols-2 rounded-[20px] bg-white px-[20px] py-[15px] md:p-[30px]">
    <div class="col-span-1 flex items-center gap-[10px]">
      <img
        class="h-[14px] w-[21px] md:h-[19px] md:w-[29px] 4xl:h-[24px] 4xl:w-[36px]"
        :src="request?.country?.img"
        alt="flag_spain"
      />
      <UiTextPortalPrimary>{{ useMultiLang(request?.country, 'title') }}</UiTextPortalPrimary>
    </div>
    <div class="relative z-20 col-span-1">
      <slot name="buttons_action" />
    </div>
    <h3
      class="col-span-2 mt-[10px] text-[17px] font-medium md:mt-[15px] md:text-[20px] 4xl:mt-[24px]"
    >
      {{ request?.title }}
    </h3>
    <UiTextPortalPrimary class="col-span-2 mt-[10px] text-status_gray 4xl:mt-[15px]">
      {{ useDate(request?.created_at) }}
    </UiTextPortalPrimary>
    <div
      class="col-span-2 mt-[7px] flex flex-col gap-[5px] md:mt-[20px] md:gap-[10px] 4xl:mt-[30px] 4xl:gap-[15px]"
    >
      <UiTextPortalPrimaryXl>
        {{ `${$t('name_company')}:` }}
        <span class="text-status_gray">{{ request?.company?.title }}</span>
      </UiTextPortalPrimaryXl>
      <UiTextPortalPrimaryXl>
        {{ `${$t('quantity')}:` }}
        <span class="text-status_gray">{{ request?.count }}</span>
      </UiTextPortalPrimaryXl>
      <UiTextPortalPrimaryXl>
        {{ `${$t('requestIsValid')}:` }}
        <span class="text-status_gray">{{ useDate(request?.active_before) }} </span>
      </UiTextPortalPrimaryXl>
    </div>
    <div class="col-span-2 flex justify-center">
      <UiButtonOutline
        :target="target"
        v-if="!noButton"
        :to="'/request_importers/' + request.id"
        class="mt-[15px] self-center md:mt-[35px] 4xl:mt-[25px]"
      >
        {{ $t('details') }}
      </UiButtonOutline>
    </div>
    <nuxt-link
      :target="target"
      v-if="noButton"
      class="absolute left-0 top-0 z-10 h-full w-full"
      :to="'/request_importers/' + request.id"
    />
  </div>
</template>

<style scoped></style>

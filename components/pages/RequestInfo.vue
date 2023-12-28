<script setup lang="ts">
  defineProps<{
    request: RequestImporter;
  }>();
</script>

<template>
  <div class="mb-[70px] md:mb-0">
    <div>
      <CommonProductTitle
        styles="mb-[20px] md:mb-[30px] 2xl:mb-[50px] text-[17px] md:text-[24px] 2xl:text-[30px]"
      >
        {{ request?.title }}
      </CommonProductTitle>
    </div>

    <ul class="mb-[15px] flex flex-col gap-2.5 md:mb-[28px] md:gap-[12px] 2xl:gap-5">
      <li class="flex gap-[5px] font-medium text-black md:gap-2.5 2xl:gap-[15px]">
        <UiTextPortalPrimaryXl>
          {{ $t('profile.my_requests.date_the_request_was_created') + ':' }}
          <span class="text-status_gray">{{ useDate(request?.created_at) }}</span>
        </UiTextPortalPrimaryXl>
      </li>
      <li class="flex gap-[5px] font-medium text-black md:gap-2.5 2xl:gap-[15px]">
        <UiTextPortalPrimaryXl>
          {{ $t('labels.country') + ':' }}
          <span class="text-status_gray">{{ useMultiLang(request?.country, 'title') }}</span>
        </UiTextPortalPrimaryXl>
      </li>
      <li class="flex gap-[5px] font-medium text-black md:gap-2.5 2xl:gap-[15px]">
        <UiTextPortalPrimaryXl>
          {{ $t('category.singular') + ':' }}
          <span class="text-status_gray">{{ useMultiLang(request?.category, 'title') }}</span>
        </UiTextPortalPrimaryXl>
      </li>
      <li class="flex gap-[5px] font-medium text-black md:gap-2.5 2xl:gap-[15px]">
        <UiTextPortalPrimaryXl>
          {{ $t('quantity') + ':' }}
          <span class="text-status_gray">{{ request?.count }}</span>
        </UiTextPortalPrimaryXl>
      </li>
      <li class="flex gap-[5px] font-medium text-black md:gap-2.5 2xl:gap-[15px]">
        <UiTextPortalPrimaryXl>
          {{ $t('labels.request_validity_period') }}
          <span class="text-status_gray">{{ request?.active_before }}</span>
        </UiTextPortalPrimaryXl>
      </li>
    </ul>

    <UiButtonPrimaryIconEnvelop>{{ $t('labels.contact') }}</UiButtonPrimaryIconEnvelop>
  </div>
</template>

<style></style>

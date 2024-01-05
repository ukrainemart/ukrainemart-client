<script setup lang="ts">
  defineProps<{
    subscription: Subscription;
  }>();
</script>

<template>
  <div
    class="mx-auto flex max-w-[350px] flex-col rounded-[20px] bg-white px-[15px] pb-[30px] pt-5 shadow-xl md:px-5 md:pb-10 md:pt-[25px] 2xl:px-[25px] 2xl:pb-[50px] 2xl:pt-[30px]"
  >
    <h3
      class="mb-[12px] text-[14px] font-semibold md:mb-[15px] md:text-[16px] 2xl:mb-5 2xl:text-[25px]"
    >
      {{ useMultiLang(subscription, 'title') }}
    </h3>

    <div class="mb-[18px] flex items-baseline md:mb-5 2xl:mb-[30px]">
      <span
        class="mr-[3px] text-[25px] font-extrabold leading-[30px] md:mr-[5px] md:text-[40px] md:leading-[49px] 2xl:mr-[7px] 2xl:text-[60px] 2xl:leading-[73px]"
      >
        <CommonCurrency />{{ subscription?.price }}
      </span>

      <span
        v-if="subscription.date_type === 'year'"
        class="text-[12px] font-medium text-status_gray md:text-[14px] 2xl:text-[20px]"
      >
        {{ `/${$t('labels.year')}` }}
      </span>
      <span
        v-else-if="subscription.date_type === 'month'"
        class="text-[12px] font-medium text-status_gray md:text-[14px] 2xl:text-[20px]"
      >
        {{ `/${$t('labels.month')}` }}
      </span>
    </div>

    <ul
      class="mb-[30px] flex grow flex-col gap-y-2.5 md:mb-10 md:gap-y-[12px] 2xl:mb-[50px] 2xl:gap-y-[15px]"
    >
      <li v-for="item in subscription.features" :key="item.id" class="flex items-start">
        <SvgoSubCheck
          class="mr-[5px] mt-px shrink-0 text-[10px] text-transparent md:mr-[7px] md:text-[12px] 2xl:mr-2.5 2xl:text-[14px]"
        />

        <span
          class="text-[12px] font-medium leading-[15px] md:text-[14px] md:leading-[17px] 2xl:text-[16px] 2xl:leading-[20px]"
          >{{ useMultiLang(item, 'title') }}</span
        >
      </li>
    </ul>

    <UiButtonPrimary styles="self-center">{{ $t('labels.subscribe') }}</UiButtonPrimary>
  </div>
</template>

<style></style>

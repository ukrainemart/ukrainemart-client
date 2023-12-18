<script setup lang="ts">
  const props = defineProps<{
    product: Product;
    isChatOpenBtn: boolean;
  }>();
  const emits = defineEmits(['switchChat']);

  const switchChat = (value: boolean) => {
    if (props.product.chat) {
      navigateTo({ path: '/profile/message', query: { chatId: props.product.chat } });
      return false;
    }
    emits('switchChat', value);
  };
</script>

<template>
  <div
    class="mb-[70px] flex h-fit w-full flex-col rounded-[5px] bg-white px-[15px] py-5 md:mb-[50px] md:flex-row md:rounded-[7px] md:px-[30px] 2xl:mb-0 2xl:w-auto 2xl:flex-col 2xl:rounded-[10px] 2xl:pb-[15px] 2xl:pt-[30px]"
  >
    <div class="mb-[13px] md:mb-0 md:mr-[50px] 2xl:mb-[30px] 2xl:mr-0">
      <p
        class="mb-[5px] text-[12px] font-medium md:mb-[7px] md:text-[16px] 2xl:mb-[12px] 2xl:text-[20px]"
      >
        {{ product?.company?.title }}
      </p>
    </div>

    <div class="mb-5 md:mb-0 md:grow 2xl:mb-[30px]">
      <div
        class="mb-[7px] flex items-center gap-[5px] md:mb-[10px] md:gap-[7px] 2xl:mb-[16px] 2xl:gap-[10px]"
      >
        <SvgoMapMarker
          :fonControlled="false"
          class="h-[12px] w-[8px] md:h-[15px] md:w-[10px] 2xl:h-5 2xl:w-[14px]"
        />

        <p class="text-[8px] font-medium md:text-[10px] 2xl:text-[14px]">
          Полтава, Полтавська обл., Україна
        </p>
      </div>

      <div class="flex items-center gap-[5px] md:gap-[7px] 2xl:gap-[10px]">
        <SvgoCheckmark
          color="transparent"
          class="h-[6px] w-[8px] stroke-[#26BC00] md:h-[8px] md:w-[10px] 2xl:h-[9px] 2xl:w-[12px]"
        />

        <p class="text-[8px] font-medium md:text-[10px] 2xl:text-[14px]">
          {{ $t('labels.verified_user') }}
        </p>
      </div>
    </div>

    <div class="flex flex-col items-center gap-[8px] md:gap-[10px]">
      <UiButtonOutlineIconEnvelop v-if="isChatOpenBtn" @click="switchChat(true)">
        {{ $t('labels.contact') }}
      </UiButtonOutlineIconEnvelop>

      <NuxtLink
        to="/"
        class="text-[10px] font-medium text-status_gray underline underline-offset-1 md:text-[14px]"
      >
        {{ $t('labels.open_contact') }}
      </NuxtLink>
    </div>
  </div>
</template>

<style></style>

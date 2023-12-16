<script setup lang="ts">
  const chatSwitch = ref<'for_sale' | 'buying'>('for_sale');

  const onScroll = () => {
    console.log('scroll');
  };
</script>

<template>
  <div class="grid-cols-12 gap-[40px] xl:grid">
    <UiDivRoundedBg class="col-span-12 xl:col-span-5 4xl:col-span-4">
      <CommonTitleProfilePage class="mb-[20px] md:mb-[30px] xl:mb-[40px]">
        {{ $t('profile.message.my_messages') }}
      </CommonTitleProfilePage>
      <CommonBusinessSwitcher v-model="chatSwitch" />
      <NuxtScrollbar
        class="mx-[-20px] mt-[20px] flex flex-col overflow-scroll !overflow-x-hidden px-[20px] md:mt-[27px] xl:mt-[41px] xl:max-h-[60vh]"
        tag="div"
        @ps-scroll-y="onScroll"
      >
        <PagesChatItem />
        <PagesChatItem />
        <PagesChatItem />
        <PagesChatItem />
        <PagesChatItem />
        <PagesChatItem />
        <PagesChatItem />
        <PagesChatItem />
        <PagesChatItem />
        <PagesChatItem />
        <PagesChatItem />
        <PagesChatItem />
        <PagesChatItem />
        <PagesChatItem />
      </NuxtScrollbar>
    </UiDivRoundedBg>
    <UiDivRoundedBg class="hidden flex-col xl:col-span-7 xl:flex 4xl:col-span-8">
      <div class="mx-[-15px] border-b border-status_dark_gray md:mx-[-25px] xl:mx-[-30px]">
        <div
          class="flex items-center justify-between px-[15px] pb-[15px] md:px-[25px] xl:px-[30px] xl:pb-[20px] 3xl:px-[35px]"
        >
          <UiIconCircleLetter
            class="h-[45px] w-[45px] shrink-0 md:h-[50px] md:w-[50px] xl:h-[65px] xl:w-[65px]"
            letter="T"
          />
          <div class="ml-[8px] mr-[20px] w-[50%] flex-1 md:ml-[10px] xl:ml-[13px]">
            <h2
              class="inline-block w-full truncate text-[14px] font-medium text-black md:text-[16px] xl:text-[20px]"
            >
              Соняшникова олія
            </h2>
            <h2
              class="mt-[5px] inline-block w-full truncate text-[7px] font-medium text-[#B6B6B6] md:text-[10px] xl:text-[14px]"
            >
              Останній раз в мережі в 15:24
            </h2>
          </div>
          <div class="flex items-center gap-[15px] xl:gap-[20px]">
            <UiButtonOpacityDelete class="!bg-[#F1F1F1]" />
            <UiButtonOpacityBlocked class="!bg-[#F1F1F1]" />
          </div>
        </div>
      </div>
      <div class="flex flex-1 flex-col">
        <NuxtScrollbar
          class="mx-[-30px] flex flex-1 flex-col gap-[10px] overflow-scroll p-[30px] md:gap-[15px] xl:max-h-[60vh] xl:gap-[20px]"
          tag="div"
          @ps-scroll-y="onScroll"
        >
          <PagesChatMessageItem />
          <PagesChatMessageItem user />
          <PagesChatMessageItem />
          <PagesChatMessageItem user />
          <PagesChatMessageItem />
          <PagesChatMessageItem user />
          <PagesChatMessageItem />
          <PagesChatMessageItem user />
          <PagesChatMessageItem />
          <PagesChatMessageItem user />
          <PagesChatMessageItem />
          <PagesChatMessageItem user />
          <PagesChatMessageItem />
          <PagesChatMessageItem user />
          <PagesChatMessageItem />
          <PagesChatMessageItem user />
          <PagesChatMessageItem />
          <PagesChatMessageItem user />
          <PagesChatMessageItem />
          <PagesChatMessageItem user />
          <PagesChatMessageItem />
          <PagesChatMessageItem user />
          <PagesChatMessageItem />
          <PagesChatMessageItem user />
        </NuxtScrollbar>
        <div
          class="mt-[15px] overflow-hidden rounded-[10px] border border-status_dark_gray md:mt-[25px] md:rounded-[15px] xl:rounded-[20px]"
        >
          <textarea
            :placeholder="$t('placeholders.write_your_message')"
            class="min-h-[75px] w-full resize-none px-[15px] py-[10px] text-[7px] focus:outline-none md:min-h-[60px] md:text-[10px] xl:min-h-[80px] xl:text-[14px]"
          />
          <div class="flex justify-between px-[15px] py-[10px]">
            <UiButtonOpacity class="h-[16px] w-[8px] xl:h-[22px] xl:w-[11px]">
              <SvgoPaperClip class="!h-[full] !w-full" />
            </UiButtonOpacity>
            <UiButtonOpacity class="h-[16px] w-[17px] xl:h-[25px] xl:w-[26px]">
              <SvgoSendArrow class="!h-[full] !w-full" />
            </UiButtonOpacity>
          </div>
        </div>
      </div>
    </UiDivRoundedBg>
  </div>
</template>

<style scoped></style>

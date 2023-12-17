<script setup lang="ts">
  defineProps<{
    chat: Chat;
  }>();
</script>

<template>
  <button
    class="flex items-center justify-between rounded-[20px] px-[15px] py-[10px] text-left duration-hover hover:bg-[#e8e8e8] md:py-[14px]"
  >
    <UiIconCircleLetter class="shrink-0" :letter="useMultiLang(chat?.product, 'title')[0]" />
    <div class="ml-[8px] w-[50%] flex-1 md:ml-[10px] xl:ml-[13px]">
      <h2 class="inline-block w-full truncate text-[14px] font-medium text-black md:text-[16px]">
        {{ useMultiLang(chat?.product, 'title') }}
      </h2>
      <h2
        class="mt-[5px] inline-block w-full truncate text-[14px] font-medium text-[#B6B6B6] md:text-[16px]"
      >
        {{ chat?.company?.title }}
      </h2>
    </div>
    <span
      v-if="chat?.not_readable_client_messages_count > 0"
      class="ml-[20px] flex h-[21px] w-[21px] shrink-0 items-center justify-center rounded-[50%] bg-[#D9D9D9] text-[12px] font-medium text-white md:h-[24px] md:w-[24px] md:text-[13px] xl:h-[28px] xl:w-[28px] xl:text-[16px]"
      >{{ chat?.not_readable_client_messages_count }}</span
    >
  </button>
</template>

<style scoped></style>

<script setup lang="ts">
  const props = defineProps<{
    chat: Chat;
    active: boolean;
  }>();

  const titleChat = computed(
    () => props.chat?.companion[0]?.company?.title || props.chat?.companion[0]?.name
  );
</script>

<template>
  <button
    :class="
      cn(
        'flex items-center justify-between rounded-[20px] px-[15px] py-[10px] text-left duration-hover md:py-[14px] lg:hover:bg-[#e8e8e8]',
        {
          'bg-[#e8e8e8]': active,
        }
      )
    "
  >
    <UiIconCircleLetter class="shrink-0" :letter="titleChat[0]" />
    <div class="ml-[8px] w-[50%] flex-1 md:ml-[10px] xl:ml-[13px]">
      <h2
        class="inline-block w-full truncate text-[14px] font-medium leading-[120%] text-black md:text-[16px]"
      >
        {{ titleChat }}
      </h2>
      <h2
        class="mt-[5px] inline-block w-full truncate text-[14px] font-medium leading-[120%] text-[#B6B6B6] md:text-[16px]"
      >
        {{ chat?.last_message?.content }}
      </h2>
    </div>
    <span
      v-if="chat?.not_readable_messages_count > 0"
      class="ml-[20px] flex h-[21px] w-[21px] shrink-0 items-center justify-center rounded-[50%] bg-[#D9D9D9] text-[12px] font-medium text-white md:h-[24px] md:w-[24px] md:text-[13px] xl:h-[28px] xl:w-[28px] xl:text-[16px]"
      >{{ chat?.not_readable_messages_count }}</span
    >
  </button>
</template>

<style scoped></style>

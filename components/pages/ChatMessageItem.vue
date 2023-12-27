<script setup lang="ts">
  defineProps<{
    user?: boolean;
    message: MessageChat;
  }>();
</script>

<template>
  <div :class="{ 'text-right': user }">
    <div
      :class="
        cn(
          'relative mb-[5px] ml-[7px] inline-block max-w-[70%] rounded-[5px] bg-[#535353] p-[8px] md:rounded-[10px] md:p-[10px] xl:p-[12px]',
          {
            '!ml-[0px] mr-[7px] !bg-[#D9D9D9]': user,
          }
        )
      "
    >
      <span
        :class="
          cn('triangle_el', {
            '!left-auto right-[-11px] !rotate-[14deg] !border-l-[#D9D9D9]': user,
          })
        "
      />
      <p
        v-if="message.type === 'text'"
        :class="
          cn(
            'relative z-40 break-words  text-left text-[7px] font-medium text-white md:text-[10px] xl:text-[14px]',
            {
              '!text-black': user,
            }
          )
        "
      >
        {{ message.content }}
      </p>
      <UiImageOpening
        v-if="message.type === 'image'"
        class="max-h-[100px] max-w-[80px]"
        :image="message.content"
      />
      <NuxtLink
        v-if="message.type === 'file'"
        target="blank"
        :class="
          cn(
            'relative z-40 break-words text-left text-[7px] font-medium text-white hover:underline md:text-[10px] xl:text-[14px]',
            {
              '!text-black': user,
            }
          )
        "
        :to="message.content"
        >{{ $t('file') }}</NuxtLink
      >
    </div>
  </div>
</template>

<style scoped>
  .triangle_el {
    background: transparent;
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 20px solid #535353;
    border-top: 20px solid transparent;
    bottom: -1px;
    transform: rotate(-102deg);
    left: -8px;
  }
</style>

<script setup lang="ts"></script>

<template>
  <UTabs
    :ui="{
      list: {
        base: 'bg-transparent w-auto gap-[25px] md:gap-[30px] 4xl:gap-[50px]',
        marker: {
          background: 'bg-black',
          base: 'h-[1px]',
          wrapper: '!top-[100%]',
          rounded: 'rounded-none',
        },
        tab: {
          base: 'text-[17px] md:text-[24px] flex-0 4xl:text-[30px] text-black text-left ui-focus-visible:ring-0',
          inactive: '!text-[#B6B6B6]',
          padding: '!p-0',
        },
      },
    }"
  />
</template>

<style scoped></style>

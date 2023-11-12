<script setup lang="ts"></script>

<template>
  <UiButtonOutline
    styles="px-[28px] py-[10px] md:px-[38px] md:py-[12px] 2xl:px-[54px] 2xl:py-[17px]"
  >
    <span class="flex items-center gap-[7px] leading-[inherit] md:gap-[10px]">
      <SvgoEnvelop
        class="h-[10px] w-[13px] text-black transition-colors duration-100 ease-in group-hover:text-white md:h-[13px] md:w-[17px] 2xl:h-[15px] 2xl:w-[19px]"
        :fontControlled="false"
      />
      <slot />
    </span>
  </UiButtonOutline>
</template>

<style></style>

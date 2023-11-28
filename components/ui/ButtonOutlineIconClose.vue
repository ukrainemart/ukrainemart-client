<script setup lang="ts"></script>

<template>
  <UiButtonOutline
    styles="px-[17px] text-[10px] md:text-[12px] 4xl:text-[16px] md:px-[21px] md:py-[11px]"
  >
    <span class="fill_revert_layer flex items-center gap-x-[20px] md:gap-x-[35px] 4xl:gap-x-[50px]">
      <slot />
      <UiCloseIcon
        styles="h-[6px] w-[6px] transition-colors before:w-px after:w-px md:after:w-[2px] md:before:w-[2px] duration-100 ease-in group group-hover:after:bg-white group-hover:before:bg-white md:h-2.5 md:w-2.5"
      />
      <!-- <SvgoClose
        class="h-[6px] w-[6px] stroke-black transition-colors duration-100 ease-in group-hover:stroke-white md:h-2.5 md:w-2.5"
        :fontControlled="false"
      /> -->
    </span>
  </UiButtonOutline>
</template>

<style></style>

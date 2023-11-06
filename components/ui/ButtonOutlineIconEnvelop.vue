<script setup lang="ts"></script>

<template>
  <UiButtonOutline>
    <span class="flex items-center gap-[7px] md:gap-[10px]">
      <SvgoEnvelop
        class="h-[10px] w-[13px] text-black transition-colors duration-100 ease-in group-hover:text-white"
        :fontControlled="false"
      />
      <slot />
    </span>
  </UiButtonOutline>
</template>

<style></style>

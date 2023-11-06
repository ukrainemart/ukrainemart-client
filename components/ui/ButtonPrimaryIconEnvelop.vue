<script setup lang="ts"></script>

<template>
  <UiButtonPrimary>
    <span class="flex items-center gap-[7px] md:gap-[10px]">
      <SvgoEnvelop
        class="h-[10px] w-[13px] text-white transition-colors duration-100 ease-in group-hover:text-black"
        :fontControlled="false"
      />
      <slot />
    </span>
  </UiButtonPrimary>
</template>

<style></style>

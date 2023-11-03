<script setup lang="ts"></script>

<template>
  <UiButtonText>
    <span class="flex items-center gap-[5px] md:gap-[7px] lg:gap-[10px]">
      <slot />
      <SvgoArrowDown
        class="h-1 w-2 text-transparent md:h-[5px] md:w-[10px] lg:h-[6px] lg:w-3"
        :fontControlled="false"
      />
    </span>
  </UiButtonText>
</template>

<style></style>

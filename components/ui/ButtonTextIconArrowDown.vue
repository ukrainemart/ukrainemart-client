<script setup lang="ts"></script>

<template>
  <UiButtonText>
    <span class="flex items-center gap-[5px] md:gap-[7px] 4xl:gap-[10px]">
      <slot />
      <SvgoArrowDown
        class="h-1 w-2 text-transparent md:h-[5px] md:w-[10px] 4xl:h-[6px] 4xl:w-3"
        :fontControlled="false"
      />
    </span>
  </UiButtonText>
</template>

<style></style>

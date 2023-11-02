<script setup lang="ts"></script>

<template>
  <UiButtonOpacityTextIcon class="text-left">
    <template #title>
      <span class="lg:text-[16px]">
        <slot name="title" />
      </span>
    </template>
    <template #icon>
      <span class="h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]">
        <slot name="icon" />
      </span>
    </template>
  </UiButtonOpacityTextIcon>
</template>

<style scoped></style>

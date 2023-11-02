<script setup lang="ts"></script>

<template>
  <UiButtonOpacityTextIcon class="grow-1 text-left">
    <template #title>
      <span class="lg:text-[16px]">
        <slot name="title"></slot>
      </span>
    </template>
    <template #icon>
      <span class="h-[30px] w-[30px] lg:h-[40px] lg:w-[40px]"><slot name="icon"></slot> </span>
    </template>
  </UiButtonOpacityTextIcon>
</template>

<style scoped></style>

<script setup lang="ts"></script>

<template>
  <UiButtonOpacity class="flex items-center gap-[10px]">
    <slot name="icon"></slot>
    <UiTextPortalPrimary>
      <slot name="title"></slot>
    </UiTextPortalPrimary>
  </UiButtonOpacity>
</template>

<style scoped></style>

<script setup lang="ts"></script>

<template>
  <UiButtonOpacity class="flex items-center gap-[10px]">
    <slot name="icon" />
    <UiTextPortalPrimary>
      <slot name="title" />
    </UiTextPortalPrimary>
  </UiButtonOpacity>
</template>

<style scoped></style>

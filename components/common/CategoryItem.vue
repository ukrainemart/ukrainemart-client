<script setup lang="ts"></script>

<template>
  <UiButtonOpacityIcon>
    <template #title> <slot name="title"></slot> </template>
    <template #icon>
      <span class=""><slot name="icon"></slot> </span
    ></template>
  </UiButtonOpacityIcon>
</template>

<style scoped></style>

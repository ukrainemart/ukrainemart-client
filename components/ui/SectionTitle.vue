<script setup lang="ts"></script>

<template>
  <UiSection>
    <template #title>
      <CommonTitleSectionXl class="flex-1"><slot name="title"></slot></CommonTitleSectionXl>
    </template>
    <template #additional_elements>
      <slot name="additional_elements"></slot>
    </template>
    <template #content> <slot name="content"></slot> </template
  ></UiSection>
</template>

<style scoped></style>

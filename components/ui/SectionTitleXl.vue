<script setup lang="ts"></script>

<template>
  <UiSection class="">
    <template #title>
      <CommonTitleSectionXl><slot name="title"></slot></CommonTitleSectionXl>
    </template>
    <template #additional_elements>
      <slot name="additional_elements"></slot>
    </template>
    <template #content> <slot name="content"></slot> </template
  ></UiSection>
</template>

<style scoped></style>

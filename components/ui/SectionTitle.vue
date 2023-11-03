<script setup lang="ts"></script>

<template>
  <UiSection>
    <template #title>
      <CommonTitleSectionXl class="flex-1 mb-[20px] md:mb-[30px] 4xl:mb-[40px]">
        <slot name="title" />
      </CommonTitleSectionXl>
    </template>
    <template #additional_elements>
      <slot name="additional_elements" />
    </template>
    <template #content>
      <slot name="content" />
    </template>
  </UiSection>
</template>

<style scoped></style>

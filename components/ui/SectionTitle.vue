<script setup lang="ts"></script>

<template>
  <UiSection>
    <template #title>
      <CommonTitleSection class="mb-[20px] flex-1 md:mb-[30px] 4xl:mb-[40px]">
        <slot name="title" />
      </CommonTitleSection>
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

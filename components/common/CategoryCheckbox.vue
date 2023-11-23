<script setup lang="ts">
  defineProps<{
    htmlFor: string;
    label: string;
  }>();
</script>

<template>
  <UiLabel
    :htmlFor="htmlFor"
    :label="label"
    styles="flex-row-reverse w-fit justify-end items-center text-black text-[10px] md:text-[12px] gap-[7px] 4xl:text-[16px]"
  >
    <!-- TODO use value from api -->
    <UiCheckbox
      :id="htmlFor"
      :model-value="true"
      :ui="{ base: 'h-[12px] w-[12px] md:h-[13px] md:w-[13px] 4xl:h-[16px] 4xl:w-[16px]' }"
    />
  </UiLabel>
</template>

<style></style>

<script setup lang="ts">
  defineProps<{
    title: string;
    to?: string;
  }>();
</script>

<template>
  <UiButtonOpacityTextIcon :to="to" class="text-left">
    <template #title>
      <span class="lg:text-[14px] 3xl:text-[18px]">
        {{ title }}
      </span>
    </template>
    <template #icon>
      <span class="h-[30px] w-[30px] lg:h-[20px] lg:w-[20px] 2xl:h-[40px] 2xl:w-[40px]">
        <slot />
      </span>
    </template>
  </UiButtonOpacityTextIcon>
</template>

<style scoped></style>

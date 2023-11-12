<script setup lang="ts">
  defineProps<{
    label: string;
  }>();
</script>

<template>
  <UiButtonOpacity class="flex flex-col items-center gap-[3px]">
    <span class="h-[22px] w-[22px] text-black">
      <slot />
    </span>
    <span class="text-[7px] font-medium text-black md:text-[10px]">{{ label }}</span>
  </UiButtonOpacity>
</template>

<style scoped />

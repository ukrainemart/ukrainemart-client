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
    <span class="text-[10px] font-medium text-black">{{ label }}</span>
  </UiButtonOpacity>
</template>

<style scoped />

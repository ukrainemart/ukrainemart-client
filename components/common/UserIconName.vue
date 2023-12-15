<script setup lang="ts">
  defineProps<{
    name: string;
  }>();
</script>

<template>
  <div class="flex items-center gap-[6px] md:gap-[8px] xl:gap-[10px]">
    <UiIconCircleLetter :letter="name[0]" />
    <p class="text-[12px] font-medium md:text-[16px] xl:text-[20px]">{{ name }}</p>
  </div>
</template>

<style scoped></style>

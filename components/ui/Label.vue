<script setup lang="ts">
  defineProps<{
    label: string;
  }>();
</script>

<template>
  <label
    class="flex flex-col gap-[5px] text-[7px] font-medium text-status_gray md:gap-[7px] md:text-[10px] 4xl:gap-[10px] 4xl:text-[14px]"
    for=""
  >
    <p class="shrink-0 truncate">
      {{ label }}
    </p>
    <slot />
  </label>
</template>

<style scoped></style>

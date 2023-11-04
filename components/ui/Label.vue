<script setup lang="ts">
  defineProps<{
    label: string;
  }>();
</script>

<template>
  <label
    class="flex flex-col gap-[5px] truncate text-[7px] font-medium text-black md:gap-[7px] md:text-[10px] 4xl:gap-[10px] 4xl:text-[14px]"
    for=""
  >
    <p>
      {{ label }}
    </p>
    <slot />
  </label>
</template>

<style scoped></style>

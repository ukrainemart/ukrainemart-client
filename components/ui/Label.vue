<script setup lang="ts">
  defineProps<{
    label: string;
    htmlFor: string;
    styles?: string;
  }>();
</script>

<template>
  <label
    :class="
      cn(
        'flex cursor-pointer flex-col gap-[5px] text-[7px] font-medium text-status_gray md:gap-[7px] md:text-[10px] 4xl:gap-[10px] 4xl:text-[14px]',
        styles
      )
    "
    :for="htmlFor"
  >
    <p class="shrink-0 truncate">
      {{ label }}
    </p>
    <slot />
  </label>
</template>

<style scoped></style>

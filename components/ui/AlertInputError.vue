<script setup lang="ts">
  defineProps<{
    error: string;
  }>();
</script>

<template>
  <p v-if="error" class="text-[7px] font-medium text-status_red md:text-[9px] xl:text-[14px]">
    {{ $t(`${error}`) }}
  </p>
</template>

<style scoped></style>

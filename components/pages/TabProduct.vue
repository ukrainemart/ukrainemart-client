<script setup lang="ts">
  defineProps<{
    content: any;
  }>();
</script>

<template>
  <UiTextPortalPrimary class="leading-[15px] md:leading-[20px] 2xl:leading-[24px]">
    {{ content }}
  </UiTextPortalPrimary>
</template>

<style></style>

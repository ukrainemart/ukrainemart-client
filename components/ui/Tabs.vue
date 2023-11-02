<script setup lang="ts">
  defineProps<{
    items: any[]
  }>();
</script>

<template>
  <UTabs :items="items" />
</template>

<style scoped></style>

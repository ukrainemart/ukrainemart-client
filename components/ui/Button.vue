<script setup lang="ts">
  defineProps<{
    to?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
  }>();
</script>

<template>
  <nuxtLink v-if="to" :to="to">
    <slot />
  </nuxtLink>
  <button v-else :type="type || 'button'"><slot /></button>
</template>

<style scoped></style>

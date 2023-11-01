<script setup lang="ts">
  defineProps<{
    to?: string;
  }>();
</script>

<template>
  <nuxtLink v-if="to" :to="to" class="cursor-pointer text-black duration-hover hover:opacity-hover">
    <slot />
  </nuxtLink>
  <button v-else class="cursor-pointer text-black duration-hover hover:opacity-hover">
    <slot />
  </button>
</template>

<style scoped></style>

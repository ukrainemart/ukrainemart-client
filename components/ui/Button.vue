<script setup lang="ts">
  defineProps<{
    to?: string;
    type?: 'button' | 'submit' | 'reset' | undefined;
  }>();
</script>

<template>
  <nuxtLink v-if="to" :to="to" class="cursor-pointer text-black duration-hover hover:opacity-hover">
    <slot />
  </nuxtLink>
  <button v-else :type="type || 'button'"><slot /></button>
</template>

<style scoped></style>

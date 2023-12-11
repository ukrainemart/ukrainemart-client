<script setup lang="ts">
  defineProps<{
    isSearchModal: boolean;
    toggleSearchModal: () => void;
  }>();
</script>

<template>
  <UModal
    :ui="{
      wrapper: 'z-[150]',
      container: 'w-full !items-start',
      background: 'bg-transparent',
      shadow: 'shadow-none',
      margin: '!m-5 md:!mx-10 md:!my-[30px]',
      padding: 'p-0',
      rounded: 'rounded-none',
      overlay: {
        background: 'bg-black/30',
      },
    }"
  >
    <CommonSearch :isSearchModal="isSearchModal" :toggleSearchModal="toggleSearchModal" />
  </UModal>
</template>

<style></style>

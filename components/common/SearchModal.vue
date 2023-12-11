<script setup lang="ts"></script>

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
    <CommonSearch />
  </UModal>
</template>

<style></style>

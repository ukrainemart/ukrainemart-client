<script setup lang="ts">
  defineProps<{
    styles?: string;
  }>();
</script>

<template>
  <NuxtLink
    to="/"
    :class="
      cn(
        'font-namu text-[20px] font-light leading-[24px] text-black md:text-[27px] md:leading-[32px] lg:text-[35px] lg:leading-[42px]',
        styles
      )
    "
  >
    Ukrainemart
  </NuxtLink>
</template>

<style></style>

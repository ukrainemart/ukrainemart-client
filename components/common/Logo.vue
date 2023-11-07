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
        'font-namu text-[20px] font-light leading-[24px] text-black 2xl:text-[27px] 2xl:leading-[32px] 4xl:text-[35px] 4xl:leading-[42px]',
        styles
      )
    "
  >
    Ukrainemart
  </NuxtLink>
</template>

<style></style>

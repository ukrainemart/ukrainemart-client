<script setup lang="ts">
  defineProps<{
    product: Product;
  }>();
</script>

<template>
  <UiTextPortalPrimary class="leading-[15px] md:leading-[20px] 2xl:leading-[24px]">
    description
    <!-- {{ useMultiLang(product, 'description') }}
    {{ console.log(product, 'tab') }} -->
  </UiTextPortalPrimary>
</template>

<style></style>

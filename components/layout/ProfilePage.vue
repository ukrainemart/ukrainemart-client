<script setup lang="ts">
  defineProps<{
    title: string;
  }>();
</script>

<template>
  <div class="lg:pt-[30px]">
    <CommonTitleProfilePage class="mb-[20px] md:mb-[30px] xl:mb-[40px]">
      {{ title }}
    </CommonTitleProfilePage>
    <slot />
  </div>
</template>

<style scoped></style>

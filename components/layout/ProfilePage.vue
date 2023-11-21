<script setup lang="ts">
  defineProps<{
    title: string;
  }>();
</script>

<template>
  <div class="">
    <CommonTitleProfilePage class="mb-[20px] md:mb-[30px] xl:mb-[40px]">
      {{ title }}
    </CommonTitleProfilePage>
    <slot />
  </div>
</template>

<style scoped></style>

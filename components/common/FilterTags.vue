<script setup lang="ts">
  const tags: any = [];
</script>

<template>
  <div class="flex flex-wrap gap-2.5 md:gap-5 4xl:gap-[30px]">
    <UiButtonOutlineIconClose v-for="tag in tags" :key="tag.id">
      {{ tag.title }}
    </UiButtonOutlineIconClose>
  </div>
</template>

<style></style>

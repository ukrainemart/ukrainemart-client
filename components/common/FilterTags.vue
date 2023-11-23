<script setup lang="ts">
  const tags = [
    { id: 1, title: 'tag1' },
    { id: 2, title: 'tag2tag2tag2tag2tag2tag2' },
    { id: 3, title: 'tag3' },
    { id: 4, title: 'tag4tag4tag4' },
    { id: 5, title: 'tag5tag5' },
  ];
</script>

<template>
  <div class="flex flex-wrap gap-2.5 md:gap-5 4xl:gap-[30px]">
    <UiButtonOutlineIconClose v-for="tag in tags" :key="tag.id">
      {{ tag.title }}
    </UiButtonOutlineIconClose>
  </div>
</template>

<style></style>

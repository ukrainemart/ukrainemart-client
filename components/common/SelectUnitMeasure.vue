<script setup lang="ts">
  const unitOptions: any = inject('unitOptions');
</script>

<template>
  <UiSelectOutline
    :options="unitOptions"
    class="relative z-[60] max-w-[90px] md:max-w-[110px]"
    value-attribute="id"
    option-attribute="title"
  />
</template>

<style scoped></style>

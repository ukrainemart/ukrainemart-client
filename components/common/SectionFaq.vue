<script setup lang="ts">
  import AccordionFaqExporters from '../pages/AccordionFaqExporters.vue';
  import AccordionFaqImporters from '../pages/AccordionFaqImporters.vue';

  const items = [
    {
      label: 'Для експортерів',
      content: AccordionFaqExporters,
    },
    {
      label: 'Для імпортерів',
      content: AccordionFaqImporters,
    },
  ];
</script>

<template>
  <UiSectionTitle
    class="bg-white pb-[25px] pt-[20px] md:pb-[35px] md:pt-[30px] 4xl:pb-[50px] 4xl:pt-[45px]"
  >
    <template #title> Питання і відповіді </template>
    <template #content>
      <UiTabs :items="items" class="mt-[20px] md:mt-[25px] 4xl:mt-[40px]" />
    </template>
  </UiSectionTitle>
</template>

<style scoped></style>

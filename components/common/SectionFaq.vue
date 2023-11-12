<script setup lang="ts">
  import AccordionFaqExporters from '../pages/AccordionFaqExporters.vue';
  import AccordionFaqImporters from '../pages/AccordionFaqImporters.vue';

  const { t } = useI18n();

  const items = [
    {
      label: t('forExporters'),
      content: AccordionFaqExporters,
    },
    {
      label: t('forImporters'),
      content: AccordionFaqImporters,
    },
  ];
</script>

<template>
  <UiSectionTitle
    class="bg-white pb-[25px] pt-[20px] md:pb-[35px] md:pt-[30px] 4xl:pb-[50px] 4xl:pt-[45px]"
  >
    <template #title>
      {{ $t('faq') }}
    </template>
    <template #content>
      <UiTabs :items="items" class="" />
    </template>
  </UiSectionTitle>
</template>

<style scoped></style>

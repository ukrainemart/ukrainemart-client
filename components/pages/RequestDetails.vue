<script setup lang="ts">
  import TabTemplateTest from '../ui/TabTemplateText.vue';

  const { t } = useI18n();
  const props = defineProps<{
    request: RequestImporter;
  }>();

  const items = computed(() => [
    {
      label: t('labels.more_information_about_request'),
      content: TabTemplateTest,
      data: props.request?.description,
    },
    {
      label: t('labels.more_about_importer'),
      content: TabTemplateTest,
      data: props.request?.company?.description,
    },
  ]);
</script>

<template>
  <UiTabs
    :items="items"
    :ui="{
      wrapper: 'overflow-hidden mb-[25px] text-[12px] md:mb-[100px] md:text-[16px]',
    }"
  />
</template>

<style></style>

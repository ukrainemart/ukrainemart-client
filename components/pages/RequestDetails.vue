<script setup lang="ts">
  import TabTemplateTest from '../ui/TabTemplateText.vue';

  const { t } = useI18n();
  const props = defineProps<{
    request: RequestImporter;
  }>();

  const items = computed(() => [
    {
      id: 1,
      label: t('labels.more_information_about_request'),
      content: TabTemplateTest,
      data: props.request?.description,
    },
    {
      id: 2,
      label: t('labels.more_about_importer'),
      content: TabTemplateTest,
      data: props.request?.company?.description,
    },
  ]);

  const hideItems = computed(() => {
    if (props.request?.company) {
      return items.value;
    }
    return items.value.filter((el) => el.id !== 2);
  });
</script>

<template>
  <UiTabs
    :items="hideItems"
    :ui="{
      wrapper: 'overflow-hidden mb-[25px] text-[12px] md:mb-[100px] md:text-[16px]',
    }"
  />
</template>

<style></style>

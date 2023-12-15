<script setup lang="ts">
  const { t } = useI18n();

  const chatOptions = computed(() => {
    return [
      {
        id: 'for_sale',
        title: t('labels.for_sale'),
      },
      {
        id: 'buying',
        title: t('labels.buying'),
      },
    ];
  });
</script>

<template>
  <UiSwitcher :options="chatOptions" />
</template>

<style scoped></style>

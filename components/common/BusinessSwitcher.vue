<script setup lang="ts">
  const props = defineProps<{
    currentValue: 'for_sale' | 'buying';
  }>();

  const business = useCookie('business');

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

  const setCookie = () => {
    business.value = props.currentValue;
  };

  watchDeep(
    () => props.currentValue,
    () => {
      setCookie();
    }
  );
</script>

<template>
  <UiSwitcher :options="chatOptions" />
</template>

<style scoped></style>

<script setup lang="ts">
  const value = ref('');

  const unitOptions: any = inject('unitOptions');
  const currentUnitId: any = inject('currentUnitId');
  const changeCurrentUnit: any = inject('changeCurrentUnit');

  watch(value, () => {
    changeCurrentUnit(value.value);
  });
  const getCurrentUnit = computed(() => {
    const current = unitOptions.value?.find((el: any) => el.id === +currentUnitId.value) || '';
    return current.title;
  });

  watchDeep(
    () => getCurrentUnit.value,
    () => {
      value.value = currentUnitId.value;
    }
  );
</script>

<template>
  <UiSelectOutline
    v-model="value"
    :placeholder="$t('placeholders.unit')"
    :options="unitOptions"
    :currentValue="getCurrentUnit"
    class="relative z-[60] max-w-[90px] md:max-w-[110px]"
    value-attribute="id"
    option-attribute="title"
  />
</template>

<style scoped></style>

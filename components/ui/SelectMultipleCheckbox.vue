<script setup lang="ts">
  defineProps<{
    label: string;
  }>();
  const open = ref<boolean>(false);

  const people = [
    {
      id: 1,
      title: 'Wade Cooper',
    },
    {
      id: 2,
      title: 'Arlene Mccoy',
    },
    {
      id: 3,
      title: 'Devon Webb',
    },
    {
      id: 4,
      title: 'Tom Cook',
    },
  ];

  const selectedOptions = ref([1, 3]);

  const onOpenSelect = () => {
    open.value = true;
  };
  const onCloseSelect = () => {
    open.value = false;
  };
</script>

<template>
  <USelectMenu
    v-model="selectedOptions"
    class="relative w-fit"
    value-attribute="id"
    option-attribute="title"
    :uiMenu="{
      width: 'w-[182px] md:w-[219px] xl:w-[284px]',
      container: 'left-0',
      rounded: 'rounded-[15px]',
      base: 'scroll_bar',
      option: {
        selected: '!bg-red',
        active: '!bg-red',
        selectedIcon: {
          wrapper: 'hidden',
        },
      },
    }"
    :options="people"
    multiple
    placeholder="Select people"
    @open="onOpenSelect"
    @close="onCloseSelect"
  >
    <UiButtonTextOpeningArrow class="normal-case" :open="open" :label="label" />

    <template #option="{ option }">
      <UiCheckbox disabled class="w-full" :value="true" :label="option.title" />
    </template>
  </USelectMenu>
</template>

<style scoped></style>

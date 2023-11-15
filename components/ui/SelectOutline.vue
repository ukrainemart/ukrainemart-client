<script setup lang="ts">
  const people = [
    {
      id: 1,
      name: 'Wade',
    },
    {
      id: 2,
      name: 'Arlene',
    },
    {
      id: 3,
      name: 'Devon',
    },
    {
      id: 4,
      name: 'Tom Cook',
    },
  ];

  const selected = ref(people[0].id);

  const current = computed(() => people.find((person) => person.id === selected.value));
</script>

<template>
  <USelectMenu
    v-slot="{ open }"
    v-model="selected"
    :options="people"
    value-attribute="id"
    option-attribute="name"
    class="input_outline !p-0"
    :uiMenu="{
      background: 'bg-background-primary',
      container: '!top-0 !left-0 !transform-none',
      rounded: 'rounded-[10px] md:rounded-[20px]',
      padding: 'p-0',
      base: 'border border-black py-[5px] md:py-[10px] !pt-[30px] md:!pt-[40px]',
      option: {
        base: 'input_outline_text',
        padding: 'px-[9px] py-[7px] md:px-[14px] xl:px-[19px] xl:py-[10px]',
        active: 'bg-[#D9D9D9] rounded-none',
        selectedIcon: {
          base: 'hidden',
        },
      },
    }"
  >
    <UiButtonTextOpeningArrow
      class="input_outline_text input_outline_padding relative z-40 w-full justify-between !px-[9px] text-[7px] normal-case md:!px-[14px] xl:!px-[19px]"
      :label="current?.name"
      :open="open"
    />
  </USelectMenu>
</template>

<style scoped></style>

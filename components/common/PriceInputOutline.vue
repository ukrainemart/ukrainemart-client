<script setup lang="ts">
  defineProps<{
    modelValue?: string;
  }>();

  const emits = defineEmits(['update:modelValue']);

  const handleInput = (event: Event) => {
    const inputValue = (event.target as HTMLInputElement).value;
    emits('update:modelValue', inputValue);
  };

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
      name: 'Tom',
    },
  ];

  const selected = ref(people[0].id);

  const current = computed(() => people.find((person) => person.id === selected.value));
</script>

<template>
  <div class="input_outline flex items-center !p-0">
    <input
      :value="modelValue"
      type="number"
      class="input_without_arrow input_outline_padding w-full basis-full bg-transparent focus:outline-none"
      @input="handleInput"
    />
    <USelectMenu
      v-slot="{ open }"
      v-model="selected"
      :options="people"
      value-attribute="id"
      option-attribute="name"
      class="h-full border-l border-black"
      :uiMenu="{
        background: 'bg-background-primary',
        padding: 'p-0',
        base: 'py-[5px] md:py-[10px]',
        option: {
          base: '',
          padding: 'px-[9px] py-[7px] md:px-[14px] xl:px-[19px] xl:py-[10px]',
          active: 'bg-[#D9D9D9] rounded-none',
          selectedIcon: {
            base: 'hidden',
          },
        },
      }"
    >
      <UiButtonTextOpeningArrow
        class="input_outline_padding normal-case 4xl:!text-[14px]"
        :label="current?.name"
        :open="open"
      />
    </USelectMenu>
  </div>
</template>

<style scoped></style>

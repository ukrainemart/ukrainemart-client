<script setup lang="ts">
  defineProps<{
    price: string;
  }>();
  // const valueInput = ref('');

  const currency = [
    // {
    //   value: 'UAH',
    //   name: 'UAH',
    // },
    {
      value: 'USD',
      name: 'USD',
    },
  ];

  const selected = ref(currency[0].value);

  const current = computed(() => currency.find((el) => el.value === selected.value));

  const emits = defineEmits(['update:price']);

  const handleInput = (event: any) => {
    const inputValue = (event.target as HTMLInputElement).value;
    emits('update:price', inputValue);
  };
</script>

<template>
  <div class="input_outline flex items-stretch !p-0">
    <input
      :value="price"
      placeholder="223.34"
      type="number"
      class="input_without_arrow input_outline_padding w-full basis-full bg-transparent focus:outline-none"
      @input="handleInput"
    />
    <USelectMenu
      v-slot="{ open }"
      v-model="selected"
      :options="currency"
      value-attribute="value"
      option-attribute="name"
      class="border-l border-black"
      :uiMenu="{
        background: 'bg-background-primary',
        padding: 'p-0',
        base: 'py-[5px] md:py-[10px]',
        option: {
          base: '',
          padding: 'px-[9px] py-[7px] md:px-[14px] xl:px-[19px] xl:py-[10px]',
          active: 'bg-status_dark_gray rounded-none',
          selectedIcon: {
            base: 'hidden',
          },
        },
      }"
    >
      <UiButtonTextOpeningArrow
        class="input_outline_padding input_outline_height normal-case 4xl:!text-[14px]"
        :label="current?.name"
        :open="open"
      />
    </USelectMenu>
  </div>
</template>

<style scoped></style>

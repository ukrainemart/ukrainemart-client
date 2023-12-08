<script setup lang="ts">
  defineProps<{
    currentValue: any;
    uiMenu?: any;
    placeholder?: string;
  }>();
</script>

<template>
  <USelectMenu
    v-slot="{ open }"
    class="input_outline !p-0"
    :uiMenu="{
      background: 'bg-background-primary',
      container: '!top-0 !left-0 !transform-none',
      rounded: 'rounded-[10px] md:rounded-[16px]',
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
      ...uiMenu,
    }"
  >
    <UiButtonTextOpeningArrow
      style="text-transform: inherit"
      class="input_outline_text input_outline_height relative z-40 w-full justify-between !px-[9px] text-[7px] normal-case md:!px-[14px] xl:!px-[19px]"
      :label="currentValue || placeholder"
      :open="open"
    />
  </USelectMenu>
</template>

<style scoped></style>

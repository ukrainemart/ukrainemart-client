<script setup lang="ts">
  defineProps<{
    items: any;
  }>();
</script>

<template>
  <UAccordion
    :ui="{
      wrapper: '',
      item: {
        base: 'font-medium text-[12px] md:text-[16px] 4xl:text-[20px]',
        color: 'text-black',
        padding: 'pt-[15px]',
      },
    }"
    :items="items"
  >
    <template #default="{ item, index, open }">
      <UiButtonOpacity
        class="flex w-full items-center justify-between border-b border-black py-[20px] text-left text-[16px] font-semibold md:text-[22px] 4xl:border-b-[2px] 4xl:py-[25px] 4xl:text-[27px]"
        :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }"
      >
        <span>{{ item.label }}</span>
        <UiIconOpeningCross :open="open" />
      </UiButtonOpacity>
    </template>
  </UAccordion>
</template>

<style scoped></style>

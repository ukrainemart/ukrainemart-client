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
        base: 'font-medium text-[12px] md:text-[16px] border-b border-black 4xl:text-[20px]',
        color: 'text-black',
        padding: 'pt-[15px]',
      },
    }"
    :items="items"
  >
    <template #default="{ item, open }">
      <UiButtonOpacity
        :class="
          cn(
            'flex w-full items-center justify-between  py-[20px] text-left text-[16px] font-semibold duration-0 md:text-[17px] 4xl:border-b-[2px] 4xl:py-[25px]',
            {
              'border-b border-black': !open,
            }
          )
        "
        :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }"
      >
        <span>{{ item.label }}</span>
        <UiIconOpeningCross :open="open" />
      </UiButtonOpacity>
    </template>
  </UAccordion>
</template>

<style scoped></style>

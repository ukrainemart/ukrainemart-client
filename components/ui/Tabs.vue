<script setup lang="ts">
  defineProps<{
    items: any;
    ui?: any;
  }>();
</script>

<template>
  <UTabs
    :items="items"
    :ui="{
      container: '!mt-[20px] md:!mt-[25px] 4xl:!mt-[38px]',
      list: {
        base: 'bg-transparent !w-fit gap-[25px] !p-0 !flex md:gap-[30px] 4xl:gap-[50px]',
        marker: {
          base: 'hidden',
        },
        tab: {
          base: 'text-[17px] md:text-[24px] relative w-fit flex-0 4xl:text-[30px] text-black text-left ui-focus-visible:ring-0',
          inactive: '!text-status_gray',
          padding: '!p-0',
          active:
            'before:absolute before:w-full before:h-px 3xl:before:h-[2px] before:bg-black before:bottom-[-5px] before:left-[10px]',
        },
      },
      ...ui,
    }"
  >
    <template #item="{ item }">
      <component :is="item.content" />
    </template>
  </UTabs>
</template>

<style scoped></style>

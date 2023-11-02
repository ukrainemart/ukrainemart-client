<script setup lang="ts">
  const items = [
    {
      label: 'Tab1',
      content: 'This is the content shown for Tab1',
    },
    {
      label: 'Tab2',
      disabled: true,
      content: 'And, this is the content for Tab2',
    },
    {
      label: 'Tab3',
      content: 'Finally, this is the content for Tab3',
    },
  ];
</script>

<template>
  <UiSectionTitle
    class="bg-white pb-[25px] pt-[20px] md:pb-[35px] md:pt-[30px] 4xl:pb-[50px] 4xl:pt-[45px]"
  >
    <template #title> Питання і відповіді </template>
    <template #content>
      <UiTabs :items="items" class="mt-[20px] md:mt-[25px] 4xl:mt-[40px]"></UiTabs>
    </template>
  </UiSectionTitle>
</template>

<style scoped></style>

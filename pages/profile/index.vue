<script setup lang="ts">
  definePageMeta({
    middleware: ['auth'],
  });
</script>

<template>
  <div class="container mb-[70px] grid grid-cols-12 items-start md:mb-[100px] xl:mb-[111px]">
    <div class="col-span-3 hidden border-r border-status_gray pr-[10px] lg:block xl:col-span-2">
      <CommonUserIconName name="Andriy Ivanov" />

      <CommonProfileMenuList class="mt-[10px] md:mt-[12px] xl:mt-[15px]" />
    </div>
    <div class="col-span-12 lg:col-span-9 lg:pl-[20px] lg:pt-[30px] xl:col-span-10 xl:pl-[40px]">
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped></style>

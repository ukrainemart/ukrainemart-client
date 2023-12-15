<script setup lang="ts">
  defineProps<{
    letter: string;
  }>();
</script>

<template>
  <div
    class="flex h-[34px] w-[34px] items-center justify-center rounded-[50%] bg-black md:h-[43px] md:w-[43px] xl:h-[50px] xl:w-[50px]"
  >
    <span
      class="shrink-0 text-[18px] font-medium uppercase text-white md:text-[22px] xl:text-[26px]"
      >{{ letter }}</span
    >
  </div>
</template>

<style scoped></style>

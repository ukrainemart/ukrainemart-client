<script setup lang="ts">
  defineProps<{
    name: string;
  }>();
</script>

<template>
  <div class="flex items-center gap-[6px] md:gap-[8px] xl:gap-[10px]">
    <div
      class="flex h-[34px] w-[34px] items-center justify-center rounded-[50%] bg-black md:h-[43px] md:w-[43px] xl:h-[50px] xl:w-[50px]"
    >
      <span
        class="shrink-0 text-[18px] font-medium uppercase text-white md:text-[22px] xl:text-[26px]"
        >{{ name[0] }}</span
      >
    </div>
    <p class="text-[12px] font-medium md:text-[16px] xl:text-[20px]">{{ name }}</p>
  </div>
</template>

<style scoped></style>

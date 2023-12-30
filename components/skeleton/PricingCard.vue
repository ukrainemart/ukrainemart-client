<script setup lang="ts"></script>

<template>
  <div class="rounded-[10px] bg-status_dark_gray px-[25px] py-[30px]">
    <UiSkeleton class="mb-[15px] h-[30px] w-[90%] md:mb-[25px]" />
    <UiSkeleton class="mb-[15px] h-[45px] w-[50%] md:mb-[25px]" />
    <div class="flex flex-col gap-[10px] md:gap-[15px] xl:gap-[20px]">
      <UiSkeleton class="h-[16px] w-[80%]" />
      <UiSkeleton class="h-[16px] w-[80%]" />
      <UiSkeleton class="h-[16px] w-[80%]" />
      <UiSkeleton class="h-[16px] w-[80%]" />
    </div>
    <UiSkeleton
      class="mb-[5px] mt-[15px] h-[30px] w-[100%] rounded-[25px] md:mt-[25px] md:h-[40px] xl:h-[50px]"
    />
  </div>
</template>

<style scoped></style>

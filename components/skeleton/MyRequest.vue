<script setup lang="ts"></script>

<template>
  <div
    class="col-span-12 grid grid-cols-2 rounded-[20px] bg-status_dark_gray px-[20px] py-[15px] md:col-span-6 md:p-[30px] xl:col-span-4"
  >
    <div class="col-span-1 flex items-center gap-[10px]">
      <UiSkeleton class="h-[16px] w-[21px] md:h-[23px] md:w-[29px] 4xl:h-[30px] 4xl:w-[36px]" />
      <UiSkeleton class="h-[10px] w-[60px] md:h-[15px] 4xl:h-[18px]" />
    </div>

    <div class="relative z-20 col-span-1 flex justify-end gap-[7px]">
      <UiSkeleton
        class="h-[25px] w-[25px] rounded-[50%] md:h-[30px] md:w-[30px] lg:h-[40px] lg:w-[40px]"
      />
      <UiSkeleton
        class="h-[25px] w-[25px] rounded-[50%] md:h-[30px] md:w-[30px] lg:h-[40px] lg:w-[40px]"
      />
    </div>

    <UiSkeleton class="col-span-2 mb-[7px] mt-2.5 h-[10px] w-[180px] md:h-[15px]" />
    <UiSkeleton class="col-span-2 h-[10px] w-[70px] md:h-[15px]" />

    <div
      class="col-span-2 mt-[15px] flex flex-col gap-[5px] md:mt-[20px] md:gap-[10px] 4xl:mt-[30px] 4xl:gap-[15px]"
    >
      <div class="flex gap-[7px]">
        <UiSkeleton class="h-[10px] w-[60px] md:h-[15px] 4xl:h-[18px]" />
        <UiSkeleton class="h-[10px] w-[60px] md:h-[15px] 4xl:h-[18px]" />
      </div>
      <div class="flex gap-[7px]">
        <UiSkeleton class="h-[10px] w-[60px] md:h-[15px] 4xl:h-[18px]" />
        <UiSkeleton class="h-[10px] w-[60px] md:h-[15px] 4xl:h-[18px]" />
      </div>
      <div class="flex gap-[7px]">
        <UiSkeleton class="h-[10px] w-[60px] md:h-[15px] 4xl:h-[18px]" />
        <UiSkeleton class="h-[10px] w-[60px] md:h-[15px] 4xl:h-[18px]" />
      </div>
    </div>
  </div>
</template>

<style></style>

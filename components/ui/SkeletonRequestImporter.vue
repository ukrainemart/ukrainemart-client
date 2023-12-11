<script setup lang="ts"></script>

<template>
  <div
    class="col-span-12 grid grid-cols-2 rounded-[20px] bg-[#D9D9D9] px-[20px] py-[15px] md:col-span-6 md:p-[30px] xl:col-span-4"
  >
    <div class="col-span-1 flex items-center gap-[10px]">
      <UiSkeleton
        class="h-[16px] w-[21px] md:h-[23px] md:w-[29px] 4xl:h-[30px] 4xl:w-[36px]"
        src="@img/flag_spain.png"
        alt="flag_spain"
      />
      <UiSkeleton class="h-[10px] w-[60px] md:h-[15px] 4xl:h-[18px]" />
    </div>
    <div class="relative z-20 col-span-1 flex justify-end gap-[7px]">
      <UiSkeleton class="h-[30px] w-[30px] rounded-[50%] md:h-[40px] md:w-[40px]" />
      <UiSkeleton class="h-[30px] w-[30px] rounded-[50%] md:h-[40px] md:w-[40px]" />
    </div>
    <h3
      class="col-span-2 mt-[5px] text-[17px] font-medium md:mt-[12px] md:text-[20px] 4xl:mt-[21px]"
    />
    <UiTextPortalPrimary class="col-span-2 mt-[10px] text-status_gray 4xl:mt-[15px]" />
    <div
      class="col-span-2 mt-[7px] flex flex-col gap-[5px] md:mt-[20px] md:gap-[10px] 4xl:mt-[30px] 4xl:gap-[15px]"
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

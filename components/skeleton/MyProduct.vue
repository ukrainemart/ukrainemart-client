<script setup lang="ts"></script>

<template>
  <div>
    <UiSkeleton
      class="mr-2.5 h-[75px] w-[60px] rounded-[5px] md:mr-5 md:h-[135px] md:w-[100px] md:rounded-[10px] lg:mr-10 lg:w-[110px] lg:rounded-[20px]"
    />
    <div class="flex flex-col">
      <UiSkeleton
        class="mb-[2px] h-[12px] w-[90px] md:mb-[5px] md:h-[17px] md:w-[126px] lg:mb-2.5"
      />
      <UiSkeleton class="h-[9px] w-[51px] md:mb-5 md:h-[12px] md:w-[72px] lg:mb-[25px]" />

      <UiSkeleton class="hidden md:block md:h-[17px] md:w-[152px]" />
      <UiSkeleton class="mt-auto hidden md:block md:h-[14px] md:w-[104px]" />
    </div>
    <!-- NUM_SKELETON_LINES -->
    <div class="flex flex-col gap-[5px] md:gap-[7px]">
      <UiSkeleton v-for="j in 4" :key="j" class="h-[13px] w-[117px] md:h-[20px] md:w-[190px]" />
    </div>

    <!-- The second row -->
    <UiSkeleton class="col-start-1 col-end-3 h-[12px] w-[111px] md:hidden" />
    <UiSkeleton class="h-[12px] w-[78px] justify-self-end md:hidden" />
  </div>
</template>

<style></style>

<script setup lang="ts"></script>

<template>
  <div class="grid max-w-[1000px] gap-[20px] md:grid-cols-2">
    <UiSkeleton
      class="col-span-2 mb-[50px] h-[30px] w-[70%] rounded-[5px] md:w-[40%] lg:w-[60%] xl:w-[30%]"
    />
    <UiSkeleton
      class="input_outline_height col-span-2 mb-[7px] h-[30px] rounded-[50px] md:col-span-1"
    />
    <UiSkeleton
      class="input_outline_height col-span-2 mb-[7px] h-[30px] rounded-[50px] md:col-span-1"
    />
    <UiSkeleton
      class="input_outline_height col-span-2 mb-[7px] h-[30px] rounded-[50px] md:col-span-1"
    />
    <UiSkeleton
      class="input_outline_height col-span-2 mb-[7px] h-[30px] rounded-[50px] md:col-span-1"
    />
    <UiSkeleton class="col-span-2 mb-[7px] h-[120px] rounded-[25px]" />
  </div>
</template>

<style scoped></style>

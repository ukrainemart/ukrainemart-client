<script setup lang="ts"></script>

<template>
  <div class="flex items-center gap-[10px] px-[15px] py-[10px] md:py-[14px]">
    <UiSkeleton
      class="h-[34px] w-[34px] rounded-[50%] md:h-[43px] md:w-[43px] xl:h-[50px] xl:w-[50px]"
    />
    <div>
      <UiSkeleton class="h-[15px] w-[150px]" />
      <UiSkeleton class="mt-[8px] h-[15px] w-[120px]" />
    </div>
  </div>
</template>

<style scoped></style>

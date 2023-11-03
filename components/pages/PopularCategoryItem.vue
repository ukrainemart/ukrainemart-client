<script setup lang="ts">
  defineProps<{
    image: string;
    altImage: string;
  }>();
</script>

<template>
  <div
    class="relative flex items-end overflow-hidden rounded-[8px] px-[15px] py-[30px] md:px-[25px] md:py-[35px] 4xl:px-[40px] 4xl:py-[50px]"
  >
    <img
      class="absolute left-0 top-0 h-full w-full object-cover"
      src="../../assets/images/metal.jpg"
      :alt="altImage"
    />
    <h2 class="relative z-10 text-[17px] text-white md:text-[24px] 4xl:text-[30px]">
      <slot></slot>
    </h2>
  </div>
</template>

<style scoped></style>

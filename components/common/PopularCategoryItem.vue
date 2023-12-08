<script setup lang="ts">
  defineProps<{
    image: string;
    altImage: string;
    link: string;
  }>();
</script>

<template>
  <div
    class="group relative flex items-end overflow-hidden rounded-[8px] px-[15px] py-[30px] md:px-[25px] md:py-[35px] 4xl:px-[40px] 4xl:py-[50px]"
  >
    <nuxt-link class="absolute left-0 top-0 z-50 h-full w-full" :to="link" />
    <div
      class="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-t from-black to-transparent"
    />
    <img
      class="absolute left-0 top-0 h-full w-full object-cover duration-hover group-hover:scale-125"
      :src="image"
      :alt="altImage"
    />
    <h2 class="relative z-10 text-[17px] text-white md:text-[24px] 4xl:text-[30px]">
      <slot />
    </h2>
  </div>
</template>

<style scoped></style>

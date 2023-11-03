<script setup lang="ts">
  defineProps<{
    open: boolean;
  }>();
</script>

<template>
  <span
    :class="
      cn(
        'relative block h-[12px] w-[12px] duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-[1px] before:w-full before:bg-black after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:m-auto after:h-[1px] after:w-full after:rotate-90 after:bg-black after:duration-200 md:h-[16px] md:w-[16px] 4xl:h-[20px] 4xl:w-[20px] 4xl:before:h-[2px] 4xl:after:h-[2px]',
        { 'after:rotate-0': open }
      )
    "
  ></span>
</template>

<style scoped></style>

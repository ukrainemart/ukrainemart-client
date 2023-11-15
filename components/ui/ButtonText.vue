<script setup lang="ts">
  type Props = {
    styles?: string; // Additional custom styles for the button
    to?: string;
  };

  withDefaults(defineProps<Props>(), {
    styles: '',
    to: '',
  });

  const defaultStyles =
    'flex items-center font-montserrat text-[12px] font-medium  text-black duration-hover ease-in focus:outline-none focus:outline-0 disabled:cursor-not-allowed md:text-[16px] 4xl:text-[20px]';
</script>

<template>
  <NuxtLink v-if="to" :to="to" type="button" :class="cn(defaultStyles, styles)">
    <slot />
  </NuxtLink>
  <button v-else type="button" :class="cn(defaultStyles, styles)">
    <slot />
  </button>
</template>

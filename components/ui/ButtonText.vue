<script setup lang="ts">
  type Props = {
    styles?: string; // Additional custom styles for the button
    to?: string;
  };

  withDefaults(defineProps<Props>(), {
    styles: '',
    to: '',
  });
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    type="button"
    :class="
      cn(
        'flex items-center font-montserrat text-[12px] font-medium leading-[14px] text-black duration-hover ease-in focus:outline-none disabled:cursor-not-allowed md:text-[16px] md:leading-[19px] 4xl:text-[20px] 4xl:leading-6',
        styles
      )
    "
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    type="button"
    :class="
      cn(
        'flex items-center font-montserrat text-[12px] font-medium leading-[15px] text-black duration-hover ease-in focus:outline-none disabled:cursor-not-allowed md:text-[16px] md:leading-[19px] 4xl:text-[20px] 4xl:leading-6',
        styles
      )
    "
  >
    <slot />
  </button>
</template>

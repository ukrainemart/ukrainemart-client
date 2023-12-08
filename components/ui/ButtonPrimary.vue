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
    'group inline-flex items-center justify-center gap-[9px] rounded-[50px] border border-solid border-black bg-black px-[27px] py-[7px] font-montserrat text-[12px] font-medium leading-4 text-white transition-colors duration-100 ease-in hover:bg-transparent hover:text-black focus:outline-none md:px-[33px] md:py-[9px] md:text-[16px] md:leading-[19px] 4xl:border-[2px] 4xl:px-[38px] 4xl:py-[11px] 4xl:text-[20px] 4xl:leading-6';
</script>

<template>
  <NuxtLink v-if="to" :to="to" type="button" :class="cn(defaultStyles, styles)">
    <slot />
  </NuxtLink>

  <button v-else type="button" :class="cn(defaultStyles, styles)">
    <slot />
  </button>
</template>

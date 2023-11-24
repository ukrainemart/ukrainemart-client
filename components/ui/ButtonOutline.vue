<script setup lang="ts">
  type Props = {
    styles?: string; // Additional custom styles for the button
    to?: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    styles: '',
    to: '',
  });

  const classes = computed(() =>
    cn(
      'group flex items-center justify-center gap-[9px] rounded-[50px] border border-solid border-black bg-transparent px-[27px] py-[7px] font-montserrat text-[12px] font-medium leading-4 text-black transition-colors duration-100 ease-in hover:bg-black hover:text-white focus:outline-none disabled:cursor-not-allowed md:px-[33px] md:py-[9px] md:text-[16px] md:leading-[19px] 4xl:border-[2px] 4xl:px-[38px] 4xl:py-[11px] 4xl:text-[20px] 4xl:leading-6',
      props.styles
    )
  );
</script>

<template>
  <nuxtLink v-if="to" :to="to" :class="classes">
    <slot />
  </nuxtLink>
  <button v-else type="button" :class="classes">
    <slot />
  </button>
</template>

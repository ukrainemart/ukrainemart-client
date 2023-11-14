<script setup lang="ts">
  defineProps<{
    to: string;
  }>();
  const route = useRoute();
</script>

<template>
  <UiButtonText
    :to="to"
    :class="
      cn(
        'py-[10px] text-left text-status_gray hover:text-black md:py-[12px] lg:max-w-[211px] xl:py-[15px] 3xl:!text-[17px]',
        { '!text-black': route.path === to }
      )
    "
  >
    <slot />
  </UiButtonText>
</template>

<style scoped></style>

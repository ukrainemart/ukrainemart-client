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
        'max-w-[211px] py-[10px] text-left text-status_gray hover:text-black md:py-[12px] xl:py-[15px]',
        { '!text-black': route.path === to }
      )
    "
    ><slot
  /></UiButtonText>
</template>

<style scoped></style>

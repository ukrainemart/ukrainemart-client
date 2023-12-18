<script setup lang="ts">
  defineProps<{
    label: string;
    active?: boolean;
  }>();
</script>

<template>
  <UiButtonOpacity
    :class="
      cn(
        'flex h-full min-w-[57px] flex-col items-center justify-center gap-[3px] border-b-[5px] border-transparent hover:!opacity-100 md:min-w-[82px] md:border-b-[6px]',
        {
          'border-black': active,
        }
      )
    "
  >
    <span class="h-[22px] w-[22px] text-black">
      <slot />
    </span>
    <span class="text-[7px] font-medium text-black md:text-[10px]">{{ label }}</span>
  </UiButtonOpacity>
</template>

<style scoped />

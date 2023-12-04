<script setup lang="ts">
  defineProps<{
    isActive?: boolean;
  }>();
</script>

<template>
  <button
    type="button"
    class="relative cursor-pointer before:absolute before:-inset-1 before:content-[''] md:before:-inset-2"
  >
    <UiCloseIcon v-if="isActive" styles="h-[18px] w-[18px] md:h-[23px] md:w-[23px]" />

    <SvgoBurger v-else :fontControlled="false" class="h-[18px] w-[18px] md:h-[18px] md:w-[27px]" />
  </button>
</template>

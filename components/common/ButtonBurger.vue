<script setup lang="ts">
  defineProps<{
    isActive?: boolean;
  }>();
</script>

<template>
  <button>
    <SvgoClose v-if="isActive" :fontControlled="false" class="h-[14px] w-[14px]" />
    <SvgoBurger v-if="!isActive" :fontControlled="false" class="h-[14px] w-[23px]" />
  </button>
</template>

<script setup lang="ts">
  defineProps<{
    isActive?: boolean;
  }>();
</script>

<template>
  <button>
    <CommonCloseIcon v-if="isActive" styles="h-[18px] w-[18px] md:h-[23px] md:w-[23px]" />
    <SvgoBurger
      v-if="!isActive"
      :fontControlled="false"
      class="h-[18px] w-[18px] md:h-[18px] md:w-[27px]"
    />
  </button>
</template>

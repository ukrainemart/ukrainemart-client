<script setup lang="ts">
  defineProps<{
    isActive?: boolean;
  }>();
</script>

<template>
  <button>
    <SvgoClose
      v-if="isActive"
      :fontControlled="false"
      class="h-[14px] w-[14px] md:h-[18px] md:w-[18px]"
    />
    <SvgoBurger
      v-if="!isActive"
      :fontControlled="false"
      class="h-[14px] w-[23px] md:h-[18px] md:w-[27px]"
    />
  </button>
</template>

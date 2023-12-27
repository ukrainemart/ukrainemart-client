<script setup lang="ts">
  defineProps<{
    loading?: boolean;
  }>();
</script>

<template>
  <UiButtonOpacity class="h-[16px] w-[17px] xl:h-[25px] xl:w-[26px]">
    <UiSpinner
      v-if="loading"
      role="status"
      classSvg="fill-black w-full h-full text-gray-600 group-hover:fill-white group-hover:text-gray-300"
      class="h-[16px] w-[16px] xl:h-[25px] xl:w-[25px]"
    />
    <SvgoSendArrow v-else class="!h-[full] !w-full" />
  </UiButtonOpacity>
</template>

<style scoped></style>

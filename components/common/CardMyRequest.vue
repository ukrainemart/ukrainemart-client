<script setup lang="ts">
  defineProps<{
    editLink?: string;
    requestLink?: string;
  }>();
</script>

<template>
  <CommonRequestImportersItem :requestLink="requestLink" noButton class="!bg-[#D9D9D9]">
    <template #buttons_action>
      <div class="flex justify-end gap-[10px] xl:gap-[15px]">
        <UiButtonOpacityEdit :to="editLink" />
        <UiButtonOpacityDelete />
      </div>
    </template>
  </CommonRequestImportersItem>
</template>

<style scoped></style>

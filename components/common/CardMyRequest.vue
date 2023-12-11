<script setup lang="ts">
  defineProps<{
    editLink?: string;
    requestLink?: string;
    request: RequestImporter;
  }>();
  const emits = defineEmits(['deleteAction']);
  const deleteAction = () => {
    emits('deleteAction');
  };
</script>

<template>
  <CommonRequestImportersItem
    :requestLink="requestLink"
    :request="request"
    noButton
    class="!bg-[#D9D9D9]"
  >
    <template #buttons_action>
      <div class="flex justify-end gap-[10px] xl:gap-[15px]">
        <UiButtonOpacityEdit :to="editLink" />
        <UiButtonOpacityDelete @click="deleteAction" />
      </div>
    </template>
  </CommonRequestImportersItem>
</template>

<style scoped></style>

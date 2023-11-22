<script setup lang="ts">
  defineProps<{
    isOpen: boolean;
    category: Category;
  }>();
</script>

<template>
  <UModal
    :ui="{
      wrapper: 'z-[150]',
      container: 'w-[280px] block',
      height: 'h-screen',
      margin: 'sm:m-0',
      padding: 'p-0',
      rounded: 'rounded-none',
    }"
  >
    <div class="px-5 py-[25px]">
      <div class="mb-[25px] flex items-center justify-between">
        <p class="text-[14px] font-medium">Фільтри</p>
        <button type="button" class="inline-flex">
          <CommonButtonBurger :isActive="true" />
        </button>
      </div>

      <PagesCategoryFilters :category="category" />
    </div>
  </UModal>
</template>

<style></style>

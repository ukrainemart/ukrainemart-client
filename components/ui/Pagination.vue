<script setup lang="ts">
  defineProps<{
    links: any[];
  }>();
</script>

<template>
  <UPagination
    :total="links.length"
    :page-count="1"
    :activeButton="{
      color: 'transparent',
      inactiveClass: ['pagination_item', 'pagination_item_active'],
    }"
    :inactiveButton="{
      color: 'transparent',
      inactiveClass: ['pagination_item', 'pagination_item_inactive'],
    }"
    :ui="{
      wrapper: 'justify-center',
    }"
  >
    <template #prev="{ onClick }">
      <UTooltip text="Previous page">
        <button class="rotate-180 p-[7.5px] md:p-2.5 lg:p-[12.5px]" @click="onClick">
          <SvgoArrowRightSecond
            :fontControlled="false"
            class="h-[5px] w-[18px] md:h-[6px] md:w-[22px] lg:h-[8px] lg:w-[25px]"
          />
        </button>
      </UTooltip>
    </template>

    <template #next="{ onClick }">
      <UTooltip text="Next page">
        <button class="p-[7.5px] md:p-2.5 lg:p-[12.5px]" @click="onClick">
          <SvgoArrowRightSecond
            :fontControlled="false"
            class="h-[5px] w-[18px] md:h-[6px] md:w-[22px] lg:h-[8px] lg:w-[25px]"
          />
        </button>
      </UTooltip>
    </template>
  </UPagination>
</template>

<style>
  .pagination_item {
    @apply p-[7.5px] text-[12px] shadow-none md:p-2.5 md:text-[14px] lg:p-[12.5px] lg:text-[16px];
  }

  .pagination_item_active {
    @apply text-black;
  }

  .pagination_item_inactive {
    @apply text-status_gray;
  }
</style>

<script setup lang="ts">
  defineProps<{
    label: string;
  }>();

  defineEmits(['toggleModal']);
</script>

<template>
  <UModal
    :ui="{
      wrapper: 'z-[150]',
      container: 'w-[280px] md:w-[350px] block',
      height: 'h-screen',
      margin: 'sm:m-0',
      padding: 'p-0',
      rounded: 'rounded-none',
      overlay: {
        background: 'bg-black/30',
      },
    }"
  >
    <div class="px-5 py-[25px] md:px-10 md:py-[30px]">
      <div class="mb-[25px] flex items-center justify-between md:mb-[30px]">
        <p class="text-[14px] font-medium md:text-[18px]">
          {{ label }}
        </p>

        <CommonButtonBurger :isActive="true" class="inline-flex" @click="$emit('toggleModal')" />
      </div>

      <slot />
    </div>
  </UModal>
</template>

<style></style>

<script setup lang="ts">
  defineProps<{
    ui?: object;
  }>();

  const emits = defineEmits(['closeModal', 'confirm']);

  const closeModal = () => {
    emits('closeModal');
  };

  const confirm = () => {
    emits('confirm');
  };
</script>

<template>
  <UiModal :ui="{ ...ui, width: '!max-w-[414px]' }">
    <div class="flex flex-col items-center">
      <div
        class="flex h-[20px] w-[20px] items-center justify-center rounded-[50%] border border-status_red text-[15px] text-status_red md:h-[30px] md:w-[30px]"
      >
        <span>!</span>
      </div>
      <p class="mt-[15px] text-center text-[15px] font-medium md:mt-[15px] md:text-[20px]">
        <slot />
      </p>
      <div class="mt-[20px] flex justify-center gap-[20px] self-stretch">
        <UiButtonOutline @click="confirm">Так</UiButtonOutline>
        <UiButtonOutline
          class="w-full max-w-[115px] bg-black text-white hover:bg-transparent hover:text-black hover:!opacity-100"
          @click="closeModal"
          >Ні
        </UiButtonOutline>
      </div>
    </div>
  </UiModal>
</template>

<style scoped></style>

<script setup lang="ts">
  defineProps<{
    accept?: string;
  }>();

  const emits = defineEmits(['updateInput']);

  const updateInput = (value: any) => {
    emits('updateInput', value);
  };
</script>

<template>
  <div
    class="non_draggable relative h-0 basis-[25%] overflow-hidden rounded-[3px] bg-status_dark_gray pt-[100%] md:rounded-[5px] xl:rounded-[10px]"
  >
    <label class="absolute left-0 top-0 z-50 h-full w-full cursor-pointer">
      <UiInputFile :accept="accept" class="invisible h-full w-full" @updateInput="updateInput" />
    </label>

    <div
      class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-[5px] xl:gap-[10px]"
    >
      <span
        class="relative h-[12px] w-[12px] before:absolute before:inset-0 before:m-auto before:h-[100%] before:w-[1px] before:bg-black after:absolute after:inset-0 after:m-auto after:h-[100%] after:w-[1px] after:rotate-[90deg] after:bg-black md:h-[16px] md:w-[16px] xl:h-[20px] xl:w-[20px]"
      />
      <p class="text_xs text-center font-medium"><slot /></p>
    </div>
  </div>
</template>

<style scoped></style>

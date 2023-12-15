<script setup lang="ts">
  defineProps<{
    options: SelectOption[];
    modelValue?: string;
  }>();

  const emits = defineEmits(['update:modelValue']);

  const handleInput = (value: string) => {
    emits('update:modelValue', value);
  };
</script>

<template>
  <div
    class="relative flex w-fit overflow-hidden rounded-[5px] border border-black md:rounded-[7px] xl:rounded-[10px]"
  >
    <span
      :class="
        cn(
          'absolute top-0 h-full w-[50%] rounded-[3px] bg-black duration-200 md:rounded-[5px] xl:rounded-[7px]',
          {
            'translate-x-[100%]': modelValue === options[1].id,
          }
        )
      "
    />
    <UiButton
      v-for="option in options"
      :key="option.id"
      :class="
        cn(
          'text_xs relative z-10 px-[9px] py-[5px] text-black md:px-[10px] md:py-[8px] xl:px-[12px] xl:py-[10px]',
          {
            'text-white': modelValue === option.id,
          }
        )
      "
      @click="handleInput(option.id)"
    >
      {{ option.title }}
    </UiButton>
  </div>
</template>

<style scoped></style>

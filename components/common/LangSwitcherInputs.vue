<script setup lang="ts">
  defineProps<{
    modelValue?: string;
  }>();
  const activeLang = ref<Language>('ua');

  const switchLang = (value: Language) => {
    activeLang.value = value;
  };

  const emits = defineEmits(['update:modelValue']);

  const handleInput = () => {
    emits('update:modelValue', activeLang.value);
  };

  watch(activeLang, () => {
    handleInput();
  });

  handleInput();
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
            'translate-x-[100%]': activeLang === 'en',
          }
        )
      "
    />
    <UiButton
      :class="
        cn(
          'text_xs relative z-10 px-[9px] py-[5px] text-black md:px-[10px] md:py-[8px] xl:px-[12px] xl:py-[10px]',
          {
            'text-white': activeLang === 'ua',
          }
        )
      "
      @click="switchLang('ua')"
    >
      ua
    </UiButton>
    <UiButton
      :class="
        cn(
          'text_xs  relative z-10 px-[9px] py-[5px] text-black md:px-[10px] md:py-[8px] xl:px-[12px] xl:py-[10px]',
          {
            'text-white': activeLang === 'en',
          }
        )
      "
      @click="switchLang('en')"
    >
      en
    </UiButton>
  </div>
</template>

<style scoped></style>

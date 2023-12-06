<script setup lang="ts">
  const emits = defineEmits(['switchModal']);

  const closeModal = () => {
    navigateTo('/');
    emits('switchModal', false);
  };
</script>

<template>
  <div class="flex flex-col items-center">
    <div
      class="flex h-[60px] w-[60px] items-center justify-center rounded-[50%] bg-[#C5ECAD] md:h-[80px] md:w-[80px] xl:h-[100px] xl:w-[100px]"
    >
      <SvgoCheckmarkRounded class="!h-auto !w-[50%] text-transparent" />
    </div>
    <UiTitleNamu
      class="mt-[10px] text-center text-[23px] md:mb-[22px] md:mt-[15px] md:text-[35px] xl:mb-[25px] xl:mt-[18px] xl:text-[50px]"
    >
      {{ $t('success_register_message') }}
    </UiTitleNamu>
    <UiButtonPrimary class="mt-[40px] md:mt-[55px] xl:mt-[70px]" @click="closeModal">{{
      $t('to_main_page')
    }}</UiButtonPrimary>
  </div>
</template>

<style scoped></style>

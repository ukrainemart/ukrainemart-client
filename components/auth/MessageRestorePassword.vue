<script setup lang="ts">
  const auth = useAuthStore();

  const closeModal = () => {
    auth.switchAuthModal(false);
  };
</script>

<template>
  <div class="flex flex-col">
    <UiButtonOpacity class="self-end" @click="closeModal">
      <UiCloseIcon styles="h-[14px] w-[14px] md:h-[18px] md:w-[18px] xl:w-[22px] xl:h-[22px]" />
    </UiButtonOpacity>
    <UiTextPortalPrimaryXl
      class="mt-[20px] text-center md:mt-[25px] xl:mt-[30px] 2xl:text-[20px]"
      >{{ $t('text.send_mail') }}</UiTextPortalPrimaryXl
    >
    <UiTextPortalPrimaryXl class="mt-[10px] text-center 2xl:text-[20px]">{{
      $t('text.check_spam')
    }}</UiTextPortalPrimaryXl>
  </div>
</template>

<style scoped></style>

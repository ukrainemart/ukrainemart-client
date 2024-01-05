<script setup lang="ts">
  const auth = useAuthStore();

  const closeModal = () => {
    auth.switchAuthModal(false);
  };

  const navigateEvent = () => {
    auth.switchAuthModal(false);
    navigateTo('/subscriptions');
  };
</script>

<template>
  <div class="flex flex-col">
    <UiButtonOpacity class="self-end" @click="closeModal">
      <UiCloseIcon styles="h-[14px] w-[14px] md:h-[18px] md:w-[18px] xl:w-[22px] xl:h-[22px]" />
    </UiButtonOpacity>
    <UiTextPortalPrimaryXl
      class="mt-[20px] text-center md:mt-[25px] xl:mt-[30px] 2xl:text-[20px]"
      >{{ $t('text.get_access_to_export') }}</UiTextPortalPrimaryXl
    >
    <UiButtonPrimary class="mt-[35px] md:mt-[40px] xl:mt-[50px]" @click="navigateEvent">{{
      $t('labels.learn_more')
    }}</UiButtonPrimary>
  </div>
</template>

<style scoped></style>

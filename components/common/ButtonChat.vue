<script setup lang="ts">
  const auth = useAuthStore();

  const openAuth = () => {
    auth.switchTypeAuth('login');
    auth.switchAuthModal(true);
  };

  const onClick = () => {
    if (isLoggedIn()) {
      navigateTo('/profile/message');
      return false;
    }
    openAuth();
  };
</script>

<template>
  <UiButtonOpacity @click="onClick">
    <SvgoMessage class="!h-5 !w-[22px] text-black 4xl:!h-[28px] 4xl:!w-[30px]" />
  </UiButtonOpacity>
</template>

<style scoped></style>

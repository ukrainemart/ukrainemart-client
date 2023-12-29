<script setup lang="ts">
  const auth = useAuthStore();
  const openAuth = () => {
    auth.switchTypeAuth('login');
    auth.switchAuthModal(true);
  };

  const emits = defineEmits(['switchChat']);

  const switchChat = () => {
    if (!isLoggedIn()) {
      openAuth();
      return false;
    }
    emits('switchChat');
  };
</script>

<template>
  <div>
    <slot name="button" :handlerClick="switchChat" />
  </div>
</template>

<style scoped></style>

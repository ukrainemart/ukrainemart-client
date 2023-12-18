<script setup lang="ts">
  const props = defineProps<{
    chatId: number;
  }>();
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
    if (props.chatId) {
      navigateTo({ path: '/profile/message', query: { chatId: props.chatId } });
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

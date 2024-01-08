<script setup lang="ts">
  const props = defineProps<{
    type: 'request' | 'product';
  }>();

  const auth = useAuthStore();
  const openAuth = () => {
    auth.switchTypeAuth('login');
    auth.switchAuthModal(true);
  };

  const openMessage = () => {
    auth.switchTypeAuth('messageSubscribe');
    auth.switchAuthModal(true);
  };

  const emits = defineEmits(['switchChat']);

  const switchChat = () => {
    if (
      (props.type === 'request' && !isLoggedIn()) ||
      (props.type === 'request' && !auth.user?.subscription)
    ) {
      openMessage();
      return false;
    }
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

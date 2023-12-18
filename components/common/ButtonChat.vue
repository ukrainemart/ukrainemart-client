<script setup lang="ts">
  import Pusher from 'pusher-js';

  const auth = useAuthStore();
  const countNotReadMessages = ref(0);
  const getStartCountNotReadMessages = () => {
    countNotReadMessages.value = auth.user?.notReadMessages || 0;
  };

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

  const pusherFunc = () => {
    Pusher.logToConsole = true;

    const pusher = new Pusher('0325bd905569ce837132', {
      cluster: 'eu',
    });

    const pusherChannel = pusher.subscribe(`userUnreadMessages${auth.user?.id}`);

    pusherChannel.bind('notReadMessage', (data: any) => {
      console.log(data);
    });
  };

  onMounted(() => {
    pusherFunc();
  });

  getStartCountNotReadMessages();
</script>

<template>
  <UiButtonOpacity class="relative" @click="onClick">
    <div
      v-if="countNotReadMessages && countNotReadMessages > 0"
      class="absolute right-[-20%] top-[-20%] flex h-[15px] w-[15px] items-center justify-center rounded-[50%] bg-status_red text-[10px] text-white"
    >
      <span>{{ countNotReadMessages }}</span>
    </div>
    <SvgoMessage class="!h-5 !w-[22px] text-black 4xl:!h-[28px] 4xl:!w-[30px]" />
  </UiButtonOpacity>
</template>

<style scoped></style>

<script setup lang="ts">
  import Pusher from 'pusher-js';

  const route = useRoute();
  const router = useRouter();

  const chats = ref<Chat[]>([]);
  const currentIdChat = ref<number | null>(route.query.chatId ? +route.query.chatId : null);
  const currentChat = ref<Chat | null>(null);
  const loadingChats = ref(true);
  const loadingChat = ref(false);
  const MAX_CHAT_DISPLAY = 7;

  const changeCurrentId = (id: number) => {
    currentIdChat.value = id;
  };

  function fetchChatList() {
    return useFetchSubscribe(`${useUrlApi()}/chat/list`)
      .then((res: any) => {
        chats.value = res.data.value.chats || [];
        loadingChats.value = false;
      })
      .catch(() => {
        loadingChats.value = false;
      });
  }

  const pusherFunc = () => {
    const pusher = new Pusher('0325bd905569ce837132', {
      cluster: 'eu',
    });

    const globalChat = pusher.subscribe(`global-chat`);
    globalChat.bind('chat', (data: any) => {
      fetchChatList();
    });

    chats.value.forEach((chat: Chat) => {
      const pusherChannel = pusher.subscribe(`chat${chat.id}`);

      pusherChannel.bind('message', async (data: any) => {
        console.log(data);

        await currentChat.value?.messages?.push(data);
        fetchChatList();
      });
    });
  };

  const fetchCurrentChat = () => {
    loadingChat.value = true;
    if (!currentIdChat.value) return false;
    useFetchSubscribe(`${useUrlApi()}/chat/messages/${currentIdChat.value}`).then((res: any) => {
      currentChat.value = res.data.value as Chat;
      loadingChat.value = false;
      fetchChatList();
    });
  };

  const clearQueryChatId = () => {
    console.log(route);

    router.push({ query: {} });
  };

  fetchCurrentChat();

  watch(currentIdChat, () => {
    fetchCurrentChat();
    clearQueryChatId();
  });

  fetchChatList().then(() => {
    pusherFunc();
  });
</script>

<template>
  <div class="grid-cols-12 gap-[40px] xl:grid">
    <UiDivRoundedBg
      :class="
        cn('col-span-12 hidden self-start xl:col-span-5 xl:!block 4xl:col-span-4', {
          block: !currentIdChat,
          'px-[23px]': chats.length > MAX_CHAT_DISPLAY,
        })
      "
    >
      <CommonTitleProfilePage class="mb-[20px] md:mb-[30px] xl:mb-[40px]">
        {{ $t('profile.message.my_messages') }}
      </CommonTitleProfilePage>

      <div
        class="mx-[-20px] mt-[20px] flex h-[50vh] flex-col overflow-hidden overscroll-contain px-[20px] md:mt-[27px] xl:mt-[41px] xl:h-[560px] 3xl:h-[635px]"
        :class="{ 'overflow-y-scroll': chats.length > MAX_CHAT_DISPLAY }"
      >
        <div v-if="loadingChats">
          <UiSkeletonChatItem
            v-for="item in 6"
            :key="item"
            class="px-[15px] py-[10px] md:py-[14px]"
          />
        </div>

        <UiAlertProfileEmpty v-if="!loadingChats && chats.length === 0">
          {{ $t('profile.message.you_have_no_chats_this_category') }}
        </UiAlertProfileEmpty>

        <PagesButtonChatItem
          v-for="chat in chats"
          :key="chat.id"
          :chat="chat"
          :active="chat.id === currentIdChat"
          @click="changeCurrentId(chat.id)"
        />
      </div>
    </UiDivRoundedBg>

    <PagesChatMessageBox
      v-if="currentIdChat"
      :class="
        cn('hidden xl:!flex', {
          flex: currentIdChat,
        })
      "
      :loading="loadingChat"
      :chat="currentChat"
      @changeCurrentIdChat="changeCurrentId"
    />
  </div>
</template>

<style scoped></style>

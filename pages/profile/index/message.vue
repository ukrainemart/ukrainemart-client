<script setup lang="ts">
  import Pusher from 'pusher-js';

  const route = useRoute();
  const router = useRouter();

  const chats = ref<Chat[]>([]);
  const currentIdChat = ref<number | null>(route.query.chatId ? +route.query.chatId : null);
  const currentChat = ref<Chat | null>(null);
  const loadingChats = ref(true);
  const loadingChat = ref(false);

  const getBusinessFromCookies = () => {
    chatSwitch.value = business.value || 'buying';
  };

  const changeCurrentId = (id: number) => {
    currentIdChat.value = id;
  };

  function fetchChatList() {
    return useApiFetch(`${useUrlApi()}/chat/list`)
      .then((res: any) => {
        chats.value = res.data.value.chats || [];
        loadingChats.value = false;
      })
      .catch((res) => {
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
    useApiFetch(`${useUrlApi()}/chat/messages/${currentIdChat.value}`).then((res: any) => {
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
        })
      "
      @mouseover="hideOverflow"
      @mouseout="showOverflow"
    >
      <CommonTitleProfilePage class="mb-[20px] md:mb-[30px] xl:mb-[40px]">
        {{ $t('profile.message.my_messages') }}
      </CommonTitleProfilePage>
      <CommonBusinessSwitcher v-if="isExporter" v-model="chatSwitch" :currentValue="chatSwitch" />
      <NuxtScrollbar
        class="mx-[-20px] mt-[20px] flex h-[50vh] flex-col overflow-scroll !overflow-x-hidden px-[20px] md:mt-[27px] xl:mt-[41px]"
        tag="div"
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
          :chatType="chatSwitch"
          @click="changeCurrentId(chat.id)"
        />
      </NuxtScrollbar>
      <NuxtScrollbar
        v-if="chatSwitch === 'buying'"
        class="mx-[-20px] mt-[20px] flex h-[50vh] max-h-[569px] flex-col overflow-scroll !overflow-x-hidden px-[20px] md:mt-[27px] xl:mt-[41px]"
        tag="div"
      >
        <div v-if="loadingChats">
          <UiSkeletonChatItem
            v-for="item in 6"
            :key="item"
            class="px-[15px] py-[10px] md:py-[14px]"
          />
        </div>

        <UiAlertProfileEmpty v-if="!loadingChats && buyChats.length === 0">
          {{ $t('profile.message.you_have_no_chats_this_category') }}
        </UiAlertProfileEmpty>

        <PagesButtonChatItem
          v-for="chat in buyChats"
          :key="chat.id"
          :active="chat.id === currentIdChat"
          :chatType="chatSwitch"
          :chat="chat"
          @click="changeCurrentId(chat.id)"
        />
      </NuxtScrollbar>
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
      @mouseover="hideOverflow"
      @mouseout="showOverflow"
    />
  </div>
</template>

<style scoped></style>

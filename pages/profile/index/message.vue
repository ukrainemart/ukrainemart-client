<script setup lang="ts">
  import Pusher from 'pusher-js';

  const auth = useAuthStore();
  const isExporter = computed(() => auth.isExporter);
  const chatSwitch = ref<'for_sale' | 'buying'>('buying');

  const buyChats = ref<Chat[]>([]);
  const sellChats = ref<Chat[]>([]);
  const currentIdChat = ref<number | null>(null);
  const currentChat = ref<Chat | null>(null);
  const loadingChats = ref(true);
  const loadingChat = ref(false);

  const changeCurrentId = (id: number) => {
    currentIdChat.value = id;
  };

  const fetchChatList = () => {
    useApiFetch(`${useUrlApi()}/chat/list`)
      .then((res: any) => {
        buyChats.value = res.data.value.buyChats || [];
        sellChats.value = res.data.value.sellChats || [];
        loadingChats.value = false;
      })
      .catch((res) => {
        loadingChats.value = false;
      });
  };

  const fetchCurrentChat = () => {
    loadingChat.value = true;
    if (!currentIdChat.value) return false;
    useApiFetch(`${useUrlApi()}/chat/messages/${currentIdChat.value}`).then((res: any) => {
      currentChat.value = res.data.value;
      loadingChat.value = false;
    });
  };

  watch(currentIdChat, () => {
    fetchCurrentChat();
  });

  fetchChatList();

  const pusherFunc = () => {
    const allChats = [...buyChats.value, ...sellChats.value];

    Pusher.logToConsole = true;

    const pusher = new Pusher('0325bd905569ce837132', {
      cluster: 'eu',
    });

    allChats.forEach((chat: Chat) => {
      const pusherChannel = pusher.subscribe(`chat${chat.id}`);

      pusherChannel.bind('message', (data: any) => {
        console.log(currentChat.value);
        console.log(data);
        currentChat.value?.messages?.push(data);
      });
    });
  };

  watchDeep([buyChats, sellChats], () => {
    pusherFunc();
  });
  onMounted(() => {
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
    >
      <CommonTitleProfilePage class="mb-[20px] md:mb-[30px] xl:mb-[40px]">
        {{ $t('profile.message.my_messages') }}
      </CommonTitleProfilePage>
      <CommonBusinessSwitcher v-if="isExporter" v-model="chatSwitch" />
      <NuxtScrollbar
        v-if="chatSwitch === 'for_sale'"
        class="mx-[-20px] mt-[20px] flex flex-col overflow-scroll !overflow-x-hidden px-[20px] md:mt-[27px] xl:mt-[41px] xl:max-h-[60vh]"
        tag="div"
      >
        <div v-if="loadingChats">
          <UiSkeletonChatItem v-for="item in 6" :key="item" />
        </div>

        <PagesButtonChatItem
          v-for="chat in sellChats"
          :key="chat.id"
          :chat="chat"
          @click="changeCurrentId(chat.id)"
        />
      </NuxtScrollbar>
      <NuxtScrollbar
        v-if="chatSwitch === 'buying'"
        class="mx-[-20px] mt-[20px] flex flex-col overflow-scroll !overflow-x-hidden px-[20px] md:mt-[27px] xl:mt-[41px] xl:max-h-[60vh]"
        tag="div"
      >
        <div v-if="loadingChats">
          <UiSkeletonChatItem v-for="item in 6" :key="item" />
        </div>

        <PagesButtonChatItem
          v-for="chat in buyChats"
          :key="chat.id"
          :chat="chat"
          @click="changeCurrentId(chat.id)"
        />
      </NuxtScrollbar>
    </UiDivRoundedBg>
    <PagesChatMessageBox
      v-if="currentChat"
      :class="
        cn('hidden xl:!flex', {
          flex: currentIdChat && currentChat,
        })
      "
      :loading="loadingChat"
      :chat="currentChat"
      @changeCurrentIdChat="changeCurrentId"
    />
  </div>
</template>

<style scoped></style>

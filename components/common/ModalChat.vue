<script setup lang="ts">
  const props = defineProps<{
    modelValue: boolean;
    productId?: number;
  }>();
  const auth = useAuthStore();
  const userId = computed(() => auth.user?.id);

  const messages = ref<MessageChat[]>([]);
  const messageInput = ref('');

  const emits = defineEmits(['update:modelValue']);

  const updateValue = (value: boolean) => {
    emits('update:modelValue', value);
  };

  const onSendMessage = async () => {
    if (!messageInput.value.trim()) return false;
    await useApiFetch(`${useUrlApi()}/chat/message/sent`, {
      method: 'POST',
      body: {
        product_id: props.productId,
        message: messageInput.value,
      },
    }).then((res: any) => {
      if (res.data.value.status === 1) {
        messages.value.push({
          content: messageInput.value,
          user_id: userId.value,
        } as MessageChat);
        messageInput.value = '';
        navigateTo({ path: '/profile/message', query: { chatId: res.data.value.chat_id } });
      }
    });
  };
</script>

<template>
  <div
    v-show="modelValue"
    class="fixed bottom-16 right-4 z-[100] w-full max-w-[300px] md:max-w-[384px]"
  >
    <div class="w-full max-w-lg rounded-lg bg-white shadow-md">
      <div class="flex items-center justify-between rounded-t-lg border-b bg-black p-4 text-white">
        <p class="text-lg font-semibold">Admin Bot</p>
        <button
          class="text-gray-300 hover:text-gray-400 focus:text-gray-400 focus:outline-none"
          @click="updateValue(false)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <NuxtScrollbar tag="div" class="flex h-80 flex-col">
        <div class="flex flex-1 flex-col justify-end p-4">
          <PagesChatMessageItem
            v-for="message in messages"
            :key="message.id"
            :user="message.user_id === userId"
            >{{ message.content }}</PagesChatMessageItem
          >
        </div>
      </NuxtScrollbar>
      <div class="flex border-t p-4">
        <input
          v-model="messageInput"
          type="text"
          placeholder="Type a message"
          class="w-full rounded-l-md border px-3 py-2 focus:outline-none"
        />
        <button
          id="send-button"
          class="rounded-r-md bg-black px-4 py-2 text-white transition duration-300 hover:opacity-hover"
          @click="onSendMessage"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

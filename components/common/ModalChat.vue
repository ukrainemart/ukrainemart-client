<script setup lang="ts">
  const props = defineProps<{
    modelValue: boolean;
    productId?: number;
    recipientName?: string;
    requestId?: number;
  }>();
  const messageInput = ref('');
  const loading = ref(false);

  const emits = defineEmits(['update:modelValue']);

  const updateValue = (value: boolean) => {
    emits('update:modelValue', value);
  };

  const onSendMessage = async () => {
    if (!messageInput.value.trim() || loading.value) return false;
    loading.value = true;

    const requestBody = {
      message: messageInput.value,
    };

    if (props.productId) {
      Object.assign(requestBody, {
        product_id: props.productId,
      });
    }
    if (props.requestId) {
      Object.assign(requestBody, {
        request_id: props.requestId,
      });
    }

    await useApiFetch(`${useUrlApi()}/chat/message/sent`, {
      method: 'POST',
      body: requestBody,
    }).then((res: any) => {
      if (res.data.value.status === 1) {
        messageInput.value = '';
        navigateTo({ path: '/profile/message', query: { chatId: res.data.value.chat_id } });
        loading.value = false;
      }
    });
  };
</script>

<template>
  <div
    v-show="modelValue"
    class="fixed bottom-16 right-4 z-[100] w-full max-w-[285px] md:max-w-[364px] xl:max-w-[489px]"
  >
    <div
      class="w-full max-w-lg rounded-[14px] bg-white shadow-md md:rounded-[17px] xl:rounded-[20px]"
    >
      <div
        class="flex items-center justify-between rounded-t-lg border-b bg-transparent p-[15px] text-black md:px-[20px] md:py-[17px] xl:px-[30px] xl:py-[25px]"
      >
        <p class="text-lg font-semibold">{{ recipientName }}</p>
        <UiButtonOpacity class="" @click="updateValue(false)">
          <UiCloseIcon :styles="cn('h-[18px] w-[18px] md:h-[23px] md:w-[23px]')" />
        </UiButtonOpacity>
      </div>
      <div class="flex p-[15px] md:px-[20px] md:py-[17px] xl:px-[30px] xl:py-[25px]">
        <form class="w-full" @submit.prevent="onSendMessage">
          <UiInputSend
            v-model="messageInput"
            :loading="loading"
            btnType="submit"
            :placeholder="$t('placeholders.write_your_message')"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

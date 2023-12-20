<script setup lang="ts">
  const props = defineProps<{
    chat?: Chat | null;
    loading: boolean;
    chatType: 'for_sale' | 'buying';
  }>();
  const auth = useAuthStore();
  const userId = computed(() => auth.user?.id);
  const companyId = computed(() => auth.user?.company.id);

  const messageInput = ref('');
  const scrollbar = ref();

  const scrollEnd = () => {
    if (scrollbar.value) {
      setTimeout(() => {
        const customScrollbar = document.getElementsByClassName('custom_scrollbar')[0];
        customScrollbar.scrollTop = customScrollbar.scrollHeight - customScrollbar.clientHeight;
      }, 10);
    }
  };

  watchDeep([() => props.chat, () => props.loading], () => {
    scrollEnd();
  });

  onMounted(() => {
    scrollEnd();
  });

  const emits = defineEmits(['changeCurrentIdChat']);

  const changeCurrentIdChat = (value: number | null) => {
    emits('changeCurrentIdChat', value);
  };

  const onSendMessage = async () => {
    if (!props.chat || props.loading || !messageInput.value.trim()) return false;
    await useApiFetch(`${useUrlApi()}/chat/message/sent`, {
      method: 'POST',
      body: {
        product_id: props?.chat.product_id,
        message: messageInput.value,
        chat_id: props.chatType === 'for_sale' ? props?.chat.id : false,
      },
    }).then(() => {
      messageInput.value = '';
    });
  };
</script>

<template>
  <UiDivRoundedBg class="flex flex-col self-start xl:col-span-7 4xl:col-span-8">
    <div class="mx-[-15px] border-b border-[#D9D9D9] md:mx-[-25px] xl:mx-[-30px]">
      <div
        class="flex items-center justify-between px-[15px] pb-[15px] md:px-[25px] xl:px-[30px] xl:pb-[20px] 3xl:px-[35px]"
      >
        <img
          v-if="!loading"
          class="h-[34px] w-[34px] shrink-0 rounded-[50%] object-cover md:h-[43px] md:w-[43px] xl:h-[50px] xl:w-[50px]"
          :src="chat?.product?.main_image?.path"
          alt=""
        />
        <div v-if="!loading" class="ml-[8px] mr-[20px] w-[50%] flex-1 md:ml-[10px] xl:ml-[13px]">
          <nuxtLink
            :to="'/product/' + chat?.product_id"
            class="inline-block w-full truncate text-[14px] font-medium text-black md:text-[16px]"
          >
            {{ useMultiLang(chat?.product, 'title') }}
          </nuxtLink>
          <!-- <h2
            class="mt-[5px] inline-block w-full truncate text-[7px] font-medium text-[#B6B6B6] md:text-[12px]"
          >
            Останній раз в мережі в 15:24
          </h2> -->
        </div>
        <UiSkeletonChatItem v-if="loading" />
        <div class="flex items-center gap-[15px] xl:gap-[20px]">
          <UiButtonOpacityDelete v-if="!loading" class="!bg-[#F1F1F1]" />
          <UiButtonOpacityBlocked v-if="!loading" class="!bg-[#F1F1F1]" />
          <UiButtonOpacityIconTemplate
            v-if="!loading"
            class="!bg-[#F1F1F1] xl:hidden"
            @click="changeCurrentIdChat(null)"
          >
            <SvgoArrowNext
              :fontControlled="false"
              class="h-[11px] w-[9px] rotate-[180deg] text-status_gray md:h-[14px] md:w-[11px] lg:h-[18px] lg:w-[14px] 2xl:hidden"
            />
          </UiButtonOpacityIconTemplate>
          <UiSkeleton
            v-if="loading"
            class="h-[30px] w-[30px] shrink-0 rounded-[50%] !p-0 md:h-[40px] md:w-[40px]"
          />
          <UiSkeleton
            v-if="loading"
            class="h-[30px] w-[30px] shrink-0 rounded-[50%] !p-0 md:h-[40px] md:w-[40px]"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-1 flex-col">
      <NuxtScrollbar
        ref="scrollbar"
        class="custom_scrollbar mx-[-30px] flex max-h-[569px] min-h-[35vh] flex-1 flex-col p-[30px] !pb-0"
        tag="div"
      >
        <div class="flex flex-1 flex-col justify-end gap-[10px] md:gap-[15px] xl:gap-[20px]">
          <UiSkeleton
            v-if="loading"
            class="h-[60px] w-[50%] rounded-[5px] !p-0 md:rounded-[10px]"
          />
          <UiSkeleton
            v-if="loading"
            class="h-[60px] w-[50%] self-end rounded-[5px] !p-0 md:rounded-[10px]"
          />
          <UiSkeleton
            v-if="loading"
            class="h-[60px] w-[50%] rounded-[5px] !p-0 md:rounded-[10px]"
          />
          <UiSkeleton
            v-if="loading"
            class="h-[60px] w-[50%] self-end rounded-[5px] !p-0 md:rounded-[10px]"
          />
          <PagesChatMessageItem
            v-for="message in chat?.messages"
            v-if="!loading"
            :key="message?.id"
            :user="
              chatType === 'buying' ? message.user_id === userId : message.company_id === companyId
            "
            >{{ message.content }}</PagesChatMessageItem
          >
        </div>
      </NuxtScrollbar>
      <form action="#" @submit.prevent="onSendMessage">
        <div
          class="mt-[15px] overflow-hidden rounded-[10px] border border-[#D9D9D9] md:mt-[25px] md:rounded-[15px] xl:rounded-[20px]"
        >
          <textarea
            v-model="messageInput"
            :placeholder="$t('placeholders.write_your_message')"
            class="min-h-[75px] w-full resize-none px-[15px] py-[10px] text-[7px] focus:outline-none md:min-h-[60px] md:text-[10px] xl:min-h-[80px] xl:text-[14px]"
          />
          <div class="flex justify-between px-[15px] py-[10px]">
            <UiButtonOpacity type="button" class="h-[16px] w-[8px] xl:h-[22px] xl:w-[11px]">
              <SvgoPaperClip class="!h-[full] !w-full" />
            </UiButtonOpacity>
            <UiButtonOpacitySend type="submit" />
          </div>
        </div>
      </form>
    </div>
  </UiDivRoundedBg>
</template>

<style scoped></style>

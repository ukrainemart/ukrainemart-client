<script lang="ts" setup>
  const route = useRoute();
  const requestId = route.params.id;

  const request = ref<RequestImporter | null>();
  const titleRequest = computed(() => request.value?.title);
  const isChat = ref<boolean>(false);
  const auth = useAuthStore();
  const userId = computed(() => auth.user?.id);
  const isChatOpenBtn = computed(() => userId.value !== request.value?.user?.id);
  useTitle(titleRequest);

  const switchChat = (value: boolean) => {
    isChat.value = value;
  };

  const fetchProduct = async () => {
    const response = await useFetch(`${useUrlApi()}/importRequest/show/${requestId}`);
    request.value = response?.data.value as RequestImporter;
  };

  fetchProduct();
</script>

<template>
  <div class="pb-[70px] md:pb-[100px] 2xl:pb-[130px]">
    <CommonModalChat
      v-if="request"
      v-model="isChat"
      :recipientName="request?.company?.title || request?.user?.name"
      :requestId="request.id"
    />

    <CommonBreadcrumbs :breadcrumb="request?.category" />

    <div class="container grid 2xl:grid-cols-[1fr_min-content] 2xl:gap-x-5">
      <div class="flex w-full flex-col md:flex-row md:gap-x-5 xl:w-fit 2xl:gap-x-10">
        <PagesRequestInfo
          v-if="request"
          :isChatOpenBtn="isChatOpenBtn"
          :request="request"
          @switchChat="switchChat"
        />
      </div>

      <PagesRequestDetails
        v-if="request"
        :request="request"
        class="md:order-2 2xl:col-span-2 2xl:mt-[80px]"
      />
      <PagesCompanyInfo
        v-if="request"
        :isChatOpenBtn="isChatOpenBtn"
        :request="request"
        class="md:mt-[35px] 2xl:mt-[0px]"
        @switchChat="switchChat"
      />
    </div>

    <CommonSectionRequestsImporters
      :title="$t('labels.other_inquiries_from_this_importer', { name: request?.company?.title })"
      :requests="request?.company_requests"
    />
    <CommonSectionRequestsImporters
      :title="
        $t('labels.other_inquiries_from_this_category', {
          name: useMultiLang(request?.category, 'title'),
        })
      "
      :requests="request?.same_category"
    />

    <CommonSectionCategories />
  </div>
</template>

<style></style>

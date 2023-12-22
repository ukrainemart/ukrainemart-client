<script setup lang="ts">
  useTitle('profile.my_requests.my_requests');
  definePageMeta({
    middleware: ['importer', 'company'],
  });
  const loading = ref(true);
  const NUM_SKELETON_ITEMS = 6;

  const requests = ref<RequestImporter[]>([]);
  const currentIdRequest = ref();
  const setCurrentIdRequest = (id: any) => {
    currentIdRequest.value = id;
  };

  const isRemoveRequestModal = ref(true);
  const switchModalRemove = (value: boolean) => {
    isRemoveRequestModal.value = value;
  };

  const fetchRequests = () => {
    useApiFetch(`${useUrlApi()}/importRequest/list`).then((res) => {
      requests.value = res.data.value as RequestImporter[];
      loading.value = false;
    });
  };

  const deleteRequest = () => {
    useApi(`${useUrlApi()}/importRequest/destroy/${currentIdRequest.value}`).then((res: any) => {
      if (res.status === 1) {
        switchModalRemove(false);
        fetchRequests();
      }
    });
  };

  const deleteAction = (id: any) => {
    setCurrentIdRequest(id);
    switchModalRemove(true);
  };

  fetchRequests();
</script>

<template>
  <LayoutProfilePage :title="`${$t('profile.my_requests.my_requests')}`">
    <UiButtonPrimary to="add_request">
      {{ $t('profile.my_requests.add_request') }}
    </UiButtonPrimary>

    <UiModalWarning
      v-if="currentIdRequest"
      v-model="isRemoveRequestModal"
      @confirm="deleteRequest"
      @closeModal="switchModalRemove(false)"
      >{{ $t('profile.my_requests.delete_request_question') }}</UiModalWarning
    >

    <div
      v-if="loading"
      class="mb-[30px] mt-[15px] grid grid-cols-12 gap-[10px] md:mb-[40px] md:mt-[30px] md:gap-[16px] md:gap-y-[15px] lg:mb-[50px] lg:mt-[25px] xl:gap-[30px]"
    >
      <SkeletonMyRequest v-for="i in NUM_SKELETON_ITEMS" :key="i" />
    </div>

    <div
      v-if="requests.length > 0"
      class="mb-[30px] mt-[15px] grid grid-cols-12 gap-[10px] md:mb-[40px] md:mt-[30px] md:gap-[16px] md:gap-y-[15px] lg:mb-[50px] lg:mt-[25px] xl:gap-[30px]"
    >
      <CommonCardMyRequest
        v-for="request in requests"
        :key="request.id"
        :request="request"
        :editLink="`edit_request/${request.id}`"
        class="col-span-12 md:col-span-6 xl:col-span-4"
        @deleteAction="deleteAction(request.id)"
      />
    </div>

    <UiAlertProfileEmpty v-if="!loading && requests.length === 0" class="mt-[30px]">{{
      $t('profile.my_requests.you_have_no_requests_yet')
    }}</UiAlertProfileEmpty>

    <!-- <UiPagination v-if="!loading"/> -->
  </LayoutProfilePage>
</template>

<style></style>

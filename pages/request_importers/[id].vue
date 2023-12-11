<script lang="ts" setup>
  const route = useRoute();
  const requestId = route.params.id;

  const request = ref<RequestImporter | null>();
  const titleRequest = computed(() => request.value?.title);
  useTitle(titleRequest);

  const fetchProduct = async () => {
    const response = await useFetch(`${useUrlApi()}/importRequest/show/${requestId}`);
    request.value = response?.data.value as RequestImporter;
    console.log(request.value);
  };

  fetchProduct();
</script>

<template>
  <div class="pb-[70px] md:pb-[100px] 2xl:pb-[130px]">
    <CommonBreadcrumbs :breadcrumb="request?.category" />

    <div class="container grid 2xl:grid-cols-[1fr_min-content] 2xl:gap-x-5">
      <div class="flex w-full flex-col md:flex-row md:gap-x-5 xl:w-fit 2xl:gap-x-10">
        <PagesRequestInfo :request="request" />
      </div>

      <PagesRequestDetails :request="request" class="md:order-2 2xl:col-span-2 2xl:mt-[80px]" />
      <PagesCompanyInfo :request="request" class="md:mt-[35px] 2xl:mt-[0px]" />
    </div>

    <CommonSectionRequestsImporters
      :title="$t('labels.other_inquiries_from_this_importer')"
      :requests="request?.company_requests"
    />
    <CommonSectionRequestsImporters
      :title="$t('labels.other_inquiries_from_this_category')"
      :requests="request?.same_category"
    />

    <CommonSectionCategories />
  </div>
</template>

<style></style>

<script setup lang="ts">
  const requests = ref<RequestImporter[]>([]);
  const pages = ref<any[]>([]);
  const page = ref(1);

  const fetchRequests = () => {
    useFetch(`${useUrlApi()}/importRequest/get`).then((res: any) => {
      console.log(res.data.value);
      requests.value = res.data.value.data as RequestImporter[];
      pages.value = res.data.value.links.filter(
        (el: any, ind: number, arr: any[]) => ind !== 0 && ind !== arr.length - 1
      );
      page.value = res.data.value.current_page;
    });
  };

  const fetchFilters = () => {
    useFetch(`${useUrlApi()}/importRequest/filters`).then((res) => {
      console.log(res.data.value);
    });
  };

  fetchFilters();
  fetchRequests();
</script>

<template>
  <div class="pb-[70px] md:pb-[100px] xl:pb-[130px]">
    <CommonBreadcrumbs :static="$t('subHeader.requests')" />
    <div class="container">
      <CommonTitleSection>Запити</CommonTitleSection>
      <div class="mt-[15px] flex gap-[30px] md:gap-[50px] xl:gap-[70px]">
        <UiSelectMultipleCheckbox :label="$t('category.singular')" />
        <UiSelectMultipleCheckbox :label="$t('labels.country')" />
      </div>
      <div
        class="mt-[24px] grid grid-cols-12 gap-x-[12px] gap-y-[20px] md:mt-[30px] xl:gap-x-[58px] xl:gap-y-[45px]"
      >
        <CommonRequestImportersItem
          v-for="request in requests"
          :key="request.id"
          class="col-span-12 shadow-md md:col-span-6 xl:col-span-4"
          :request="request"
        />
      </div>
      <UiPagination v-model="page" :links="pages" class="mt-[40px] md:mt-[60px] xl:mt-[80px]" />
    </div>
  </div>
</template>

<style scoped></style>

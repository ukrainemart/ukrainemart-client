<script setup lang="ts">
  const route = useRoute();
  const router = useRouter();

  const requests = ref<RequestImporter[]>([]);
  const pages = ref<any[]>([]);
  const page = ref(route.query.page ? +route.query.page : 1);

  const filters = ref({
    categories:
      typeof route.query.categories === 'string'
        ? [route.query.categories]
        : route.query.categories || [],
    countries:
      typeof route.query.countries === 'string'
        ? [route.query.countries]
        : route.query.countries || [],
  });

  const fetchRequests = () => {
    useFetch(`${useUrlApi()}/importRequest/get?page=${page.value}`, {
      method: 'POST',
      body: {
        category: filters.value.categories.map((el: any) => +el),
        country: filters.value.countries,
      },
    }).then((res: any) => {
      requests.value = res.data.value.data as RequestImporter[];
      pages.value = res.data.value.links.filter(
        (el: any, ind: number, arr: any[]) => ind !== 0 && ind !== arr.length - 1
      );
      page.value = res.data.value.current_page;
    });
  };

  const updateUrl = () => {
    const query = {
      page: page.value,
      categories: [...filters.value.categories],
      countries: [...filters.value.countries],
    };

    router.push({ query });
  };

  watchDeep([page, filters], () => {
    updateUrl();
    fetchRequests();
  });

  updateUrl();
  fetchRequests();
</script>

<template>
  <div class="pb-[70px] md:pb-[100px] xl:pb-[130px]">
    <CommonBreadcrumbs :static="$t('subHeader.requests')" />
    <div class="container">
      <CommonTitleSection>Запити</CommonTitleSection>
      <PagesRequestsFilters v-model:filtersActive="filters" class="mt-[15px]" />
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
      <UiPagination
        v-if="pages.length > 1"
        v-model="page"
        :links="pages"
        class="mt-[40px] md:mt-[60px] xl:mt-[80px]"
      />
    </div>
  </div>
</template>

<style scoped></style>

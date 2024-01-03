<script setup lang="ts">
  const subscriptions = ref<Subscription[]>([]);
  const loading = ref(true);

  const fetchSubscriptions = () => {
    useApiFetch(`${useUrlApi()}/subscription/plan/list`).then((res) => {
      subscriptions.value = res.data.value as Subscription[];
      loading.value = false;
    });
  };

  fetchSubscriptions();
</script>

<template>
  <div class="pb-[70px] md:pb-[100px] 2xl:pb-[130px]">
    <CommonBreadcrumbs :static="$t('subHeader.subscriptions')" />

    <div class="container">
      <CommonProductTitle class="mb-5 !font-montserrat xl:mb-[30px] 2xl:mb-10">
        {{ $t('subHeader.subscriptions') }}
      </CommonProductTitle>

      <div
        v-if="loading"
        class="grid grid-cols-1 gap-[10px] sm:grid-cols-2 md:grid-cols-4 md:gap-[20px] xl:gap-[30px]"
      >
        <SkeletonPricingCard v-for="item in [1, 2, 3, 4]"></SkeletonPricingCard>
      </div>
      <div v-if="!loading" class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        <CommonPricingCard
          v-for="subscription in subscriptions"
          :key="subscription.id"
          :subscription="subscription"
        />
      </div>
    </div>
  </div>
</template>

<style></style>

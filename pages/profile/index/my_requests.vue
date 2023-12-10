<script setup lang="ts">
  useTitle('profile.my_requests.my_requests');
  // definePageMeta({
  //   middleware: ['exporter', 'company'],
  // });
</script>

<template>
  <LayoutProfilePage :title="`${$t('profile.my_requests.my_requests')}`">
    <UiButtonPrimary to="add_request">
      {{ $t('profile.my_requests.add_request') }}
    </UiButtonPrimary>

    <!-- <UiModalWarning
      v-if="currentIdProduct"
      v-model="isRemoveProductModal"
      @confirm="deleteProduct"
      @closeModal="switchModalRemove(false)"
      >{{ $t('delete_product') }}</UiModalWarning
    > -->

    <div
      class="mb-[30px] mt-[15px] grid grid-cols-12 gap-[10px] md:mb-[40px] md:mt-[30px] md:gap-[16px] md:gap-y-[15px] lg:mb-[50px] lg:mt-[25px] xl:gap-[30px]"
    >
      <CommonCardMyRequest
        :editLink="`edit_request/${'request_id'}`"
        class="col-span-12 md:col-span-6 xl:col-span-4"
      />
      <CommonCardMyRequest class="col-span-12 md:col-span-6 xl:col-span-4" />
      <CommonCardMyRequest class="col-span-12 md:col-span-6 xl:col-span-4" />
      <CommonCardMyRequest class="col-span-12 md:col-span-6 xl:col-span-4" />
      <CommonCardMyRequest class="col-span-12 md:col-span-6 xl:col-span-4" />
      <CommonCardMyRequest class="col-span-12 md:col-span-6 xl:col-span-4" />
    </div>

    <!-- <UiAlertProfileEmpty v-if="products.length === 0">{{
      $t('profile.you_dont_have_any_products_yet')
    }}</UiAlertProfileEmpty> -->

    <!-- <UiPagination v-if="!loading"/> -->
  </LayoutProfilePage>
</template>

<style></style>

<script setup lang="ts">
  definePageMeta({
    middleware: ['exporter', 'company'],
  });
  const products = ref<Product[]>([]);
  const loading = ref(true);
  const NUM_SKELETON_ITEMS = 5;

  const currentIdProduct = ref();
  const setCurrentIdProduct = (id: any) => {
    currentIdProduct.value = id;
  };

  const isRemoveProductModal = ref(true);
  const switchModalRemove = (value: boolean) => {
    isRemoveProductModal.value = value;
  };

  const getProducts = async () => {
    try {
      const res = await useApiFetch(`${useUrlApi()}/product/list`);

      products.value = res.data.value as Product[];
      loading.value = false;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = () => {
    useApi(`${useUrlApi()}/product/destroy/${currentIdProduct.value}`).then((res: any) => {
      if (res.status === 1) {
        switchModalRemove(false);
        getProducts();
      }
    });
  };

  const deleteAction = (id: any) => {
    setCurrentIdProduct(id);
    switchModalRemove(true);
  };

  getProducts();
</script>

<template>
  <LayoutProfilePage :title="`${$t('profile.my_products')}`">
    <UiButtonPrimary to="add_product"> {{ $t('add_product.add_product') }} </UiButtonPrimary>
    <UiModalWarning
      v-if="currentIdProduct"
      v-model="isRemoveProductModal"
      @confirm="deleteProduct"
      @closeModal="switchModalRemove(false)"
      >{{ $t('delete_product') }}</UiModalWarning
    >

    <div
      class="mb-[30px] mt-[15px] flex flex-col gap-y-2.5 md:mb-[40px] md:mt-[30px] md:gap-y-[15px] lg:mb-[50px] lg:mt-[25px] lg:gap-y-[25px]"
    >
      <div v-if="loading" class="flex flex-col gap-y-2.5 md:gap-y-[15px] lg:gap-y-[25px]">
        <div
          v-for="i in NUM_SKELETON_ITEMS"
          :key="i"
          class="grid h-[127px] w-full grid-cols-[max-content_1fr_max-content] gap-y-[15px] rounded-[5px] bg-[#D9D9D9] px-2.5 pb-[15px] pt-2.5 md:h-[175px] md:rounded-[10px] md:p-5 lg:rounded-[20px] lg:px-[25px] lg:py-[33px] xl:h-[200px]"
        >
          <UiSkeleton
            class="mr-2.5 h-[75px] w-[60px] rounded-[5px] md:mr-5 md:h-[135px] md:w-[100px] md:rounded-[10px] lg:mr-10 lg:w-[110px] lg:rounded-[20px]"
          />
          <div class="flex flex-col">
            <UiSkeleton
              class="mb-[2px] h-[12px] w-[90px] md:mb-[5px] md:h-[17px] md:w-[126px] lg:mb-2.5"
            />
            <UiSkeleton class="h-[9px] w-[51px] md:mb-5 md:h-[12px] md:w-[72px] lg:mb-[25px]" />

            <UiSkeleton class="hidden md:block md:h-[17px] md:w-[152px]" />
            <UiSkeleton class="mt-auto hidden md:block md:h-[14px] md:w-[104px]" />
          </div>
          <!-- NUM_SKELETON_LINES -->
          <div class="flex flex-col gap-[5px] md:gap-[7px]">
            <UiSkeleton
              v-for="j in 4"
              :key="j"
              class="h-[13px] w-[117px] md:h-[20px] md:w-[190px]"
            />
          </div>

          <!-- The second row -->
          <UiSkeleton class="col-start-1 col-end-3 h-[12px] w-[111px] md:hidden" />
          <UiSkeleton class="h-[12px] w-[78px] justify-self-end md:hidden" />
        </div>
      </div>

      <CommonMyProductCard
        v-for="product in products"
        v-else-if="!loading && products.length > 0"
        :key="product.id"
        :product="product"
        @deleteAction="deleteAction(product.id)"
      />
    </div>
    <UiAlertProfileEmpty v-if="products.length === 0">{{
      $t('profile.you_dont_have_any_products_yet')
    }}</UiAlertProfileEmpty>

    <!-- <UiPagination v-if="!loading"/> -->
  </LayoutProfilePage>
</template>

<style></style>

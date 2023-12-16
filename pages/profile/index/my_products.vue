<script setup lang="ts">
  definePageMeta({
    middleware: ['exporter', 'company'],
  });
  useTitle('profile.my_products');
  const products = ref<Product[]>([]);
  const isLoading = ref(true);
  const NUM_SKELETON_ITEMS = 5;

  const currentIdProduct = ref();
  const setCurrentIdProduct = (id: any) => (currentIdProduct.value = id);

  const isRemoveProductModal = ref(true);
  const switchModalRemove = (value: boolean) => (isRemoveProductModal.value = value);

  const getProducts = async () => {
    try {
      const res = await useApiFetch(`${useUrlApi()}/product/list`);

      products.value = res.data.value as Product[];
      isLoading.value = false;
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
    <UiButtonPrimary to="add_product">
      {{ $t('add_product.add_product') }}
    </UiButtonPrimary>

    <UiModalWarning
      v-if="currentIdProduct"
      v-model="isRemoveProductModal"
      @confirm="deleteProduct"
      @closeModal="switchModalRemove(false)"
    >
      {{ $t('delete_product') }}
    </UiModalWarning>

    <div
      class="mb-[30px] mt-[15px] flex flex-col gap-y-2.5 md:mb-[40px] md:mt-[30px] md:gap-y-[15px] lg:mb-[50px] lg:mt-[25px] lg:gap-y-[25px]"
    >
      <div v-if="isLoading" class="flex flex-col gap-y-2.5 md:gap-y-[15px] lg:gap-y-[25px]">
        <SkeletonMyProduct
          v-for="i in NUM_SKELETON_ITEMS"
          :key="i"
          class="grid h-[127px] w-full grid-cols-[max-content_1fr_max-content] gap-y-[15px] rounded-[5px] bg-[#D9D9D9] px-2.5 pb-[15px] pt-2.5 md:h-[175px] md:rounded-[10px] md:p-5 lg:rounded-[20px] lg:px-[25px] lg:py-[33px] xl:h-[200px]"
        />
      </div>

      <CommonMyProductCard
        v-for="product in products"
        v-else-if="!isLoading && products.length > 0"
        :key="product.id"
        :product="product"
        @deleteAction="deleteAction(product.id)"
      />
    </div>

    <UiAlertProfileEmpty v-if="!isLoading && products.length === 0">
      {{ $t('profile.you_dont_have_any_products_yet') }}
    </UiAlertProfileEmpty>
  </LayoutProfilePage>
</template>

<style></style>

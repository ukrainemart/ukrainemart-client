<script setup lang="ts">
  const products = ref<Product[]>([]);
  const loading = ref(true);
  const NUM_SKELETON_CARDS = 5;

  const getProducts = () => {
    useApiFetch(`${useUrlApi()}/product/list`).then((res: any) => {
      products.value = res.data.value;
      loading.value = false;
    });
  };

  getProducts();
</script>

<template>
  <LayoutProfilePage title="Мої товари">
    <UiButtonPrimary to="add_product"> {{ $t('add_product.add_product') }} </UiButtonPrimary>

    <div
      class="mb-[30px] mt-[15px] flex flex-col gap-y-2.5 md:mb-[40px] md:mt-[30px] md:gap-y-[15px] lg:mb-[50px] lg:mt-[25px] lg:gap-y-[25px]"
    >
      <div v-if="loading" class="flex flex-col gap-y-2.5 md:gap-y-[15px] lg:gap-y-[25px]">
        <UiSkeleton
          v-for="i in NUM_SKELETON_CARDS"
          :key="i"
          class="h-[127px] w-full md:h-[175px] xl:h-[200px]"
        />
      </div>

      <CommonMyProductCard
        v-for="product in products"
        v-else
        :key="product.id"
        :product="product"
      />
    </div>

    <UiSkeleton v-if="loading" class="mx-auto h-[27px] w-[125px]" />
    <UiPagination v-else />
  </LayoutProfilePage>
</template>

<style></style>

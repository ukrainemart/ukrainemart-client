<script setup lang="ts">
  definePageMeta({
    middleware: ['company'],
  });
  const products = ref<Product[]>([]);

  const getProducts = () => {
    useApiFetch(`${useUrlApi()}/product/list`).then((res: any) => {
      products.value = res.data.value;
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
      <CommonMyProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>

    <!-- <UiPagination /> -->
  </LayoutProfilePage>
</template>

<style></style>

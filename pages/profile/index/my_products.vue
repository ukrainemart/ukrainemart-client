<script setup lang="ts"></script>

<template>
  <LayoutProfilePage title="Мої товари">
    <UiButtonPrimary to="add_product"> {{ $t('add_product.add_product') }} </UiButtonPrimary>

    <div
      class="mb-[30px] mt-[15px] flex flex-col gap-y-2.5 md:mb-[40px] md:mt-[30px] md:gap-y-[15px] lg:mb-[50px] lg:mt-[25px] lg:gap-y-[25px]"
    >
      <CommonMyProductCard />
      <CommonMyProductCard />
      <CommonMyProductCard />
    </div>

    <UiPagination />
  </LayoutProfilePage>
</template>

<style></style>
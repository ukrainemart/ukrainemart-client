<script setup lang="ts">
  const favorites = useFavoritesStore();

  const products = computed<Product[]>(() => favorites.favorites);
  const fetchFavorites = () => favorites.fetchFavorites();

  fetchFavorites();
</script>

<template>
  <LayoutProfilePage :title="$t('favorites')">
    <div
      v-if="products.length > 0"
      class="grid grid-cols-12 gap-x-[25px] gap-y-5 md:gap-x-[32px] md:gap-y-10 4xl:gap-x-[44px] 4xl:gap-y-[60px]"
    >
      <CommonCardProduct
        v-for="product in products"
        :key="product.id"
        class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-4 xl:col-span-3"
        :product="product"
      />
    </div>
    <UiAlertProfileEmpty v-else>{{
      $t('profile.there_are_no_products_your_favorites_yet')
    }}</UiAlertProfileEmpty>
  </LayoutProfilePage>
</template>

<style scoped></style>

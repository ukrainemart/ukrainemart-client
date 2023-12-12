<script setup lang="ts">
  defineProps<{
    product: Product;
  }>();
</script>

<template>
  <UiButtonTemplateFavorites :product="product">
    <template #button="{ isDisabledFavoritesBtn, onClickFavoritesBth, isFavoritesProduct }">
      <UiButtonOpacityHearth
        :active="isFavoritesProduct"
        :disabled="isDisabledFavoritesBtn"
        @click.prevent="onClickFavoritesBth"
      />
    </template>
  </UiButtonTemplateFavorites>
</template>

<style scoped></style>

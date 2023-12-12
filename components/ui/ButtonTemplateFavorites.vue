<script setup lang="ts">
  const props = defineProps<{
    product: Product;
  }>();
  const auth = useAuthStore();
  const favorites = useFavoritesStore();
  const isDisabledFavoritesBtn = ref(false);
  const isFavoritesProduct = ref(false);

  const switchTypeAuth = (type: SwitchAuth) => auth.switchTypeAuth(type);

  const switchAuthModal = (value: boolean) => auth.switchAuthModal(value);

  const addToFavorites = async () => {
    isFavoritesProduct.value = true;
    await favorites.addToFavorites(props.product, isDisabledFavoritesBtn);
  };

  watch(isDisabledFavoritesBtn, () => {
    console.log(isDisabledFavoritesBtn.value);
  });

  const checkExistInFavorites = () => {
    isFavoritesProduct.value = !!favorites.favorites.find((el) => el.id === props?.product?.id);
  };

  const removeFavorites = () => {
    isFavoritesProduct.value = false;
    favorites.removeFavorites(props.product.id, isDisabledFavoritesBtn);
  };

  const onClickFavoritesBth = () => {
    if (!isLoggedIn()) {
      switchAuthModal(true);
      switchTypeAuth('login');
      return false;
    }
    isDisabledFavoritesBtn.value = true;

    if (isFavoritesProduct.value) {
      removeFavorites();
      return false;
    }
    addToFavorites();
  };

  watchDeep(
    () => props.product?.id,
    () => {
      checkExistInFavorites();
    }
  );

  checkExistInFavorites();
</script>

<template>
  <slot
    name="button"
    :isDisabledFavoritesBtn="isDisabledFavoritesBtn"
    :onClickFavoritesBth="onClickFavoritesBth"
    :isFavoritesProduct="isFavoritesProduct"
  />
</template>

<style scoped></style>

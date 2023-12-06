<script setup lang="ts">
  const props = defineProps<{
    productId: number;
  }>();
  const auth = useAuthStore();
  const favorites = useFavoritesStore();
  const isDisabledFavoritesBtn = ref(false);
  const isFavoritesProduct = ref(false);

  const switchTypeAuth = (type: SwitchAuth) => auth.switchTypeAuth(type);

  const switchAuthModal = (value: boolean) => auth.switchAuthModal(value);

  const addToFavorites = async () => {
    isFavoritesProduct.value = true;
    await favorites.addToFavorites(props.productId, isDisabledFavoritesBtn);
  };

  watch(isDisabledFavoritesBtn, () => {
    console.log(isDisabledFavoritesBtn.value);
  });

  const checkExistInFavorites = () => {
    isFavoritesProduct.value = !!favorites.favorites.find((el) => el.id === props.productId);
  };

  const removeFavorites = () => {
    isFavoritesProduct.value = false;
    favorites.removeFavorites(props.productId, isDisabledFavoritesBtn);
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

  checkExistInFavorites();
</script>

<template>
  <button
    :disabled="isDisabledFavoritesBtn"
    class="group/favorites absolute right-[15%] top-[7%] w-[22%] rounded-[50%] bg-white pt-[22%] duration-hover group-hover:opacity-100 is-hover:opacity-0"
    @click.prevent="onClickFavoritesBth"
  >
    <SvgoHearth
      v-if="!isFavoritesProduct"
      :class="
        cn(
          'absolute left-[50%] top-[50%] !h-[46%] !w-[46%] translate-x-[-50%] translate-y-[-40%] text-black duration-hover group-hover/favorites:text-status_red'
        )
      "
    />
    <SvgoHearthBg
      v-else
      :class="
        cn(
          'absolute left-[50%] top-[50%] !h-[46%] !w-[46%] translate-x-[-50%] translate-y-[-40%] text-status_red duration-hover group-hover:text-status_red'
        )
      "
    />
  </button>
</template>

<style scoped></style>

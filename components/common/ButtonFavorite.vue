<script setup lang="ts">
  const props = defineProps<{
    productId: number;
  }>();

  const favorites = useFavoritesStore();
  const isDisabledFavoritesBtn = ref(false);
  const isFavoritesProduct = ref(false);

  const addToFavorites = async () => {
    await favorites.addToFavorites(props.productId, isDisabledFavoritesBtn, isFavoritesProduct);
  };

  watch(isDisabledFavoritesBtn, () => {
    console.log(isDisabledFavoritesBtn.value);
  });

  const checkExistInFavorites = () => {
    isFavoritesProduct.value = !!favorites.favorites.find((el) => el.id === props.productId);
  };

  const removeFavorites = () => {
    favorites.removeFavorites(props.productId, isDisabledFavoritesBtn, isFavoritesProduct);
  };

  const onClickFavoritesBth = () => {
    isDisabledFavoritesBtn.value = true;
    if (!isLoggedIn()) return false;

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

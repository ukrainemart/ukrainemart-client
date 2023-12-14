export default defineNuxtPlugin(() => {
  const favorites = useFavoritesStore();

  favorites.fetchFavorites();
});

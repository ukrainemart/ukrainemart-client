import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favoritesStore', () => {
  const favorites = ref<Product[]>([]);

  function fetchFavorites() {
    useApiFetch(`${useUrlApi()}/user/favorite/list`, {
      transform(data) {
        if (Array.isArray(data)) {
          return data.map((el: any) => el.product);
        }
        return [];
      },
    }).then((res) => {
      favorites.value = res.data.value as Product[];

      console.log(favorites.value);
    });
  }

  function addToFavorites(id: number) {
    useApiFetch(`${useUrlApi()}/user/favorite/add/${id}`).then((res: any) => {
      if (res.data.value.status === 1) {
        fetchFavorites();
      }
    });
  }

  function removeFavorites(id: number) {
    useApiFetch(`${useUrlApi()}/user/favorite/destroy/${id}`).then((res: any) => {
      if (res.data.value.status === 1) {
        fetchFavorites();
      }
    });
  }

  fetchFavorites();

  return {
    favorites,
    fetchFavorites,
    addToFavorites,
    removeFavorites,
  };
});

import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favoritesStore', () => {
  const favorites = ref<Product[]>([]);

  async function fetchFavorites() {
    const { data }: any = await useApiFetch(`${useUrlApi()}/user/favorite/list`, {
      transform(value: any) {
        if (Array.isArray(value)) {
          return value.map((el: any) => el.product);
        }
        return [];
      },
    });
    favorites.value = (data.value || []) as Product[];
  }

  function addToFavorites(id: number, disabledBtn: Ref<boolean>) {
    useApiFetch(`${useUrlApi()}/favorite/change/${id}`).then((res: any) => {
      if (res.data.value.status === 1) {
        disabledBtn.value = false;
      }
    });
  }

  function removeFavorites(id: number, disabledBtn: Ref<boolean>) {
    useApiFetch(`${useUrlApi()}/favorite/change/${id}`).then((res: any) => {
      if (res.data.value.status === 1) {
        favorites.value = favorites.value.filter((el) => el.id !== id);
        disabledBtn.value = false;
      }
    });
  }

  return {
    favorites,
    fetchFavorites,
    addToFavorites,
    removeFavorites,
  };
});

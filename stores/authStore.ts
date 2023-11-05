import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', () => {
  const user = ref<any>(null);
  const isLoggedIn = computed(() => !!user.value);

  async function fetchUser() {
    try {
      const { data } = await useApiFetch(`${useUrlApi()}/user`, {
        method: 'GET',
      });
      user.value = data.value;
    } catch (err) {
      console.log(err);
    }
  }

  async function login(credentials: LoginCredentials) {
    await useApiFetch(`${useUrl()}/sanctum/csrf-cookie`);
    const response = await useApiFetch(`${useUrlApi()}/login`, {
      method: 'POST',
      body: credentials,
    });

    if (response.data.value === '1') {
      await fetchUser();
      navigateTo('/profile');
    }

    // @ts-ignore
    // if (response.data.value.status_error === 1) {
    //   await fetchUser();
    // }
    // return response.data.value;
  }

  async function register(credentials: RegisterCredentials) {
    try {
      const response = await useApiFetch(`${useUrlApi()}/register`, {
        method: 'POST',
        body: credentials,
      });
      return response;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  return {
    register,
    login,
    user,
    isLoggedIn,
    fetchUser,
  };
});

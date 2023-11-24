import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', () => {
  const user = ref<User | null>(null);
  const isLoggedIn = computed(() => !!user.value);

  const isCompanyModeration = computed(() => user.value?.company?.status === '0');
  const isNoCompany = computed(() => user.value?.company?.status === null);
  const isCompany = computed(() => user.value?.company?.status === '1');
  const isNoModerationCompany = computed(() => user.value?.company?.status === '-1');

  async function fetchUser() {
    try {
      const { data } = await useApiFetch(`${useUrlApi()}/user`, {
        method: 'GET',
      });
      user.value = data.value as User;
    } catch (err) {
      console.log(err);
    }
  }

  async function logout() {
    await useApiFetch(`${useUrl()}/logout`, {
      method: 'POST',
    }).then(() => {
      navigateTo('/');
      user.value = null;
    });
  }

  async function login(credentials: LoginCredentials) {
    await useApiFetch(`${useUrl()}/sanctum/csrf-cookie`);
    try {
      const response: any = await useApiFetch(`${useUrlApi()}/login`, {
        method: 'POST',
        body: credentials,
      });
      if (response.data.value.status === 1) {
        await fetchUser();
        navigateTo('/profile');
      }
    } catch (err) {
      console.log(err);
    }
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
    isCompanyModeration,
    isNoCompany,
    isCompany,
    isNoModerationCompany,
    logout,
  };
});

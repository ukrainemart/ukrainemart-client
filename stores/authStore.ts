import { defineStore } from 'pinia';

export const useAuthStore = defineStore('authStore', () => {
  const user = ref<User | null>(null);
  const isLoggedIn = computed(() => !!user.value);

  const typeAuth = ref<SwitchAuth>('login');
  const isAuthModal = ref(false);

  const isCompanyModeration = computed(() => user.value?.company?.status === '0');
  const isNoCompany = computed(() => user.value?.company?.status === null);
  const isCompany = computed(() => user.value?.company?.status === '1');
  const isNoModerationCompany = computed(() => user.value?.company?.status === '-1');
  const isImporter = computed(() => user.value?.company?.type === 'importer');
  const isExporter = computed(() => user.value?.company?.type === 'exporter');
  const isGoogleUser = computed(() => !!user.value?.google_id);
  const isPassword = computed(() => !!user.value?.password_status);

  function switchTypeAuth(type: SwitchAuth) {
    typeAuth.value = type;
  }

  function switchAuthModal(value: boolean) {
    isAuthModal.value = value;
  }

  function fetchUser() {
    useApi(`${useUrlApi()}/user`).then((res) => {
      user.value = res as User;
      console.log(user.value);
      console.log(res);
    });
  }

  async function logout() {
    await useApiFetch(`${useUrlApi()}/logout`, {
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
      if (response.status.value === 'error') {
        return false;
      }
      if (response.data.value.status === 1) {
        await fetchUser();
        switchAuthModal(false);
        navigateTo('/profile');
        return true;
      }
    } catch (err) {
      console.log(err);
      return false;
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
    isImporter,
    isExporter,
    isGoogleUser,
    isPassword,
    typeAuth,
    switchTypeAuth,
    isAuthModal,
    switchAuthModal,
  };
});

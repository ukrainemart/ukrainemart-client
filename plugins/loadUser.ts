export default defineNuxtPlugin(async () => {
  const auth = useAuthStore();
  const token = useCookie('XSRF-TOKEN');

  if (!token.value) {
    await useApiFetch(`${useUrl()}/sanctum/csrf-cookie`);
  }

  token.value = '';

  if (!auth.isLoggedIn) {
    await auth.fetchUser();
  }
});

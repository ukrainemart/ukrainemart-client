export default defineNuxtPlugin(async () => {
  const auth = useAuthStore();
  const token = useCookie('XSRF-TOKEN');

  if (!token.value) {
    console.log('qwqwdqwdwqdwq');

    // await useApiFetch(`${useUrl()}/sanctum/csrf-cookie`);
  }

  if (!auth.isLoggedIn) {
    await auth.fetchUser();
  }
});

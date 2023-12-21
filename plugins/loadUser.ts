export default defineNuxtPlugin(async () => {
  const auth = useAuthStore();
  const token = useCookie('XSRF-TOKEN');
  const tokenRemove = useCookie('XSRF-TOKEN', {
    domain: 'ukrainemart.com',
  });

  if (!token.value) {
    await useApiFetch(`${useUrl()}/sanctum/csrf-cookie`);
  }

  tokenRemove.value = '';

  if (!auth.isLoggedIn) {
    await auth.fetchUser();
  }
});

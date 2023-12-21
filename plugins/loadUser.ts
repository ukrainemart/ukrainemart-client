export default defineNuxtPlugin(async () => {
  const auth = useAuthStore();
  const token = useCookie('XSRF-TOKEN');

  function deleteCookie(name: any, domain: any) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
  }

  // Remove the unwanted XSRF-TOKEN cookie for ukrainemart.com
  if (process.client) {
    deleteCookie('XSRF-TOKEN', 'ukrainemart.com');
  }

  if (!token.value) {
    await useApiFetch(`${useUrl()}/sanctum/csrf-cookie`);
  }
  if (!auth.isLoggedIn) {
    await auth.fetchUser();
  }
});

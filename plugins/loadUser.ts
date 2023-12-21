export default defineNuxtPlugin(async () => {
  const auth = useAuthStore();
  const token = useCookie('XSRF-TOKEN');

  if (!token.value) {
    await useApiFetch(`${useUrl()}/sanctum/csrf-cookie`);
  }

  function deleteCookie(name, domain) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
  }

  // Remove the unwanted XSRF-TOKEN cookie for ukrainemart.com
  deleteCookie('XSRF-TOKEN', 'ukrainemart.com');

  if (!auth.isLoggedIn) {
    await auth.fetchUser();
  }
});

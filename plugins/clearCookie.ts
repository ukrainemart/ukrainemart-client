export default defineNuxtPlugin(() => {
  const auth = useAuthStore();
  const business = useCookie('business');

  if (!auth.isLoggedIn) {
    business.value = null;
  }
});

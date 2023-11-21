export default defineNuxtRouteMiddleware(() => {
  const auth = useAuthStore();

  if (!auth.isCompany) {
    return navigateTo('/profile', { replace: true });
  }
  return true;
});

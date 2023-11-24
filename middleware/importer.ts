export default defineNuxtRouteMiddleware(() => {
  const auth = useAuthStore();

  if (!auth.isImporter) {
    return navigateTo('/profile', { replace: true });
  }
  return true;
});

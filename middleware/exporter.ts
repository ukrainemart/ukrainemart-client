export default defineNuxtRouteMiddleware(() => {
  const auth = useAuthStore();

  if (!auth.isExporter) {
    return navigateTo('/profile', { replace: true });
  }
  return true;
});

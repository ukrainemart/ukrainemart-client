export default defineNuxtRouteMiddleware(() => {
  const auth = useAuthStore();
  console.log(auth.isExporter);

  if (!auth.isExporter) {
    return navigateTo('/profile', { replace: true });
  }
  return true;
});

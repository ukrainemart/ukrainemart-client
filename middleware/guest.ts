export default defineNuxtRouteMiddleware(() => {
  const auth = useAuthStore();

  if (auth.isLoggedIn) {
    return navigateTo('/profile', { replace: true });
  }

  return false;
});

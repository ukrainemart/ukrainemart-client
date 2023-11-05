export default defineNuxtRouteMiddleware(() => {
  const auth = useAuthStore();

  console.log(auth.isLoggedIn);

  if (!auth.isLoggedIn) {
    return navigateTo('/', { replace: true });
  }
  return true;
});

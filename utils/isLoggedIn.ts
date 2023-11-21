export function isLoggedIn() {
  const auth = useAuthStore();

  return auth.isLoggedIn;
}

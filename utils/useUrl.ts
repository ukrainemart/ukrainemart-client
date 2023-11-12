export function useUrl() {
  const URL = `${useRuntimeConfig().public.url}`;
  return URL;
}

export function useUrlApi() {
  const URL = `${useRuntimeConfig().public.url}/api`;
  return URL;
}

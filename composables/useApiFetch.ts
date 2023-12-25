import type { UseFetchOptions } from 'nuxt/app';

export function useApiFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
  let headers: any = {};
  const tokenNotCorrect = useCookie('XSRF-TOKEN', { domain: 'ukrainemart.com' });
  tokenNotCorrect.value = null;
  const token = useCookie('XSRF-TOKEN');

  if (token.value) {
    // Only set the X-XSRF-TOKEN header if it doesn't exist in the headers already
    if (!headers['X-XSRF-TOKEN']) {
      headers['X-XSRF-TOKEN'] = token.value as string;
    }
  }

  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(['referer', 'cookie']),
    };
  }

  return useFetch(url, {
    credentials: 'include',
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers,
    },
  });
}

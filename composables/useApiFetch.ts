import type { UseFetchOptions } from 'nuxt/app';

export function useApiFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
  let headers: any = {};

  const token = useCookie('XSRF-TOKEN', {
    domain: '.ukrainemart.com',
  });

  if (token.value) {
    headers['X-XSRF-TOKEN'] = token.value as string;
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

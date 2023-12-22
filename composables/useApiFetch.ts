export function useApiFetch<T>(url: string, options: any = {}) {
  let headers: any = {};

  const token = useCookie('XSRF-TOKEN');

  if (token.value) {
    headers['X-XSRF-TOKEN'] = token.value as string;
  }

  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(['referer', 'cookie']),
    };
  }

  return $fetch<T>(url, {
    credentials: 'include',
    ...options,
    headers: {
      ...headers,
      ...options?.headers,
    },
  });
}

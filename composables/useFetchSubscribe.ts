import type { UseFetchOptions } from 'nuxt/app';

export async function useFetchSubscribe<T>(url: string, options: UseFetchOptions<T> = {}) {
  const res: any = useApiFetch(url, options);

  if(res.data.value?.status === 5) {
    navigateTo('/subscriptions');
    return false;
  }
  return res;
}

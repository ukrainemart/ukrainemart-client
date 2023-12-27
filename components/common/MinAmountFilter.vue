<script setup lang="ts">
  const { minAmount, handlerFilter } = inject('minAmount') as {
    minAmount: Ref<number>;
    handlerFilter: (filterValue: any, filterType: string) => void;
  };
  const localMinAmount = ref(minAmount.value);

  watch(minAmount, (newVal) => (localMinAmount.value = newVal));

  const updateMinAmount = useDebounceFn(
    () => handlerFilter(localMinAmount.value, 'minAmount'),
    400
  );
</script>

<template>
  <input
    :value="localMinAmount"
    type="number"
    class="input_outline_category"
    :placeholder="$t('category.minimum_order_placeholder')"
    @input="localMinAmount = Number(($event.target as HTMLInputElement)?.value)"
    @keyup.enter="updateMinAmount"
  />

  <button
    class="rounded-[50px] border border-solid border-black bg-black px-[30px] py-[4px] text-[12px] leading-[15px] text-white transition-colors duration-100 ease-in hover:bg-transparent hover:text-black focus:outline-none disabled:cursor-not-allowed md:text-[16px] md:leading-[20px]"
    @click="updateMinAmount"
  >
    {{ $t('category.ok') }}
  </button>
</template>

<style>
  .input_outline_category {
    @apply input_outline_text_category input_outline_padding_category input_outline_sizes_category rounded-[50px] border border-black bg-transparent focus:outline-none;
  }

  .input_outline_text_category {
    @apply text-[7px] font-medium text-black md:text-[10px] 4xl:text-[14px];
  }

  .input_outline_padding_category {
    @apply px-[15px] 2xl:px-[20px] 4xl:px-[25px];
  }

  .input_outline_sizes_category {
    @apply h-[30px] w-full 4xl:h-[50px];
  }
</style>

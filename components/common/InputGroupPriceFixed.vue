<script setup lang="ts">
  defineProps<{
    modelValue: PriceProduct['fixedPrice'];
  }>();
  const inputs = ref<PriceProduct['fixedPrice']>({
    amount: '',
    price: '',
    unitId: 0,
  });

  const emits = defineEmits(['update:modelValue']);

  const updateValue = () => {
    emits('update:modelValue', inputs.value);
  };

  watchDeep(inputs, () => {
    updateValue();
  });
</script>

<template>
  <div class="grid grid-cols-5 gap-[15px] md:max-w-full md:flex-nowrap xl:gap-[25px]">
    <div class="col-span-5 flex items-center md:col-span-3 lg:col-span-5 4xl:col-span-3">
      <UiLabel :label="$t('quantity') + ':'" class="w-full">
        <div class="flex w-full items-center">
          <UiInputOutline v-model="inputs.amount" type="number" class="w-full" />
        </div>
      </UiLabel>
      <UiLabel
        :label="$t('add_product.unit_measurement') + ':'"
        class="ml-[10px] justify-items-start md:ml-[20px]"
      >
        <CommonSelectUnitMeasure class="max-w-[90px] md:max-w-[110px]" />
      </UiLabel>
    </div>
    <div class="col-span-5 md:col-span-2 lg:col-span-5 4xl:col-span-2">
      <UiLabel class="relative z-50 4xl:max-w-none" :label="$t('add_product.enter_price') + ':'">
        <CommonPriceInputOutline v-model="inputs.price" />
      </UiLabel>
    </div>
  </div>
</template>

<style scoped></style>

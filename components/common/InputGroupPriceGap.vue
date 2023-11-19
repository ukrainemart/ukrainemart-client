<script setup lang="ts">
  const props = defineProps<{
    price: PriceProduct['variatedPrice'];
  }>();
  const inputs = ref<PriceProduct['variatedPrice']>({
    id: props.price.id,
    minAmount: '',
    maxAmount: '',
    price: '',
    unitId: '',
  });

  const emits = defineEmits(['update:price']);
  const unitOptions: any = inject('unitOptions');

  const getCurrentUnit = computed(
    () => unitOptions.value?.find((el: any) => el.id === +inputs.value.unitId) || ''
  );

  const updateValue = () => {
    emits('update:price', inputs.value);
  };

  watchDeep(inputs, () => {
    updateValue();
  });
</script>

<template>
  <div class="grid grid-cols-5 gap-[15px] md:max-w-full md:flex-nowrap xl:gap-[25px]">
    <div class="col-span-5 flex items-center md:col-span-3 lg:col-span-5 4xl:col-span-3">
      <UiLabel :label="$t('quantity')">
        <div class="flex items-center">
          <UiLabel :label="$t('from') + ':'" class="!flex-row items-center !text-black">
            <UiInputOutline
              v-model="inputs.minAmount"
              type="number"
              class="w-full max-w-[70px] md:max-w-[110px]"
            />
          </UiLabel>
          <UiLabel
            :label="$t('to') + ':'"
            class="ml-[10px] !flex-row items-center !text-black md:ml-[20px]"
          >
            <UiInputOutline
              v-model="inputs.maxAmount"
              type="number"
              class="w-full max-w-[70px] md:max-w-[110px]"
            />
          </UiLabel>
        </div>
      </UiLabel>
      <UiLabel
        :label="$t('add_product.unit_measurement') + ':'"
        class="ml-[10px] justify-items-start md:ml-[20px]"
      >
        <CommonSelectUnitMeasure
          v-model="inputs.unitId"
          :currentValue="getCurrentUnit.title"
          class="max-w-[90px] md:max-w-[110px]"
        />
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

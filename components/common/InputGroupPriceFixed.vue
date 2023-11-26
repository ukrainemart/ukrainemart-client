<script setup lang="ts">
  const props = defineProps<{
    price: PriceProduct['fixedPrice'];
  }>();

  // const inputs = ref<PriceProduct['fixedPrice']>({
  //   amount: '',
  //   price: '',
  //   unitId: '',
  // });
  const unitOptions: any = inject('unitOptions');

  // const emits = defineEmits(['update:price']);

  // const updateValue = () => {
  //   emits('update:price', inputs.value);
  // };

  const getCurrentUnit = computed(
    () => unitOptions.value?.find((el: any) => el.id === +props.price.unitId) || ''
  );
  console.log(getCurrentUnit.value);
  watchDeep(getCurrentUnit, () => {
    console.log(getCurrentUnit.value);
  });
</script>

<template>
  <div class="grid grid-cols-5 gap-[15px] md:max-w-full md:flex-nowrap xl:gap-[25px]">
    <div class="col-span-5 flex items-center md:col-span-3 lg:col-span-5 4xl:col-span-3">
      <UiLabel :label="$t('quantity') + ':'" class="w-full">
        <div class="flex w-full items-center">
          <UiInputOutline v-model="price.amount" required type="number" class="w-full" />
        </div>
      </UiLabel>
      <UiLabel
        for=""
        :label="$t('add_product.unit_measurement') + ':'"
        class="ml-[10px] justify-items-start md:ml-[20px]"
      >
        <CommonSelectUnitMeasure
          v-model="price.unitId"
          :currentValue="getCurrentUnit.title"
          class="max-w-[90px] md:max-w-[110px]"
        />
      </UiLabel>
    </div>
    <div class="col-span-5 md:col-span-2 lg:col-span-5 4xl:col-span-2">
      <UiLabel
        for=""
        class="relative z-50 4xl:max-w-none"
        :label="$t('add_product.enter_price') + ':'"
      >
        <CommonPriceInputOutline v-model:price="price.price" />
      </UiLabel>
    </div>
  </div>
</template>

<style scoped></style>

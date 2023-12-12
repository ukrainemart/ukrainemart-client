<script setup lang="ts">
  const props = defineProps<{
    price: PriceProduct['variatedPrice'];
  }>();

  const { value, errorMessage } = useField(
    () => 'price',
    {},
    {
      validateOnValueUpdate: false,
    }
  );

  const checkValidation = () => {
    console.log(props.price.unitId);

    if (props.price.maxAmount && props.price.minAmount && props.price.price && props.price.unitId) {
      value.value = true;
    } else {
      console.log(props.price);

      value.value = false;
    }
  };
  watchDeep(
    () => props.price,
    () => {
      checkValidation();
    }
  );

  checkValidation();
</script>

<template>
  <div class="grid grid-cols-5 gap-[15px] md:max-w-full md:flex-nowrap xl:gap-[25px]">
    <div class="col-span-5 flex items-center md:col-span-3 lg:col-span-5 4xl:col-span-3">
      <UiLabel :label="$t('quantity')">
        <div class="flex items-center">
          <UiLabel :label="$t('from') + ':'" class="!flex-row items-center !text-black">
            <UiInputOutline
              v-model="price.minAmount"
              placeholder="12"
              type="number"
              class="w-full max-w-[70px] md:max-w-[110px]"
            />
          </UiLabel>
          <UiLabel
            :label="$t('to') + ':'"
            class="ml-[10px] !flex-row items-center !text-black md:ml-[20px]"
          >
            <UiInputOutline
              v-model="price.maxAmount"
              placeholder="38"
              type="number"
              class="w-full max-w-[70px] md:max-w-[110px]"
            />
          </UiLabel>
        </div>
      </UiLabel>
      <UiLabel
        for=""
        :label="$t('add_product.unit_measurement') + ':'"
        styles="ml-[10px] whitespace-nowrap justify-items-start  md:ml-[20px]"
      >
        <PagesCreateProductSelectUnit class="max-w-[90px] whitespace-nowrap md:max-w-[110px]" />
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
  <UiAlertInputError v-if="errorMessage" :error="errorMessage" />
</template>

<style scoped></style>

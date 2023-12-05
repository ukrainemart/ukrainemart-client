<script setup lang="ts">
  const props = defineProps<{
    price: PriceProduct['fixedPrice'];
  }>();

  const { value, errorMessage } = useField(() => 'price');

  const checkValidation = () => {
    if (props.price.amount && props.price.price && props.price.unitId) {
      value.value = true;
    } else {
      value.value = false;
    }
  };

  watchDeep(
    () => props.price,
    () => {
      checkValidation();
    }
  );
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
        class="ml-[10px] justify-items-start whitespace-nowrap md:ml-[20px]"
      >
        <PagesCreateProductSelectUnit class="max-w-[90px] md:max-w-[110px]" />
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

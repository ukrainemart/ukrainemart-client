<script setup lang="ts">
  const props = defineProps<{
    price: PriceProduct['variatedPrice'];
  }>();

  const emits = defineEmits(['deletePrice']);

  const deletePrice = () => {
    emits('deletePrice');
  };

  const { value, errorMessage } = useField(
    () => 'price',
    {},
    {
      validateOnValueUpdate: false,
    }
  );

  const checkValidation = () => {

    if (props.price.maxAmount && props.price.minAmount && props.price.price && props.price.unitId) {
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

  checkValidation();
</script>

<template>
  <div class="grid grid-cols-12 gap-[15px] md:max-w-full md:flex-nowrap xl:gap-[25px]">
    <div
      class="col-span-12 flex items-center md:col-span-7 lg:col-span-6 2xl:col-span-12 4xl:col-span-7"
    >
      <UiLabel :label="$t('quantity')">
        <div class="flex items-center">
          <UiLabel :label="$t('from') + ':'" class="!flex-row items-center !text-black">
            <UiInputOutline
              v-model="price.minAmount"
              placeholder="12"
              type="number"
              :class="
                cn('w-full max-w-[70px] md:max-w-[110px]', {
                  '!border-status_red': errorMessage && !price.minAmount,
                })
              "
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
              :class="
                cn('w-full max-w-[70px] md:max-w-[110px]', {
                  '!border-status_red': errorMessage && !price.maxAmount,
                })
              "
            />
          </UiLabel>
        </div>
      </UiLabel>
      <UiLabel
        for=""
        :label="$t('add_product.unit_measurement') + ':'"
        styles="ml-[10px] whitespace-nowrap justify-items-start  md:ml-[20px]"
      >
        <PagesCreateProductSelectUnit
          :class="
            cn('max-w-[90px] whitespace-nowrap md:max-w-[110px]', {
              '!border-status_red': errorMessage && !price.unitId,
            })
          "
        />
      </UiLabel>
    </div>
    <div class="col-span-10 md:col-span-4 lg:col-span-5 2xl:col-span-10 4xl:col-span-4">
      <UiLabel
        for=""
        class="relative z-50 4xl:max-w-none"
        :label="$t('add_product.enter_price') + ':'"
      >
        <CommonPriceInputOutline
          v-model:price="price.price"
          :class="{
            '!border-status_red': errorMessage && !price.price,
          }"
        />
      </UiLabel>
    </div>
    <div
      class="input_outline_height col-span-2 flex items-center self-end justify-self-end md:col-span-1 2xl:col-span-2 4xl:col-span-1"
    >
      <UiButtonOpacityDelete @click="deletePrice" />
    </div>
  </div>
  <UiAlertInputError v-if="errorMessage" :error="errorMessage" />
</template>

<style scoped></style>

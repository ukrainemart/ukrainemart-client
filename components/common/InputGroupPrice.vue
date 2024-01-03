<script setup lang="ts">
  const props = defineProps<{
    fixedPrice: PriceProduct['fixedPrice'];
    variatedPrices: PriceProduct['variatedPrice'][];
    priceType: PriceProduct['type'];
    currentUnitId: any;
  }>();

  const emits = defineEmits(['update:fixedPrice', 'update:variatedPrices', 'update:priceType']);
  const changeVariated = (price: PriceProduct['variatedPrice'][]) => {
    emits('update:variatedPrices', price);
  };

  const changeType = (type: PriceProduct['type']) => {
    emits('update:priceType', type);
  };

  const type = ref<PriceProduct['type']>('');

  watch(type, () => {
    changeType(type.value);
  });
  const variated = ref<PriceProduct['variatedPrice'][]>([]);

  watchDeep(variated, () => {
    changeVariated(variated.value);
  });

  const getStartVariated = () => {
    variated.value = props.variatedPrices;
  };

  watchDeep(
    () => props.variatedPrices,
    () => {
      getStartVariated();
    }
  );
  getStartVariated();

  const addNewPrice = () => {
    const addablePrice = {
      minAmount: '',
      maxAmount: '',
      price: '',
      unitId: props.currentUnitId,
    } as PriceProduct['variatedPrice'];
    variated.value = [...variated.value, addablePrice];
  };

  const deletePrice = (indexPrice: number) => {
    variated.value = variated.value.filter((el, index: number) => index !== indexPrice);
  };

  const updateVariationPrice = (price: PriceProduct['variatedPrice']) => {
    variated.value = variated.value.map((el: PriceProduct['variatedPrice']) => {
      if (el.id === price.id) {
        return price;
      }
      return el;
    });
  };

  const { value, errorMessage } = useField(() => 'price');

  const checkValidation = () => {
    if (props.fixedPrice || props.variatedPrices.length > 0) {
      value.value = true;
    } else {
      value.value = false;
    }
  };

  watchDeep([() => props.fixedPrice, () => props.variatedPrices], () => {
    checkValidation();
  });
</script>

<template>
  <div class="mt-[24px] flex flex-col gap-[15px] md:mt-[30px] lg:mt-[43px] xl:gap-[25px]">
    <h5>
      <UiTextPortalPrimary class="xl:!text-[20px]"> {{ $t('price') }} </UiTextPortalPrimary>
    </h5>
    <div v-if="priceType === 'variated'" class="flex flex-col gap-[15px] xl:gap-[25px]">
      <CommonInputGroupPriceGap
        v-for="(price, index) in variatedPrices"
        :key="index"
        :price="price"
        @update:price="updateVariationPrice"
        @deletePrice="deletePrice(index)"
      />
    </div>
    <CommonInputGroupPriceFixed v-if="priceType === 'fixed'" v-model:price="props.fixedPrice" />

    <UiLabel for="" :label="$t('add_product.select_price_format') + ':'">
      <div class="flex items-center gap-[10px] md:gap-[15px] xl:gap-[20px]">
        <CommonSelectPriceVariant
          v-model="type"
          name="priceType"
          :validateOnValueUpdate="false"
          :selected="priceType"
        />
        <UiButtonOpacityAdding
          v-if="priceType === 'variated' && props.variatedPrices.length < 5"
          type="button"
          @click="addNewPrice"
        >
          {{ $t('add_product.add_new_price') }}
        </UiButtonOpacityAdding>
      </div>
    </UiLabel>
    <UiAlertInputError v-if="errorMessage" :error="errorMessage" />
  </div>
</template>

<style scoped></style>

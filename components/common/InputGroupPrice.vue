<script setup lang="ts">
  const props = defineProps<{
    fixedPrice: PriceProduct['fixedPrice'];
    variatedPrices: PriceProduct['variatedPrice'][];
    priceType: PriceProduct['type'];
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

  const addNewPrice = () => {
    const newPrice: PriceProduct['variatedPrice'] = {
      minAmount: '',
      maxAmount: '',
      price: '',
      unitId: '',
    } as PriceProduct['variatedPrice'];

    variated.value = [...variated.value, newPrice];
  };

  const updateVariationPrice = (price: PriceProduct['variatedPrice']) => {
    variated.value = variated.value.map((el: PriceProduct['variatedPrice']) => {
      if (el.id === price.id) {
        return price;
      }
      return el;
    });
  };
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
      />
    </div>
    <CommonInputGroupPriceFixed v-if="priceType === 'fixed'" v-model:price="props.fixedPrice" />

    <UiLabel for="" :label="$t('add_product.select_price_format') + ':'">
      <div class="flex items-center gap-[10px] md:gap-[15px] xl:gap-[20px]">
        <CommonSelectPriceVariant v-model="type" :selected="priceType" />
        <UiButtonOpacityAdding
          v-if="priceType === 'variated' && props.variatedPrices.length < 5"
          @click="addNewPrice"
        >
          {{ $t('add_product.add_new_price') }}
        </UiButtonOpacityAdding>
      </div>
    </UiLabel>
  </div>
</template>

<style scoped></style>

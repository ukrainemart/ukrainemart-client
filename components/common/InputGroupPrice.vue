<script setup lang="ts">
  defineProps<{
    fixedPrice: PriceProduct['fixedPrice'];
    variatedPrices: PriceProduct['variatedPrice'];
    priceType: PriceProduct['type'];
  }>();

  const emits = defineEmits(['update:fixedPrice', 'update:variatedPrices', 'update:priceType']);

  const changeFixed = (price: PriceProduct['fixedPrice']) => {
    emits('update:fixedPrice', price);
  };
  const changeVariated = (price: PriceProduct['variatedPrice'][]) => {
    console.log(price);

    emits('update:variatedPrices', price);
  };

  const changeType = (type: PriceProduct['type']) => {
    emits('update:priceType', type);
  };

  const type = ref<PriceProduct['type']>('');

  const fixed = ref<PriceProduct['fixedPrice']>({
    amount: '',
    price: '',
    unitId: '',
  });
  const variated = ref<PriceProduct['variatedPrice'][]>([
    {
      id: 1,
      minAmount: '',
      maxAmount: '',
      price: '',
      unitId: '',
    },
  ]);

  watchDeep(fixed, () => {
    changeFixed(fixed.value);
  });
  watchDeep(variated, () => {
    changeVariated(variated.value);
  });

  const addNewPrice = () => {
    const newPrice: PriceProduct['variatedPrice'] = {
      id: variated.value[variated.value.length - 1].id + 1,
      minAmount: '',
      maxAmount: '',
      price: '',
      unitId: '',
    };

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
    <div v-if="type === 'variated'" class="flex flex-col gap-[15px] xl:gap-[25px]">
      <CommonInputGroupPriceGap
        v-for="price in variated"
        :key="price.id"
        :price="price"
        @update:price="updateVariationPrice"
      />
    </div>
    <CommonInputGroupPriceFixed v-if="type === 'fixed'" v-model="fixed" />

    <UiLabel :label="$t('add_product.select_price_format') + ':'">
      <div class="flex items-center gap-[10px] md:gap-[15px] xl:gap-[20px]">
        <CommonSelectPriceVariant v-model="type" :selected="type" @change="changeType(type)" />
        <UiButtonOpacityAdding v-if="type === 'variated'" @click="addNewPrice">
          {{ $t('add_product.add_new_price') }}
        </UiButtonOpacityAdding>
      </div>
    </UiLabel>
  </div>
</template>

<style scoped></style>

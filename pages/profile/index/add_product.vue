<script setup lang="ts">
  // definePageMeta({
  //   middleware: ['company'],
  // });

  const inputs = ref<InputsCreateProduct>({} as InputsCreateProduct);

  const formData = () => {
    const data = new FormData();
    data.append('title_ua', inputs.value.titleUa);
    data.append('title_en', inputs.value.titleEn);
    data.append('description_ua', inputs.value.descriptionUa);
    data.append('description_en', inputs.value.descriptionEn);
    data.append('category_id', `${inputs.value.categoryId}`);
    data.append('price_type', inputs.value.priceType);
    if (inputs.value.fixedPrice) {
      data.append('amount', inputs.value.fixedPrice.amount);
      data.append('price', inputs.value.fixedPrice.price);
      data.append('unit_id', inputs.value.fixedPrice.unitId);
    }
    if (inputs.value.variatedPrices.length > 0) {
      data.append(
        'price_variations',
        JSON.stringify(
          inputs.value.variatedPrices.map((el) => {
            return {
              minAmount: el.minAmount,
              maxAmount: el.maxAmount,
              price: el.price,
              unitId: el.unitId,
            };
          })
        )
      );
    }
    for (const image of inputs.value.productImages) {
      data.append('product_images[]', image);
    }
    return data;
  };

  const onCreateProduct = () => {
    useApiFetch(`${useUrlApi()}/product/create`, {
      method: 'POST',
      body: formData(),
    }).then((res) => {
      console.log(res);
    });
  };
</script>

<template>
  <LayoutCreateProduct
    v-model:inputs="inputs"
    :title="$t('add_product.add_product')"
    :labelButtonSubmit="$t('add_product.add_product')"
    @actionSubmit="onCreateProduct"
  />
</template>

<style></style>

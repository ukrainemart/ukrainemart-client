<script setup lang="ts">
  definePageMeta({
    middleware: ['exporter'],
  });

  const error = ref('');
  const message = ref('');

  const inputs = ref<InputsCreateProduct>({
    fixedPrice: {
      amount: '',
      price: '',
      unitId: '',
    },
    variatedPrices: [],
    productImages: [],
  } as InputsCreateProduct);

  const formData = () => {
    const data = new FormData();
    data.append('title_ua', inputs.value.titleUa);
    data.append('title_en', inputs.value.titleEn);
    data.append('description_ua', inputs.value.descriptionUa);
    data.append('description_en', inputs.value.descriptionEn);
    data.append('category_id', `${inputs.value.categoryId}`);
    data.append('price_type', inputs.value.priceType);
    if (inputs.value.priceType === 'fixed' && inputs.value.fixedPrice) {
      data.append('amount', inputs.value.fixedPrice.amount);
      data.append('price', inputs.value.fixedPrice.price);
      data.append('unit_id', inputs.value.fixedPrice.unitId);
    }
    if (inputs.value.priceType === 'variated' && inputs.value.variatedPrices.length > 0) {
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

    const { productImages } = inputs.value;

    productImages.forEach((image, index) => {
      const fieldName = `product_images[${index + 1}]`;
      data.append(fieldName, image);
    });

    return data;
  };

  const onCreateProduct = () => {
    useApiFetch(`${useUrlApi()}/product/create`, {
      method: 'POST',
      body: formData(),
    }).then((res: any) => {
      if (res.data.value.status === 1) {
        message.value = '';
      }
      console.log(res);
    });
  };
</script>

<template>
  <LayoutCreateProduct
    v-model:inputs="inputs"
    :error="error"
    :message="message"
    :title="$t('add_product.add_product')"
    :labelButtonSubmit="$t('add_product.add_product')"
    @actionSubmit="onCreateProduct"
  />
</template>

<style></style>

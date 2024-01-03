<script setup lang="ts">
  definePageMeta({
    middleware: ['exporter'],
  });
  useTitle('add_product.add_product');
  const { t } = useI18n();
  const error = ref('');
  const message = ref('');

  const inputs = ref<InputsCreateProduct>({
    titleUa: '',
    titleEn: '',
    descriptionUa: '',
    descriptionEn: '',
    categoryId: '',
    priceType: '',
    fixedPrice: {
      amount: '',
      price: '',
      unitId: '',
    },
    variatedPrices: [],
    productImages: [],
    unitId: '',
    sections: {},
    certificates: [],
    tags: '',
  });

  const formData = () => {
    const data = new FormData();
    data.append('title_ua', inputs.value.titleUa);
    data.append('title_en', inputs.value.titleEn);
    data.append('description_ua', inputs.value.descriptionUa);
    data.append('description_en', inputs.value.descriptionEn);
    data.append('category_id', `${inputs.value.categoryId}`);
    data.append('price_type', inputs.value.priceType);
    data.append('tags', inputs.value.tags);
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
    Object.keys(inputs.value.sections).forEach((el) => {
      data.append(`${el}`, inputs.value.sections[`${el}`]);
    });

    const { productImages } = inputs.value;

    productImages.forEach((image, index) => {
      const fieldName = `product_images[${index + 1}]`;
      data.append(fieldName, image);
    });

    inputs.value.certificates.forEach((certificate, index) => {
      const fieldName = `certificates[${index + 1}]`;
      data.append(fieldName, certificate);
    });

    return data;
  };

  const onCreateProduct = () => {
    useApiFetch(`${useUrlApi()}/product/create`, {
      method: 'POST',
      body: formData(),
    })
      .then((res: any) => {
        if (res.data.value.status === 1) {
          navigateTo('/profile/my_products');
        }
      })
      .catch((err) => {
        error.value = t('fill_in_all_fields');
        console.log(err);
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

<script setup lang="ts">
  definePageMeta({
    middleware: ['exporter'],
  });
  const route = useRoute();

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
  } as InputsCreateProduct);
  const product = ref<Product>({} as Product);
  const productId = route.params.product_id;

  const getProductData = () => {
    useApiFetch(`${useUrlApi()}/product/show/${productId}`).then((res) => {
      const response: Product = res.data.value as Product;
      console.log(response);

      inputs.value.categoryId = String(response.category_id);
      inputs.value.descriptionEn = response.description_en;
      inputs.value.descriptionUa = response.description_ua;
      inputs.value.descriptionEn = response.description_en;
      inputs.value.titleEn = response.title_en;
      inputs.value.titleUa = response.title_ua;
      inputs.value.productImages = response.images?.map((el: any) => el.path) || [];
      inputs.value.priceType = response.price_type;
      if (response.price_type === 'fixed' && inputs.value.fixedPrice) {
        inputs.value.fixedPrice.amount = String(response.prices[0].min_amount) || '';
        inputs.value.fixedPrice.price = String(response.prices[0].price) || '';
        inputs.value.fixedPrice.unitId = String(response.prices[0].unit_id) || '';
      }
      if (response.price_type === 'variated') {
        inputs.value.variatedPrices = response.prices.map((price: PriceProduct['price']) => {
          const variatedPrice: PriceProduct['variatedPrice'] = {
            id: price.id,
            minAmount: String(price.min_amount),
            maxAmount: String(price.max_amount),
            price: String(price.price),
            unitId: String(price.unit_id),
          };

          return variatedPrice;
        });
      }
    });
  };

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

  const onEditProduct = () => {
    useApiFetch(`${useUrlApi()}/product/update/${productId}`, {
      method: 'POST',
      body: formData(),
    }).then((res) => {
      console.log(res);
    });
  };

  getProductData();
</script>

<template>
  <LayoutCreateProduct
    v-model:inputs="inputs"
    :product="product"
    :title="$t('add_product.edit_product')"
    :labelButtonSubmit="$t('add_product.edit_product')"
    @actionSubmit="onEditProduct"
  />
</template>

<style scoped></style>
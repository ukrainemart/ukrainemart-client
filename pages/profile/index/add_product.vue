<script setup lang="ts">
  const language = ref<Language>();
  const productImages = ref<any>([]);
  const categoryId = ref<any>(1);
  const priceType = ref<PriceProduct['type']>('');
  const fixedPrice = ref<PriceProduct['fixedPrice']>();

  const variatedPrices = ref<PriceProduct['variatedPrice'][]>([
    {
      id: 1,
      minAmount: '',
      maxAmount: '',
      price: '',
      unitId: 0,
    },
  ]);

  const addNewPrice = () => {
    const newPrice: PriceProduct['variatedPrice'] = {
      id: variatedPrices.value[variatedPrices.value.length - 1].id + 1,
      minAmount: '',
      maxAmount: '',
      price: '',
      unitId: 0,
    };

    variatedPrices.value = [...variatedPrices.value, newPrice];
  };

  const updateVariationPrice = (price: PriceProduct['variatedPrice']) => {
    variatedPrices.value = variatedPrices.value.map((el: PriceProduct['variatedPrice']) => {
      if (el.id === price.id) {
        return price;
      }
      return el;
    });
  };

  const formData = () => {
    const amount: any = 22;
    const price: any = 34;
    const unitId: any = 0;

    const data = new FormData();
    data.append('title_ua', 'Test Product');
    data.append('title_en', 'Test Product');
    data.append('description_ua', 'Test Product');
    data.append('description_en', 'Test Product');
    data.append('category_id', categoryId.value);
    data.append('price_type', 'fixed');
    data.append('amount', amount);
    data.append('price', price);
    data.append('unit_id', unitId);

    data.append('product_images', productImages.value);

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

  watchDeep(
    () => variatedPrices.value,
    () => {
      console.log(variatedPrices.value);
    }
  );
</script>

<template>
  <LayoutProfilePage :title="$t('add_product.add_product')">
    <form action="#" @submit.prevent="onCreateProduct">
      <div
        class="flex flex-col items-start gap-[25px] md:gap-[40px] xl:gap-[100px] 2xl:flex-row 3xl:gap-[141px]"
      >
        <div class="flex w-full max-w-[700px] flex-col 2xl:basis-[50%] 4xl:basis-[60%]">
          <CommonLangSwitcherInputs v-model="language" />

          <div class="mt-[15px] flex flex-col gap-[15px] md:mt-[20px] xl:mt-[26px] xl:gap-[25px]">
            <UiLabel
              v-show="language === 'ua'"
              :label="$t('add_product.enter_your_product_name') + ':'"
            >
              <UiInputOutline />
            </UiLabel>
            <UiLabel
              v-show="language === 'en'"
              :label="$t('add_product.enter_your_product_name') + ':'"
            >
              <UiInputOutline />
            </UiLabel>
            <UiLabel :label="$t('add_product.select_category') + ':'">
              <UiSelectOutline />
            </UiLabel>
            <UiLabel
              v-show="language === 'ua'"
              :label="$t('add_product.enter_product_description') + ':'"
            >
              <UiTextareaOutline class="min-h-[120px] md:min-h-[179px]" />
            </UiLabel>
            <UiLabel
              v-show="language === 'en'"
              :label="$t('add_product.enter_product_description') + ':'"
            >
              <UiTextareaOutline class="min-h-[120px] md:min-h-[179px]" />
            </UiLabel>
          </div>
          <div class="mt-[24px] flex flex-col gap-[15px] md:mt-[30px] lg:mt-[43px] xl:gap-[25px]">
            <div class="flex items-center gap-[20px] md:gap-[35px]">
              <UiLabel :label="$t('add_product.minimum_order') + ':'">
                <UiInputOutline class="max-w-[110px] md:max-w-[220px] xl:max-w-[200px]" />
              </UiLabel>
              <UiLabel :label="$t('add_product.unit_measurement') + ':'">
                <CommonSelectUnitMeasure class="max-w-[70px] md:max-w-[110px]" />
              </UiLabel>
            </div>
            <div class="flex items-center gap-[20px] md:gap-[35px]">
              <UiLabel
                :label="$t('add_product.type_packaging') + ':'"
                class="w-full max-w-[150px] md:max-w-[310px] xl:max-w-[235px]"
              >
                <UiSelectOutline />
              </UiLabel>
              <UiLabel class="w-full" :label="$t('add_product.expiration_date') + ':'">
                <UiInputOutline />
              </UiLabel>
            </div>
          </div>

          <div class="mt-[24px] flex flex-col gap-[15px] md:mt-[30px] lg:mt-[43px] xl:gap-[25px]">
            <h5>
              <UiTextPortalPrimary class="xl:!text-[20px]"> {{ $t('price') }} </UiTextPortalPrimary>
            </h5>
            <div v-if="priceType === 'variated'" class="flex flex-col gap-[15px] xl:gap-[25px]">
              <CommonInputGroupPriceGap
                v-for="price in variatedPrices"
                :key="price.id"
                :price="price"
                @update:price="updateVariationPrice"
              />
            </div>
            <CommonInputGroupPriceFixed v-if="priceType === 'fixed'" v-model="fixedPrice" />

            <UiLabel :label="$t('add_product.select_price_format') + ':'">
              <div class="flex items-center gap-[10px] md:gap-[15px] xl:gap-[20px]">
                <CommonSelectPriceVariant v-model="priceType" :selected="priceType" />
                <UiButtonOpacityAdding v-if="priceType === 'variated'" @click="addNewPrice">
                  {{ $t('add_product.add_new_price') }}
                </UiButtonOpacityAdding>
              </div>
            </UiLabel>
          </div>
        </div>
        <div class="w-full 2xl:basis-[50%] 4xl:basis-[40%]">
          <CommonAddingPhoto v-model="productImages" />
        </div>
      </div>
      <div class="mt-[30px] flex justify-center md:mt-[40px] xl:mt-[80px]">
        <UiButtonPrimary type="submit">{{ $t('add_product.add_product') }}</UiButtonPrimary>
      </div>
    </form>
  </LayoutProfilePage>
</template>

<style></style>

<script setup lang="ts">
  defineProps<{
    modelValue: InputsCreateProduct;
    title: string;
    labelButtonSubmit: string;
  }>();

  const language = ref<Language>();

  const emits = defineEmits(['update:modelValue', 'actionSubmit']);
  const actionSubmit = () => {
    emits('actionSubmit');
  };
  const formInputs = reactive({
    title_ua: '',
    title_en: '',
    description_ua: '',
    description_en: '',
    price_type: '',
    categoryId: '',
  });
  const fixedPrice = ref<PriceProduct['fixedPrice']>();
  const variatedPrices = ref<PriceProduct['variatedPrice'][]>([]);
  const productImages = ref<any>([]);
  const pageData = ref();

  const updateInputs = () => {
    const inputs: InputsCreateProduct = {
      titleUa: formInputs.title_ua,
      titleEn: formInputs.title_en,
      descriptionUa: formInputs.description_ua,
      descriptionEn: formInputs.description_en,
      categoryId: formInputs.categoryId,
      priceType: formInputs.price_type,
      fixedPrice: fixedPrice.value,
      variatedPrices: variatedPrices.value,
      productImages: productImages.value,
    };
    emits('update:modelValue', inputs);
  };

  const categoryOptions = computed(
    () =>
      pageData.value?.categories?.map((el: Category) => {
        return {
          id: el.id,
          title: useMultiLang(el, 'title'),
        };
      }) || []
  );
  const getCurrentCategory = computed(
    () => categoryOptions.value.find((el: any) => el.id === +formInputs.categoryId) || ''
  );

  const unitOptions = computed(
    () =>
      pageData.value?.units.map((el: Unit) => {
        return {
          id: el.id,
          title: useMultiLang(el, 'title'),
        };
      }) || []
  );

  const getPageData = () => {
    useApiFetch(`${useUrlApi()}/product/actionPage`).then((res: any) => {
      pageData.value = res.data.value;
    });
  };

  watchDeep([formInputs, fixedPrice, variatedPrices, productImages], () => {
    updateInputs();
  });

  getPageData();

  provide('unitOptions', unitOptions);
</script>

<template>
  <LayoutProfilePage :title="title">
    <form action="#" @submit.prevent="actionSubmit">
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
              <UiInputOutline v-model="formInputs.title_ua" />
            </UiLabel>
            <UiLabel
              v-show="language === 'en'"
              :label="$t('add_product.enter_your_product_name') + ':'"
            >
              <UiInputOutline v-model="formInputs.title_en" />
            </UiLabel>
            <UiLabel :label="$t('add_product.select_category') + ':'">
              <UiSelectOutline
                v-model="formInputs.categoryId"
                :options="categoryOptions"
                :currentValue="getCurrentCategory.title"
                value-attribute="id"
                option-attribute="title"
              />
            </UiLabel>
            <UiLabel
              v-show="language === 'ua'"
              :label="$t('add_product.enter_product_description') + ':'"
            >
              <UiTextareaOutline
                v-model="formInputs.description_ua"
                class="min-h-[120px] md:min-h-[179px]"
              />
            </UiLabel>
            <UiLabel
              v-show="language === 'en'"
              :label="$t('add_product.enter_product_description') + ':'"
            >
              <UiTextareaOutline
                v-model="formInputs.description_en"
                class="min-h-[120px] md:min-h-[179px]"
              />
            </UiLabel>
          </div>
          <!-- <div class="mt-[24px] flex flex-col gap-[15px] md:mt-[30px] lg:mt-[43px] xl:gap-[25px]">
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
          </div> -->

          <CommonInputGroupPrice
            v-model:fixedPrice="fixedPrice"
            v-model:variatedPrices="variatedPrices"
            v-model:priceType="formInputs.price_type"
          />
        </div>
        <div class="w-full 2xl:basis-[50%] 4xl:basis-[40%]">
          <CommonAddingPhoto v-model="productImages" />
        </div>
      </div>
      <div class="mt-[30px] flex justify-center md:mt-[40px] xl:mt-[80px]">
        <UiButtonPrimary type="submit">{{ labelButtonSubmit }}</UiButtonPrimary>
      </div>
    </form>
  </LayoutProfilePage>
</template>

<style scoped></style>

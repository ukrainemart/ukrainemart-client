<script setup lang="ts">
  const props = defineProps<{
    inputs: InputsCreateProduct;
    title: string;
    product?: Product;
    labelButtonSubmit: string;
    error: string;
    message: string;
  }>();
  const loadingRequest = ref(false);
  const language = ref<Language>('ua');
  const pageData = ref();
  const errorEn = ref(false);

  const emits = defineEmits(['update:inputs', 'actionSubmit']);
  const actionSubmit = async () => {
    loadingRequest.value = true;
    await emits('actionSubmit');
    setTimeout(() => {
      loadingRequest.value = false;
    }, 100);
  };

  const updateInputs = (value: any, input: keyof InputsCreateProduct) => {
    props.inputs[input] = value;
  };

  const currentUnitId = computed(() => props.inputs.unitId);
  const changeCurrentUnit = (unitId: any) => {
    updateInputs(unitId, 'unitId');

    if (props.inputs.priceType === 'fixed') {
      updateInputs(
        {
          amount: props.inputs.fixedPrice?.amount,
          price: props.inputs.fixedPrice?.price,
          unitId: currentUnitId.value,
        },
        'fixedPrice'
      );
      return false;
    }
    if (props.inputs.priceType === 'variated') {
      const newVariated: InputsCreateProduct['variatedPrices'][] = props.inputs.variatedPrices.map(
        (element: any) => ({
          ...element,
          unitId: currentUnitId.value,
        })
      );
      updateInputs(newVariated, 'variatedPrices');
      return false;
    }
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
    () => categoryOptions.value.find((el: any) => el.id === +props.inputs.categoryId) || ''
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

  getPageData();

  provide('unitOptions', unitOptions);
  provide('currentUnitId', currentUnitId);
  provide('changeCurrentUnit', changeCurrentUnit);
</script>

<template>
  <LayoutProfilePage :title="title">
    <VForm :validation-schema="validationCreateProductForm" @submit="actionSubmit">
      <div class="flex flex-col items-start gap-[25px] md:gap-[40px] xl:gap-[100px] 2xl:flex-row">
        <div class="flex w-full max-w-[700px] flex-col 2xl:basis-[50%] 4xl:basis-[70%]">
          <CommonLangSwitcherInputs v-model="language" :errorEn="errorEn" />

          <div class="mt-[15px] flex flex-col gap-[15px] md:mt-[20px] xl:mt-[26px] xl:gap-[25px]">
            <UiLabel
              v-show="language === 'ua'"
              :label="$t('add_product.enter_your_product_name') + ':'"
            >
              <UiInputOutlineValidate
                v-model="inputs.titleUa"
                :placeholder="$t('placeholders.title_ua_product')"
                :validateOnValueUpdate="false"
                name="titleUa"
              />
            </UiLabel>
            <UiLabel
              v-show="language === 'en'"
              :label="$t('add_product.enter_your_product_name') + ':'"
            >
              <UiInputOutlineValidate
                v-model="inputs.titleEn"
                :validateOnValueUpdate="false"
                :placeholder="$t('placeholders.title_en_product')"
                name="titleEn"
              />
            </UiLabel>
            <UiLabel for="" :label="$t('add_product.select_category') + ':'">
              <UiSelectOutlineValidate
                v-model="inputs.categoryId"
                :placeholder="$t('placeholders.category')"
                name="categoryId"
                :validateOnValueUpdate="false"
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
              <UiTextareaOutlineValidate
                v-model="inputs.descriptionUa"
                :validateOnValueUpdate="false"
                :placeholder="$t('placeholders.description_ua_product')"
                name="descriptionUa"
                required
                class="min-h-[120px] md:min-h-[179px]"
              />
            </UiLabel>
            <UiLabel
              v-show="language === 'en'"
              :label="$t('add_product.enter_product_description') + ':'"
            >
              <UiTextareaOutlineValidate
                v-model="inputs.descriptionEn"
                :validateOnValueUpdate="false"
                :placeholder="$t('placeholders.description_en_product')"
                name="descriptionEn"
                required
                class="min-h-[120px] md:min-h-[179px]"
              />
            </UiLabel>
          </div>
          <PagesCreateProductAddSections
            v-if="inputs.categoryId"
            v-model="inputs.sections"
            :categoryId="inputs.categoryId"
            :language="language"
          />

          <CommonInputGroupPrice
            v-model:fixedPrice="inputs.fixedPrice"
            v-model:variatedPrices="inputs.variatedPrices"
            v-model:priceType="inputs.priceType"
            :currentUnitId="currentUnitId"
          />
          <UiLabel class="mt-[15px] xl:mt-[25px]" :label="$t('labels.tags') + ':'">
            <UiTextareaOutline
              v-model="inputs.tags"
              :placeholder="$t('labels.enter_tags')"
              class="min-h-[120px] md:min-h-[179px]"
            />
          </UiLabel>
        </div>
        <div class="w-full 2xl:basis-[50%] 4xl:basis-[30%]">
          <CommonAddingPhoto v-model="inputs.productImages" />

          <div class="mt-[29px] md:mt-[35px]">
            <CommonAddingCertificate v-model="inputs.certificates" />
          </div>
        </div>
      </div>
      <UiAlertTextDanger v-if="error" class="mt-[15px] xl:mt-[20px]">{{ error }}</UiAlertTextDanger>
      <div class="mt-[30px] flex justify-center md:mt-[40px] xl:mt-[80px]">
        <PagesCreateProductButtonSendForm
          v-model:errorEn="errorEn"
          :inputs="inputs"
          :loading="loadingRequest"
          >{{ labelButtonSubmit }}</PagesCreateProductButtonSendForm
        >
      </div>
    </VForm>
  </LayoutProfilePage>
</template>

<style scoped></style>

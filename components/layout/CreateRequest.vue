<script setup lang="ts">
  defineProps<{
    title: string;
    inputs: InputsCreateRequest;
    error: string;
  }>();
  const emits = defineEmits(['update:inputs', 'actionSubmit']);

  type PageData = {
    categories: Category[];
    units: Unit[];
    countries: Country;
  };

  const pageData = ref<PageData>();
  const loadingRequest = ref(false);

  const actionSubmit = async () => {
    loadingRequest.value = true;
    await emits('actionSubmit');
    setTimeout(() => {
      loadingRequest.value = false;
    }, 100);
  };

  const fetchActionPage = () => {
    useApiFetch(`${useUrlApi()}/importRequest/actionPage`).then((res) => {
      pageData.value = res.data.value as PageData;
    });
  };

  fetchActionPage();
</script>

<template>
  <LayoutProfilePage :title="title">
    <VForm :validation-schema="validationCreateRequestForm" @submit="actionSubmit">
      <div class="flex flex-col gap-[15px] md:flex-row md:gap-[50px] xl:gap-[135px]">
        <div class="flex flex-col gap-[15px] md:basis-[50%] xl:gap-[25px]">
          <UiLabel :label="`${$t('labels.title')}`">
            <UiInputOutlineValidate
              v-model="inputs.title"
              :validateOnValueUpdate="false"
              name="title"
              :placeholder="`${$t('labels.enter_title_your_request')}`"
            />
          </UiLabel>
          <UiLabel for="" :label="`${$t('category.singular')}`">
            <PagesCreateRequestSelectCategory
              v-model="inputs.categoryId"
              name="categoryId"
              :validateOnValueUpdate="false"
              :categories="pageData?.categories"
            />
          </UiLabel>
          <UiLabel :label="`${$t('labels.enter_description')}`">
            <UiTextareaOutlineValidate
              v-model="inputs.description"
              :validateOnValueUpdate="false"
              name="description"
              :placeholder="`${$t('labels.enter_description')}`"
              class="min-h-[120px] md:min-h-[179px]"
            />
          </UiLabel>
        </div>
        <div class="flex flex-col gap-[15px] md:basis-[50%] xl:gap-[25px]">
          <UiLabel for="" class="relative z-[60]" :label="`${$t('labels.country')}`">
            <PagesCreateRequestSelectCountry
              v-model="inputs.country"
              :validateOnValueUpdate="false"
              name="country"
              :countries="pageData?.countries"
            />
          </UiLabel>

          <!-- <UiLabel class="relative z-50" :label="`${$t('delivery')}`">
            <div class="flex items-center justify-between">
              <UiLabel
                :label="$t('from') + ':'"
                class="basis-[33%] !flex-row items-center !text-black xl:basis-auto"
              >
                <UiInputOutlineValidate
                  v-model="inputs.dateBefore"
                  name="dateBefore"
                  :message="false"
                  type="number"
                  :placeholder="`10`"
                  class="w-full md:max-w-[110px]"
                />
              </UiLabel>
              <UiLabel
                :label="$t('to') + ':'"
                class="ml-[10px] basis-[33%] !flex-row items-center !text-black md:ml-[20px] xl:basis-auto"
              >
                <UiInputOutlineValidate
                  v-model="inputs.dateFrom"
                  :message="false"
                  name="dateFrom"
                  :placeholder="`15`"
                  type="number"
                  class="w-full md:max-w-[110px]"
                />
              </UiLabel>
              <PagesCreateRequestSelectDateType
                v-model="inputs.dataType"
                name="dataType"
                class="ml-[19px] flex-1 basis-[33%] md:ml-[20px] xl:ml-[35px] xl:basis-auto"
              />
            </div>
          </UiLabel> -->
          <div
            class="flex items-center justify-between gap-[19px] md:gap-[20px] xl:justify-start xl:gap-[35px]"
          >
            <UiLabel :label="`${$t('quantity')}`" class="basis-[60%] xl:basis-auto">
              <UiInputOutlineValidate
                v-model="inputs.count"
                name="count"
                :message="false"
                :validateOnValueUpdate="false"
                type="number"
                :placeholder="`20`"
              />
            </UiLabel>
            <UiLabel
              for=""
              :label="`${$t('add_product.unit_measurement')}`"
              class="basis-[40%] xl:basis-auto"
            >
              <PagesCreateRequestSelectUnit
                v-model="inputs.countType"
                :validateOnValueUpdate="false"
                name="countType"
                :units="pageData?.units"
              />
            </UiLabel>
          </div>
          <UiLabel :label="`${$t('labels.request_validity_period')}`">
            <UiDatePickerValidate
              v-model="inputs.activeBefore"
              :validateOnValueUpdate="false"
              name="activeBefore"
              :placeholder="`${$t('labels.choose_a_date')}`"
            />
          </UiLabel>
        </div>
      </div>
      <UiAlertTextDanger v-if="error" class="mt-[15px] xl:mt-[20px]">{{ error }}</UiAlertTextDanger>
      <div class="mt-[30px] flex justify-center md:mt-[40px] xl:mt-[80px]">
        <UiButtonPrimaryLoading :loading="loadingRequest" type="submit">{{
          title
        }}</UiButtonPrimaryLoading>
      </div>
    </VForm>
  </LayoutProfilePage>
</template>

<style scoped></style>

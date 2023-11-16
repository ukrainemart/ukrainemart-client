<script setup lang="ts">
  const language = ref<Language>();
  const productImages = ref<any>([]);
  const categoryId = ref<any>(1);

  const formData = () => {
    const data = new FormData();
    data.append('title_ua', 'Test Product');
    data.append('title_en', 'Test Product');
    data.append('description_ua', 'Test Product');
    data.append('description_en', 'Test Product');
    data.append('category_id', categoryId.value);
    data.append('product_type', 'fixed');
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
                <UiSelectOutline class="max-w-[70px] md:max-w-[110px]" />
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
            <div class="grid grid-cols-5 gap-[15px] md:max-w-full md:flex-nowrap xl:gap-[25px]">
              <div class="col-span-5 flex items-center md:col-span-3 lg:col-span-5 4xl:col-span-3">
                <UiLabel :label="$t('quantity')">
                  <div class="flex items-center">
                    <UiLabel :label="$t('from') + ':'" class="!flex-row items-center !text-black">
                      <UiInputOutline class="w-full max-w-[70px] md:max-w-[110px]" />
                    </UiLabel>
                    <UiLabel
                      :label="$t('to') + ':'"
                      class="ml-[10px] !flex-row items-center !text-black md:ml-[20px]"
                    >
                      <UiInputOutline class="w-full max-w-[70px] md:max-w-[110px]" />
                    </UiLabel>
                  </div>
                </UiLabel>
                <UiLabel
                  :label="$t('add_product.unit_measurement') + ':'"
                  class="ml-[10px] justify-items-start md:ml-[20px]"
                >
                  <UiSelectOutline class="max-w-[90px] md:max-w-[110px]" />
                </UiLabel>
              </div>
              <div class="col-span-5 md:col-span-2 lg:col-span-5 4xl:col-span-2">
                <UiLabel
                  class="relative z-50 4xl:max-w-[220px]"
                  :label="$t('add_product.enter_price') + ':'"
                >
                  <CommonPriceInputOutline />
                </UiLabel>
              </div>
            </div>

            <UiLabel :label="$t('add_product.select_price_format') + ':'">
              <div class="flex items-center gap-[10px] md:gap-[15px] xl:gap-[20px]">
                <UiSelectOutline class="w-full max-w-[130px] md:max-w-[220px] xl:max-w-[200px]" />
                <UiButtonOpacityAdding>
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

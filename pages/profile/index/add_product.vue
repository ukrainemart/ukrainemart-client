<script setup lang="ts">
  const language = ref<Language>();
</script>

<template>
  <LayoutProfilePage title="Додати товари">
    <div
      class="flex flex-col items-start gap-[25px] md:gap-[40px] xl:gap-[100px] 2xl:flex-row 3xl:gap-[141px]"
    >
      <div class="flex w-full max-w-[700px] flex-col 2xl:basis-[50%] 4xl:basis-[60%]">
        <CommonLangSwitcherInputs v-model="language" />

        <div class="mt-[15px] flex flex-col gap-[15px] md:mt-[20px] xl:mt-[26px] xl:gap-[25px]">
          <UiLabel v-show="language === 'ua'" label="Введіть назву вашого товару:">
            <UiInputOutline />
          </UiLabel>
          <UiLabel v-show="language === 'en'" label="Введіть назву вашого товару:">
            <UiInputOutline />
          </UiLabel>
          <UiLabel label="Оберіть категорію:">
            <UiSelectOutline />
          </UiLabel>
          <UiLabel v-show="language === 'ua'" label="Введіть опис товару:">
            <UiTextareaOutline class="min-h-[120px] md:min-h-[179px]" />
          </UiLabel>
          <UiLabel v-show="language === 'en'" label="Введіть опис товару:">
            <UiTextareaOutline class="min-h-[120px] md:min-h-[179px]" />
          </UiLabel>
        </div>
        <div class="mt-[24px] flex flex-col gap-[15px] md:mt-[30px] lg:mt-[43px] xl:gap-[25px]">
          <div class="flex items-center gap-[20px] md:gap-[35px]">
            <UiLabel label="Мінімальне замовлення:">
              <UiInputOutline class="max-w-[110px] md:max-w-[220px] xl:max-w-[200px]" />
            </UiLabel>
            <UiLabel label="Одиниця виміру:">
              <UiSelectOutline class="max-w-[70px] md:max-w-[110px]" />
            </UiLabel>
          </div>
          <div class="flex items-center gap-[20px] md:gap-[35px]">
            <UiLabel
              label="Тип пакування:"
              class="w-full max-w-[150px] md:max-w-[310px] xl:max-w-[235px]"
            >
              <UiSelectOutline />
            </UiLabel>
            <UiLabel class="w-full" label="Термін придатності:">
              <UiInputOutline />
            </UiLabel>
          </div>
        </div>

        <div class="mt-[24px] flex flex-col gap-[15px] md:mt-[30px] lg:mt-[43px] xl:gap-[25px]">
          <h5>
            <UiTextPortalPrimary class="xl:!text-[20px]"> Ціна </UiTextPortalPrimary>
          </h5>
          <div class="grid grid-cols-5 gap-[15px] md:max-w-full md:flex-nowrap xl:gap-[25px]">
            <div class="col-span-5 flex items-center md:col-span-3 lg:col-span-5 4xl:col-span-3">
              <UiLabel label="Кількість:">
                <div class="flex items-center">
                  <UiLabel label="від" class="!flex-row items-center !text-black">
                    <UiInputOutline class="w-full max-w-[70px] md:max-w-[110px]" />
                  </UiLabel>
                  <UiLabel
                    label="до"
                    class="ml-[10px] !flex-row items-center !text-black md:ml-[20px]"
                  >
                    <UiInputOutline class="w-full max-w-[70px] md:max-w-[110px]" />
                  </UiLabel>
                </div>
              </UiLabel>
              <UiLabel label="Одиниця виміру:" class="ml-[10px] justify-items-start md:ml-[20px]">
                <UiSelectOutline class="max-w-[90px] md:max-w-[110px]" />
              </UiLabel>
            </div>
            <div class="col-span-5 md:col-span-2 lg:col-span-5 4xl:col-span-2">
              <UiLabel class="relative z-50 4xl:max-w-[220px]" label="Введіть ціну:">
                <CommonPriceInputOutline />
              </UiLabel>
            </div>
          </div>

          <UiLabel label="Оберіть формат ціни:">
            <div class="flex items-center gap-[10px] md:gap-[15px] xl:gap-[20px]">
              <UiSelectOutline class="w-full max-w-[130px] md:max-w-[220px] xl:max-w-[200px]" />
              <UiButtonOpacityAdding> Додати нову ціну </UiButtonOpacityAdding>
            </div>
          </UiLabel>
        </div>
      </div>
      <div class="w-full 2xl:basis-[50%] 4xl:basis-[40%]">
        <CommonAddingPhoto />
      </div>
    </div>
    <div class="mt-[30px] flex justify-center md:mt-[40px] xl:mt-[80px]">
      <UiButtonPrimary>Додати товар</UiButtonPrimary>
    </div>
  </LayoutProfilePage>
</template>

<style></style>

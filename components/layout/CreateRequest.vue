<script setup lang="ts">
  defineProps<{
    title: string;
  }>();
</script>

<template>
  <LayoutProfilePage :title="title">
    <div class="flex flex-col gap-[15px] md:flex-row md:gap-[50px] xl:gap-[135px]">
      <div class="flex flex-col gap-[15px] md:basis-[50%] xl:gap-[25px]">
        <UiLabel :label="`${$t('labels.title')}`">
          <UiInputOutline :placeholder="`${$t('labels.enter_title_your_request')}`" />
        </UiLabel>
        <UiLabel :label="`${$t('category')}`">
          <UiSelectOutline :placeholder="`${$t('add_product.select_category')}`" />
        </UiLabel>
        <UiLabel :label="`${$t('labels.enter_description')}`">
          <UiTextareaOutline
            :placeholder="`${$t('labels.enter_description')}`"
            class="min-h-[120px] md:min-h-[179px]"
          />
        </UiLabel>
      </div>
      <div class="flex flex-col gap-[15px] md:basis-[50%] xl:gap-[25px]">
        <UiLabel :label="`${$t('labels.country')}`">
          <UiSelectOutline :placeholder="`${$t('labels.select_country')}`" />
        </UiLabel>

        <UiLabel :label="`${$t('labels.country')}`">
          <div class="flex items-center justify-between">
            <UiLabel
              :label="$t('from') + ':'"
              class="basis-[33%] !flex-row items-center !text-black xl:basis-auto"
            >
              <UiInputOutline type="number" :placeholder="`10`" class="w-full md:max-w-[110px]" />
            </UiLabel>
            <UiLabel
              :label="$t('to') + ':'"
              class="ml-[10px] basis-[33%] !flex-row items-center !text-black md:ml-[20px] xl:basis-auto"
            >
              <UiInputOutline :placeholder="`15`" type="number" class="w-full md:max-w-[110px]" />
            </UiLabel>
            <UiSelectOutline
              :placeholder="`${$t('labels.days')}`"
              class="ml-[19px] flex-1 basis-[33%] md:ml-[20px] xl:ml-[35px] xl:basis-auto"
            />
          </div>
        </UiLabel>
        <div
          class="flex items-center justify-between gap-[19px] md:gap-[20px] xl:justify-start xl:gap-[35px]"
        >
          <UiLabel :label="`${$t('quantity')}`" class="basis-[60%] xl:basis-auto">
            <UiInputOutline :placeholder="`20`" />
          </UiLabel>
          <UiLabel
            :label="`${$t('add_product.unit_measurement')}`"
            class="basis-[40%] xl:basis-auto"
          >
            <UiSelectOutline />
          </UiLabel>
        </div>
        <UiLabel :label="`${$t('labels.request_validity_period')}`">
          <UiInputOutline />
        </UiLabel>
      </div>
    </div>
    <div class="mt-[30px] flex justify-center md:mt-[40px] xl:mt-[80px]">
      <UiButtonPrimary>{{ title }}</UiButtonPrimary>
    </div>
  </LayoutProfilePage>
</template>

<style scoped></style>
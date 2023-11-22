<script setup lang="ts">
  defineProps<{
    category: Category;
  }>();

  // const value = ref(50); // REVIEW remove it
</script>

<template>
  <div>
    <div class="mb-5">
      <PagesCategoryFilterTitle>Каталог</PagesCategoryFilterTitle>
      <PagesCategoryBreadcrumbs :category="category" />
    </div>

    <div class="mb-5">
      <PagesCategoryFilterTitle>Особливості постачальника</PagesCategoryFilterTitle>

      <UiLabel
        htmlFor="checkboxId1"
        label="Верифікований постачальник"
        styles="flex-row-reverse w-fit justify-end items-center text-black text-[10px] gap-[7px]"
      >
        <UiCheckbox id="checkboxId1" :model-value="true" />
      </UiLabel>
    </div>

    <div class="mb-5">
      <PagesCategoryFilterTitle>Особливості товару</PagesCategoryFilterTitle>

      <UiLabel
        htmlFor="checkboxId2"
        label="Готовий до відправки"
        styles="flex-row-reverse w-fit justify-end items-center text-black text-[10px] gap-[7px] mb-[7px]"
      >
        <UiCheckbox id="checkboxId2" :model-value="false" />
      </UiLabel>
      <UiLabel
        htmlFor="checkboxId3"
        label="Платні зразки"
        styles="flex-row-reverse w-fit justify-end items-center text-black text-[10px] gap-[7px]"
      >
        <UiCheckbox id="checkboxId3" :model-value="false" />
      </UiLabel>
    </div>

    <div class="mb-5">
      <PagesCategoryFilterTitle>Мінімальне замовлення</PagesCategoryFilterTitle>
      <div class="flex gap-[10px]">
        <UiInputOutline />
        <UiButtonPrimary>Ok</UiButtonPrimary>
      </div>
    </div>

    <!-- TODO Copy PriceFilter from kuzka-shop
    <div class="mb-5">
      <PagesCategoryFilterTitle>Ціна</PagesCategoryFilterTitle>
      <URange v-model="value" name="range" />
      <div>
        <UiInputOutline />
        <UiInputOutline />
      </div>
    </div> -->

    <!-- <UiButtonPrimary>Застосувати</UiButtonPrimary> -->
  </div>
</template>

<style></style>

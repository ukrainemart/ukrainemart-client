<script setup lang="ts"></script>

<template>
  <UiSectionTitle class="lg:!pb-[100px] lg:!pt-[130xp] xl:!pb-[178px]">
    <template #title>
      <span class="m-auto block w-fit">
        {{ $t('ourPartners') }}
      </span>
    </template>
    <template #content>
      <div class="mt-[40px] flex items-center justify-center gap-[50px] lg:flex-row lg:gap-[150px]">
        <div>
          <img class="w-full max-w-[700px]" src="@img/partners_ministerstvo.png" alt="" />
        </div>
        <div>
          <img class="w-full max-w-[480px]" src="@img/partners_promyslova_palate.png" alt="" />
        </div>
      </div>
    </template>
  </UiSectionTitle>
</template>

<style scoped></style>

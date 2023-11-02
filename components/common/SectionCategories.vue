<script setup lang="ts"></script>

<template>
  <div class="bg-white py-[15px] md:py-[23px] 4xl:py-[35px]">
    <div class="no-scrollbar overflow-scroll lg:container">
      <div
        class="flex items-center gap-[20px] md:gap-[35px] 2xl:justify-between 4xl:w-auto 4xl:gap-[0px]"
      >
        <ul class="flex items-center gap-[20px] md:gap-[35px] 4xl:gap-[55px]">
          <li>
            <CommonCategoryItem>
              <template #title> Продукти та агрокультура </template>
              <template #icon>
                <SvgoAgriculture class="!h-full !w-full"></SvgoAgriculture>
              </template>
            </CommonCategoryItem>
          </li>
          <li>
            <CommonCategoryItem>
              <template #title> Електроніка </template>
              <template #icon>
                <SvgoElectronics class="!h-full !w-full"></SvgoElectronics>
              </template>
            </CommonCategoryItem>
          </li>
          <li>
            <CommonCategoryItem>
              <template #title> Ліки та добавки </template>
              <template #icon>
                <SvgoMedicine class="!h-full !w-full"></SvgoMedicine>
              </template>
            </CommonCategoryItem>
          </li>
          <li>
            <CommonCategoryItem>
              <template #title> Добрива </template>
              <template #icon>
                <SvgoFertilizers class="!h-full !w-full"></SvgoFertilizers>
              </template>
            </CommonCategoryItem>
          </li>
          <li>
            <CommonCategoryItem>
              <template #title> Автозапчастини </template>
              <template #icon>
                <SvgoAutoPart class="!h-full !w-full"></SvgoAutoPart>
              </template>
            </CommonCategoryItem>
          </li>
          <li>
            <CommonCategoryItem>
              <template #title> Будівельні матеріали </template>
              <template #icon>
                <SvgoBuilding class="!h-full !w-full"></SvgoBuilding>
              </template>
            </CommonCategoryItem>
          </li>
        </ul>
        <CommonCategoryItem class="flex-row-reverse text-right">
          <template #title> Більше категорій </template>
          <template #icon>
            <SvgoArrowRightSecond class="!h-full !w-full"></SvgoArrowRightSecond>
          </template>
        </CommonCategoryItem>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

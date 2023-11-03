<script setup lang="ts"></script>

<template>
  <div class="bg-white py-[15px] md:py-[23px] 4xl:py-[35px]">
    <div class="container no-scrollbar overflow-scroll ">
      <div
        class="flex items-center gap-[20px] md:gap-[35px] 2xl:justify-between 4xl:w-auto 4xl:gap-[0px]"
      >
        <ul class="flex items-center gap-[20px] md:gap-[35px] lg:gap-[15px] xl:gap-[25px] 4xl:gap-[35px]">
          <li>
            <CommonCategoryItem title="Продукти та агрокультура">
              <SvgoAgriculture class="!h-full !w-full" />
            </CommonCategoryItem>
          </li>
          <li>
            <CommonCategoryItem title="Електроніка">
              <SvgoElectronics class="!h-full !w-full" />
            </CommonCategoryItem>
          </li>
          <li>
            <CommonCategoryItem title="Ліки та добавки">
              <SvgoMedicine class="!h-full !w-full" />
            </CommonCategoryItem>
          </li>
          <li>
            <CommonCategoryItem title="Добрива">
              <SvgoFertilizers class="!h-full !w-full" />
            </CommonCategoryItem>
          </li>
          <li>
            <CommonCategoryItem title="Авто запчастини">
              <SvgoAutoPart class="!h-full !w-full" />
            </CommonCategoryItem>
          </li>
          <li>
            <CommonCategoryItem title="Будівельні матеріали">
              <SvgoBuilding class="!h-full !w-full" />
            </CommonCategoryItem>
          </li>
        </ul>
        <CommonCategoryItem title="Більше категорій" class="flex-row-reverse text-right">
          <SvgoArrowRightSecond class="!h-full !w-full" />
        </CommonCategoryItem>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

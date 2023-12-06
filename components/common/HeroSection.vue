<script setup lang="ts"></script>

<template>
  <div class="flex h-header-sm flex-col overflow-x-hidden lg:h-header-lg 4xl:h-header-4xl">
    <div class="flex flex-1 flex-col items-center justify-center px-5 text-center">
      <h1
        class="mb-2.5 font-namu text-[55px] font-light leading-[66px] text-black md:mb-[13px] md:text-[95px] md:leading-[114px] lg:mb-[15px] lg:text-[130px] lg:leading-[156px]"
      >
        {{ $t('logo') }}
      </h1>

      <p
        class="mx-auto mb-[15px] max-w-[1182px] text-[10px] font-medium text-black md:mb-[30px] md:text-[14px] lg:mb-10 lg:text-[17px]"
      >
        {{ $t('companyDescription') }}
      </p>

      <CommonSearch />
    </div>

    <CommonSectionCategories />
  </div>
</template>

<style></style>

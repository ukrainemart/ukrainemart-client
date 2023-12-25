<script setup lang="ts">
  useTitle('Error');
</script>

<template>
  <LayoutBase>
    <LayoutHeader isLogo />

    <div class="flex flex-col items-center justify-center pb-[120px] pt-[55px] md:pb-[190px]">
      <h1
        class="mb-2.5 font-namu text-[110px] leading-[132px] md:text-[170px] md:leading-[204px] 3xl:mb-[20px] 3xl:text-[250px] 3xl:leading-[300px]"
      >
        {{ $t('error404') }}
      </h1>

      <p
        class="mb-[50px] text-[20px] font-medium md:mb-[60px] md:text-[27px] 3xl:mb-[90px] 3xl:text-[35px]"
      >
        {{ $t('pageNotFound') }}
      </p>

      <UiButtonOutline to="/" styles="max-w-[95px] md:max-w-[122px] 3xl:max-w-[154px]">
        {{ $t('catalog.back') }}
      </UiButtonOutline>
    </div>

    <LayoutFooter />
  </LayoutBase>
</template>

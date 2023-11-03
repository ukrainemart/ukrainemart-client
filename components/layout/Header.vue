<script setup lang="ts">
  defineProps<{
    isLogo?: boolean;
  }>();

  const isMobileMenu = ref(false);

  const switchMenu = (value: boolean) => {
    isMobileMenu.value = value;
  };

  // provide('switchMenu', switchMenu); // REVIEW why do we need this?
</script>

<template>
  <header class="relative">
    <div class="mx-auto max-w-[1780px] px-5 py-[25px] md:px-10 md:py-[30px] lg:py-10">
      <div class="flex justify-between">
        <div class="hidden gap-[35px] xl:flex">
          <UiButtonText styles="">Каталог</UiButtonText>

          <UiButtonTextIconArrowDown>Для українських експортерів</UiButtonTextIconArrowDown>

          <UiButtonTextIconArrowDown>Для міжнародних імпортерів</UiButtonTextIconArrowDown>
        </div>

        <div class="flex gap-5 xl:flex-row-reverse">
          <UiButtonPrimary>Увійти</UiButtonPrimary>
          <UiButtonText>Зареєструватися</UiButtonText>
        </div>

        <div class="relative z-50 flex xl:hidden">
          <CommonButtonBurger :isActive="isMobileMenu" @click="switchMenu(!isMobileMenu)" />
        </div>
      </div>
    </div>

    <CommonBurgerMenu :isActive="isMobileMenu" />
  </header>
</template>

<script setup lang="ts">
  defineProps<{
    isLogo?: boolean;
  }>();

  const isMobileMenu = ref(false);
  const isAuthModal = ref(false);
  const typeAuth = ref<SwitchAuth>('login');

  const switchTypeAuth = (type: SwitchAuth) => {
    typeAuth.value = type;
  };

  const switchAuth = (value: boolean, type: SwitchAuth) => {
    isAuthModal.value = value;
    switchTypeAuth(type);
  };

  const switchMenu = (value: boolean) => {
    isMobileMenu.value = value;
  };

  // provide('switchMenu', switchMenu); // REVIEW why do we need this?
</script>

<template>
  <header class="relative">
    <div class="mx-auto max-w-[1780px] px-5 py-[25px] md:px-10 md:py-[30px] lg:py-10">
      <div class="flex justify-between">
        <div class="hidden gap-[35px] 2xl:flex">
          <UiButtonText styles="">Каталог</UiButtonText>

          <UiButtonTextIconArrowDown>Для українських експортерів</UiButtonTextIconArrowDown>

          <UiButtonTextIconArrowDown>Для міжнародних імпортерів</UiButtonTextIconArrowDown>
        </div>

        <div class="flex gap-5 2xl:flex-row-reverse">
          <UiButtonPrimary @click="switchAuth(true, 'login')">Увійти</UiButtonPrimary>
          <UiButtonText @click="switchAuth(true, 'register')">Зареєструватися</UiButtonText>
          <UiButtonTextIconArrowDown class="2xl:flex">UA</UiButtonTextIconArrowDown>
        </div>

        <div class="relative z-50 flex 2xl:hidden">
          <CommonButtonBurger :isActive="isMobileMenu" @click="switchMenu(!isMobileMenu)" />
        </div>
      </div>
      <AuthBase v-model="isAuthModal" :type="typeAuth" @switchTypeAuth="switchTypeAuth" />
    </div>

    <CommonBurgerMenu :isActive="isMobileMenu" />
  </header>
</template>

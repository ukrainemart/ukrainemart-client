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
  <header class="sticky inset-x-0 top-0 z-50 bg-background-primary">
    <PagesMobileMenuBottom />
    <div class="mx-auto max-w-[1780px] px-5 py-[25px] md:px-10 md:py-[30px] 2xl:py-10">
      <div v-if="isLogo" class="flex items-center justify-between">
        <div class="flex items-center gap-10">
          <CommonLogo to="/" />

          <UiButtonText styles="text-red md:hover:before:bg-red hidden 2xl:flex">
            Каталог
          </UiButtonText>
          <UiButtonTextIconArrowDown class="hidden 2xl:flex">
            Для українських експортерів
          </UiButtonTextIconArrowDown>
          <UiButtonTextIconArrowDown class="hidden 2xl:flex">
            Для міжнародних імпортерів
          </UiButtonTextIconArrowDown>
        </div>

        <div class="hidden items-center gap-[30px] 2xl:flex">
          <SvgoHearth class="h-[28px] w-[30px] text-black" :fontControlled="false" />
          <UiButtonTextIconArrowDown>UA</UiButtonTextIconArrowDown>
          <UiButtonText @click="switchAuth(true, 'register')">Зареєструватися</UiButtonText>
          <UiButtonPrimary @click="switchAuth(true, 'login')">Увійти</UiButtonPrimary>
        </div>

        <div class="relative z-50 flex 2xl:hidden">
          <CommonButtonBurger :isActive="isMobileMenu" @click="switchMenu(!isMobileMenu)" />
        </div>
      </div>

      <div v-else class="flex justify-between">
        <div class="hidden gap-[35px] 2xl:flex">
          <UiButtonText styles="text-red md:hover:before:bg-red">Каталог</UiButtonText>

          <UiButtonTextIconArrowDown>Для українських експортерів</UiButtonTextIconArrowDown>

          <UiButtonTextIconArrowDown>Для міжнародних імпортерів</UiButtonTextIconArrowDown>
        </div>

        <div class="flex items-center gap-5 2xl:flex-row-reverse">
          <UiButtonPrimary @click="switchAuth(true, 'login')">Увійти</UiButtonPrimary>
          <UiButtonText @click="switchAuth(true, 'register')">Зареєструватися</UiButtonText>
          <UiButtonTextIconArrowDown class="hidden 2xl:flex">UA</UiButtonTextIconArrowDown>
          <SvgoHearth
            class="hidden h-[28px] w-[30px] text-black 2xl:block"
            :fontControlled="false"
          />
        </div>

        <div class="relative z-50 flex 2xl:hidden">
          <CommonButtonBurger :isActive="isMobileMenu" @click="switchMenu(!isMobileMenu)" />
        </div>
      </div>

      <CommonBurgerMenu :isActive="isMobileMenu" />
    </div>
    <AuthBase v-model="isAuthModal" :type="typeAuth" @switchTypeAuth="switchTypeAuth" />
  </header>
</template>
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

  const switchAuthModal = (value: boolean) => {
    isAuthModal.value = value;
  };

  const switchAuth = (value: boolean, type: SwitchAuth) => {
    switchAuthModal(value);
    switchTypeAuth(type);
  };

  const switchMenu = (value: boolean) => {
    isMobileMenu.value = value;
  };
</script>

<template>
  <header class="sticky inset-x-0 top-0 z-50 bg-background-primary">
    <PagesMobileMenuBottom />
    <div class="container mx-auto py-[25px] md:px-10 md:py-[30px] 4xl:py-10">
      <!-- mobile start -->
      <div class="flex justify-between xl:hidden">
        <CommonLogo v-if="isLogo" to="/" />

        <div v-else class="flex items-center gap-5">
          <UiButtonPrimary @click="switchAuth(true, 'login')">
            {{ $t('login') }}
          </UiButtonPrimary>
          <UiButtonTextUnderline @click="switchAuth(true, 'register')">
            {{ $t('signup') }}
          </UiButtonTextUnderline>
        </div>

        <div class="relative z-50 flex">
          <CommonButtonBurger :isActive="isMobileMenu" @click="switchMenu(!isMobileMenu)" />
        </div>
      </div>
      <!-- mobile end -->

      <!-- desktop start -->
      <div class="hidden items-center justify-between xl:flex">
        <div class="flex items-center gap-[15px] 4xl:gap-10">
          <CommonLogo v-if="isLogo" to="/" />

          <CommonSubHeader v-if="!isLogo" />
        </div>

        <div class="flex items-center gap-[15px] 4xl:gap-[30px]">
          <SvgoSearchMobileMenu
            v-if="isLogo"
            class="h-5 w-[22px] text-black 4xl:h-[28px] 4xl:w-[30px]"
            :fontControlled="false"
          />
          <SvgoHearth
            class="h-5 w-[22px] text-black 4xl:h-[28px] 4xl:w-[30px]"
            :fontControlled="false"
          />
          <UiButtonTextIconArrowDown>
            {{ $t('ua') }}
          </UiButtonTextIconArrowDown>
          <UiButtonTextUnderline @click="switchAuth(true, 'register')">
            {{ $t('signup') }}
          </UiButtonTextUnderline>
          <UiButtonPrimary @click="switchAuth(true, 'login')">
            {{ $t('login') }}
          </UiButtonPrimary>
        </div>
      </div>
      <!-- desktop end -->
      <CommonBurgerMenu :isActive="isMobileMenu" @switchAuth="switchAuth" />
    </div>
    <AuthBase
      v-model="isAuthModal"
      :type="typeAuth"
      @switchTypeAuth="switchTypeAuth"
      @switchModal="switchAuthModal"
    />
  </header>
</template>

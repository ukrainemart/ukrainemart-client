<script setup lang="ts">
  defineProps<{
    isLogo?: boolean;
  }>();

  const { width: screenWidth } = useWindowSize();
  const { BREAKPOINTS_LG } = useVariables();
  const isMobileMenu = ref(false);
  const isCatalogModal = ref(false);
  const isAuthModal = ref(false);
  const typeAuth = ref<SwitchAuth>('login');

  const switchTypeAuth = (type: SwitchAuth) => (typeAuth.value = type);

  const switchAuthModal = (value: boolean) => (isAuthModal.value = value);

  const switchAuth = (value: boolean, type: SwitchAuth) => {
    switchAuthModal(value);
    switchTypeAuth(type);
  };

  // REVIEW refactor
  const switchMenu = (value: boolean) => (isMobileMenu.value = value);
  // REVIEW refactor
  const toggleCatalogModal = () => (isCatalogModal.value = !isCatalogModal.value);
</script>

<template>
  <header class="sticky inset-x-0 top-0 z-[100] bg-background-primary">
    <PagesMobileMenuBottom
      @openAuth="switchAuth(true, 'login')"
      @toggleCatalogModal="toggleCatalogModal"
    />

    <div class="container mx-auto py-[25px] md:px-10 md:py-[30px] 4xl:py-10">
      <!-- MOBILE START -->
      <div class="flex justify-between lg:hidden">
        <CommonLogo v-if="isLogo" to="/" />

        <div v-else class="flex items-center gap-5">
          <UiButtonPrimary v-if="!isLoggedIn()" @click="switchAuth(true, 'login')">
            {{ $t('login') }}
          </UiButtonPrimary>

          <UiButtonTextUnderline v-if="!isLoggedIn()" @click="switchAuth(true, 'register')">
            {{ $t('signup') }}
          </UiButtonTextUnderline>

          <UiButtonPrimary v-if="isLoggedIn()" to="/profile">
            {{ $t('profile.profile') }}
          </UiButtonPrimary>
        </div>

        <div class="relative z-50 flex items-center gap-5">
          <SvgoSearchMobileMenu
            v-if="isLogo"
            class="h-[18px] w-[18px] text-black md:h-[23px] md:w-[23px] 4xl:h-[28px] 4xl:w-[28px]"
            :fontControlled="false"
          />

          <CommonButtonBurger :isActive="isMobileMenu" @click="switchMenu(!isMobileMenu)" />
        </div>
      </div>
      <!-- MOBILE END -->

      <!-- DESKTOP START -->
      <div class="hidden items-center justify-between lg:flex">
        <div class="flex items-center gap-[15px] 4xl:gap-10">
          <CommonLogo v-if="isLogo" to="/" />

          <CommonSubHeader
            v-if="!isLogo"
            :isLogo="isLogo"
            :toggleCatalogModal="toggleCatalogModal"
            @toggleModal="toggleCatalogModal"
          />
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

          <CommonLangSwitcher />

          <UiButtonTextUnderline v-if="!isLoggedIn()" @click="switchAuth(true, 'register')">
            {{ $t('signup') }}
          </UiButtonTextUnderline>

          <UiButtonPrimary v-if="!isLoggedIn()" @click="switchAuth(true, 'login')">
            {{ $t('login') }}
          </UiButtonPrimary>

          <UiButtonPrimary v-if="isLoggedIn()" to="/profile">
            {{ $t('profile.profile') }}
          </UiButtonPrimary>
        </div>
      </div>
      <!-- DESKTOP END -->

      <CommonBurgerMenu :isActive="isMobileMenu" @switchAuth="switchAuth" />
    </div>

    <AuthBase
      v-model="isAuthModal"
      :type="typeAuth"
      @switchTypeAuth="switchTypeAuth"
      @switchModal="switchAuthModal"
    />
  </header>

  <!-- DESKTOP SUB-HEADER START -->
  <CommonSubHeader
    v-if="isLogo"
    :isLogo="isLogo"
    :toggleCatalogModal="toggleCatalogModal"
    class="container mb-[40px] hidden lg:flex"
    @toggleModal="toggleCatalogModal"
  />
  <!-- DESKTOP SUB-HEADER END -->

  <!-- MOBILE CATALOG START -->
  <UiSideModal
    v-if="screenWidth < BREAKPOINTS_LG"
    v-model="isCatalogModal"
    :label="$t('catalog')"
    @toggleModal="toggleCatalogModal"
  >
    <CommonCatalog :toggleCatalogModal="toggleCatalogModal" />
  </UiSideModal>
  <!-- MOBILE CATALOG END -->
</template>

<script setup lang="ts">
  defineProps<{
    isLogo?: boolean;
  }>();

  const auth = useAuthStore();

  const { width: screenWidth } = useWindowSize();
  const { BREAKPOINTS_LG } = useVariables();
  const isMobileMenu = ref(false);
  const isCatalogModal = ref(false); // mobile catalog state
  const isCatalogHovered = ref(false); // desktop catalog state
  const isSearchModal = ref(false);
  const catalog = ref<Catalog[]>([]);
  const currentCategories = ref<Catalog[]>([]);
  const selectedParentCategory = ref<Catalog | null>(null);
  const selectedChildCategory = ref<Catalog | null>(null);
  const typeAuth = computed(() => auth.typeAuth);

  const switchTypeAuth = (type: SwitchAuth) => auth.switchTypeAuth(type);

  const switchAuthModal = (value: boolean) => auth.switchAuthModal(value);

  const switchAuth = (value: boolean, type: SwitchAuth) => {
    switchAuthModal(value);
    switchTypeAuth(type);
  };

  const switchMenu = (value: boolean) => (isMobileMenu.value = value);

  // Catalog START
  const parentCategories = computed(
    () => catalog.value?.filter((item) => item.parent_category === 0)
  );

  watch(isCatalogModal, (newValue) => {
    // reset modal state on close by click on overlay
    if (newValue === false) {
      currentCategories.value = parentCategories.value;
    }
  });

  watch(isCatalogHovered, (newValue) => {
    // reset modal on mouse leave
    if (newValue === false) {
      currentCategories.value = parentCategories.value;
      [selectedParentCategory.value] = parentCategories.value;
      [selectedChildCategory.value] = selectedParentCategory.value.children;
    }
  });

  const toggleCatalogModal = () => (isCatalogModal.value = !isCatalogModal.value);

  const updateCurrentCategories = (value: Catalog[]) => (currentCategories.value = value);
  const updateParentCategory = (value: Catalog | null) => (selectedParentCategory.value = value);
  const updateChildCategory = (value: Catalog | null) => (selectedChildCategory.value = value);
  const updateIsCatalogHovered = (value: boolean) => (isCatalogHovered.value = value);

  const getCatalog = async () => {
    try {
      const res = await useFetch(`${useUrlApi()}/catalog`);

      catalog.value = res?.data?.value as Catalog[];
      currentCategories.value = parentCategories.value;

      if (screenWidth.value >= BREAKPOINTS_LG) {
        [selectedParentCategory.value] = parentCategories.value;
        [selectedChildCategory.value] = selectedParentCategory.value.children;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onClickFavorites = () => {
    if (isLoggedIn()) {
      navigateTo('/profile/favorites');
      return false;
    }
    switchAuth(true, 'login');
  };

  getCatalog();

  provide('parentCategories', parentCategories);
  provide('currentCategories', { currentCategories, updateCurrentCategories });
  provide('selectedParentCategory', { selectedParentCategory, updateParentCategory });
  provide('selectedChildCategory', { selectedChildCategory, updateChildCategory });
  provide('isCatalogHovered', { isCatalogHovered, updateIsCatalogHovered });
  // Catalog END

  // Search START
  const toggleSearchModal = () => (isSearchModal.value = !isSearchModal.value);

  // Search END
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
          <UiButtonOpacity v-if="isLogo" type="button" @click="toggleSearchModal">
            <SvgoSearchMobileMenu
              class="h-[18px] w-[18px] text-black md:h-[23px] md:w-[23px] 4xl:h-[28px] 4xl:w-[28px]"
              :fontControlled="false"
            />
          </UiButtonOpacity>

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
          <UiButtonOpacity v-if="isLogo" type="button" @click="toggleSearchModal">
            <SvgoSearchMobileMenu
              v-if="isLogo"
              class="h-5 w-[22px] text-black 4xl:h-[28px] 4xl:w-[30px]"
              :fontControlled="false"
            />
          </UiButtonOpacity>

          <UiButtonOpacity @click="onClickFavorites">
            <SvgoHearth
              class="h-5 w-[22px] text-black 4xl:h-[28px] 4xl:w-[30px]"
              :fontControlled="false"
            />
          </UiButtonOpacity>

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
      v-model="auth.isAuthModal"
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

  <!-- MOBILE SEARCH START -->
  <CommonSearchModal
    v-model="isSearchModal"
    :isSearchModal="isSearchModal"
    :toggleSearchModal="toggleSearchModal"
  />
  <!-- MOBILE SEARCH END -->
</template>

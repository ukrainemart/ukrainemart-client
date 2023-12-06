<script setup lang="ts">
  const emits = defineEmits(['openAuth', 'toggleCatalogModal']);

  const openAuth = () => {
    emits('openAuth');
  };
  const isOpenProfile = ref(false);

  const switchMenu = (value: boolean) => {
    isOpenProfile.value = value;
  };

  const onClickProfile = () => {
    if (isLoggedIn()) {
      switchMenu(true);
      return false;
    }
    if (!isLoggedIn()) {
      openAuth();
      return false;
    }
    return false;
  };

  const onClickFavorites = () => {
    if (isLoggedIn()) {
      navigateTo('/profile/favorites');
      return false;
    }
    openAuth();
  };
</script>

<template>
  <div
    class="fixed bottom-0 left-0 flex h-mobile-menu w-full items-center justify-between rounded-t-[20px] bg-white px-[20px] lg:hidden"
  >
    <PagesMobileMenuItem to="/" :label="$t('home')">
      <SvgoHome class="!h-full !w-full" />
    </PagesMobileMenuItem>
    <PagesMobileMenuItem :label="$t('catalog')" @click="$emit('toggleCatalogModal')">
      <SvgoSearchMobileMenu class="!h-full !w-full" />
    </PagesMobileMenuItem>
    <PagesMobileMenuItem :label="$t('favorites')" @click="onClickFavorites">
      <SvgoFavorites class="!h-full !w-full" />
    </PagesMobileMenuItem>
    <PagesMobileMenuItem :label="$t('myAccount')" @click="onClickProfile">
      <SvgoUser class="!h-full !w-full" />
    </PagesMobileMenuItem>

    <PagesMobileProfile v-if="isLoggedIn()" :isOpen="isOpenProfile" @switchMenu="switchMenu" />
  </div>
</template>

<style scoped></style>

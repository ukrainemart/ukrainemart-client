<script setup lang="ts">
  const isOpenProfile = ref(false);

  const switchMenu = (value: boolean) => {
    isOpenProfile.value = value;
  };
</script>

<template>
  <div
    class="fixed bottom-0 left-0 flex h-mobile-menu w-full items-center justify-between rounded-t-[20px] bg-white px-[20px] lg:hidden"
  >
    <PagesMobileMenuItem to="/" :label="$t('home')">
      <SvgoHome class="!h-full !w-full" />
    </PagesMobileMenuItem>
    <PagesMobileMenuItem :label="$t('catalog')">
      <SvgoSearchMobileMenu class="!h-full !w-full" />
    </PagesMobileMenuItem>
    <PagesMobileMenuItem :label="$t('favorites')">
      <SvgoFavorites class="!h-full !w-full" />
    </PagesMobileMenuItem>
    <PagesMobileMenuItem :label="$t('myAccount')" @click="switchMenu(true)">
      <SvgoUser class="!h-full !w-full" />
    </PagesMobileMenuItem>

    <PagesMobileProfile :isOpen="isOpenProfile" @switchMenu="switchMenu" />
  </div>
</template>

<style scoped></style>

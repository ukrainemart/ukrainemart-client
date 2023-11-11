<script setup lang="ts">
  const isOpen = ref(false);
</script>

<template>
  <div
    class="h-mobile-menu fixed bottom-0 left-0 flex w-full items-center justify-between rounded-t-[20px] bg-white px-[20px] lg:hidden"
  >
    <PagesMobileMenuItem :label="$t('home')">
      <SvgoHome class="!h-full !w-full" />
    </PagesMobileMenuItem>
    <PagesMobileMenuItem :label="$t('catalog')">
      <SvgoSearchMobileMenu class="!h-full !w-full" />
    </PagesMobileMenuItem>
    <PagesMobileMenuItem :label="$t('favorites')">
      <SvgoFavorites class="!h-full !w-full" />
    </PagesMobileMenuItem>
    <PagesMobileMenuItem :label="$t('myAccount')" @click="isOpen = true">
      <SvgoUser class="!h-full !w-full" />
    </PagesMobileMenuItem>

    <!-- <div class="fixed w-full"></div> -->
  </div>
</template>

<style scoped></style>

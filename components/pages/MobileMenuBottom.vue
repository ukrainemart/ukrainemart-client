<script setup lang="ts"></script>

<template>
  <div
    class="fixed bottom-0 left-0 flex w-full items-center justify-between rounded-t-[20px] bg-white px-[20px] py-[16px] lg:hidden"
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
    <PagesMobileMenuItem :label="$t('myAccount')">
      <SvgoUser class="!h-full !w-full" />
    </PagesMobileMenuItem>
  </div>
</template>

<style scoped></style>

<script setup lang="ts"></script>

<template>
  <div class="pb-[70px] md:pb-[100px] 2xl:pb-[130px]">
    <CommonBreadcrumbs :static="$t('subHeader.subscriptions')" />

    <div class="container">
      <CommonProductTitle class="mb-5 !font-montserrat xl:mb-[30px] 2xl:mb-10">
        {{ $t('subHeader.subscriptions') }}
      </CommonProductTitle>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        <CommonPricingCard />
        <CommonPricingCard />
        <CommonPricingCard />
      </div>
    </div>
  </div>
</template>

<style></style>

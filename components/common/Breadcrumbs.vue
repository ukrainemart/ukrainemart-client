<script setup lang="ts">
  defineProps<{
    breadcrumb: Breadcrumb;
  }>();
</script>

<template>
  <div v-if="breadcrumb">
    <ul
      class="container flex gap-[3px] pb-[25px] pt-3 md:gap-[7px] md:pb-[35px] md:pt-5 xl:gap-2.5 2xl:pb-[45px] 2xl:pt-[30px]"
    >
      <li
        class="flex items-center gap-[3px] font-montserrat text-[7px] font-medium text-status_gray md:gap-[7px] md:text-[10px] xl:gap-2.5 xl:text-[14px]"
      >
        <NuxtLink to="/">{{ $t('logo') }}</NuxtLink>
        <SvgoBreadcrumbArrow
          class="w-[3px] text-transparent md:w-[6px] xl:w-[9px]"
          :fontControlled="false"
        />
      </li>
      <li
        class="flex items-center gap-[3px] font-montserrat text-[7px] font-medium text-black md:gap-[7px] md:text-[10px] xl:gap-2.5 xl:text-[14px]"
      >
        <NuxtLink :to="`/category/${breadcrumb?.id}`">
          {{ useMultiLang(breadcrumb, 'title') }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style></style>

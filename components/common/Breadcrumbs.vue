<script setup lang="ts">
  const breadcrumbs = [
    'Ukrainemart',
    'Каталог',
    'Продукти та агрокультура',
    'Борошно пшеничне вищого гатунку',
  ];
</script>

<template>
  <ul
    class="container flex gap-[3px] pb-[25px] pt-3 md:gap-[7px] md:pb-[35px] md:pt-5 xl:gap-2.5 2xl:pb-[45px] 2xl:pt-[30px]"
  >
    <li
      v-for="(breadcrumb, i) in breadcrumbs"
      :key="breadcrumb"
      :class="
        cn(
          'flex items-center gap-[3px] font-montserrat text-[7px] font-medium text-status_gray md:gap-[7px] md:text-[10px] xl:gap-2.5 xl:text-[14px]',
          {
            'text-black': i === breadcrumbs.length - 1,
          }
        )
      "
    >
      <NuxtLink to="/">{{ breadcrumb }}</NuxtLink>

      <SvgoBreadcrumbArrow
        v-if="i !== breadcrumbs.length - 1"
        class="w-[3px] text-transparent md:w-[6px] xl:w-[9px]"
        :fontControlled="false"
      />
    </li>
  </ul>
</template>

<style></style>

<script setup lang="ts">
  const props = defineProps<{
    breadcrumb: Breadcrumb;
  }>();

  const { BREAKPOINTS_MD } = useVariables();
  const { width: screenWidth } = useWindowSize();

  const breadcrumbs = computed(() => {
    const result: Breadcrumb[] = [];
    let currentBreadcrumb: Breadcrumb | null = props.breadcrumb;

    while (currentBreadcrumb) {
      result.unshift(currentBreadcrumb);
      currentBreadcrumb = currentBreadcrumb.breadcrumb;
    }

    return result;
  });
</script>

<template>
  <!-- screenSize tablet or larger -->
  <div v-if="breadcrumbs.length > 0 && screenWidth >= BREAKPOINTS_MD">
    <ul
      class="container flex gap-[3px] pb-[25px] pt-3 md:gap-[7px] md:pb-[35px] md:pt-5 xl:gap-2.5 2xl:pb-[45px] 2xl:pt-[30px]"
    >
      <li class="breadcrumb_item">
        <NuxtLink to="/">{{ $t('logo') }}</NuxtLink>

        <SvgoBreadcrumbArrow class="breadcrumb_arrow" :fontControlled="false" />
      </li>

      <li
        v-for="(crumb, i) in breadcrumbs"
        :key="crumb?.id"
        :class="
          cn('breadcrumb_item', {
            '!text-black': i === breadcrumbs.length - 1,
          })
        "
      >
        <NuxtLink v-if="i !== breadcrumbs.length - 1" :to="`/category/${crumb?.id}`">
          {{ useMultiLang(crumb, 'title') }}
        </NuxtLink>

        <span v-else>{{ useMultiLang(crumb, 'title') }}</span>

        <SvgoBreadcrumbArrow
          v-if="i !== breadcrumbs.length - 1"
          class="breadcrumb_arrow"
          :fontControlled="false"
        />
      </li>
    </ul>
  </div>
  <!-- screenSize mobile -->
  <div v-else>
    <ul
      class="container flex gap-[3px] pb-[25px] pt-3 md:gap-[7px] md:pb-[35px] md:pt-5 xl:gap-2.5 2xl:pb-[45px] 2xl:pt-[30px]"
    >
      <li class="breadcrumb_item">
        <NuxtLink to="/">{{ $t('logo') }}</NuxtLink>

        <SvgoBreadcrumbArrow class="breadcrumb_arrow" :fontControlled="false" />
      </li>

      <li class="breadcrumb_item !text-black">
        <span>{{ useMultiLang(breadcrumbs[breadcrumbs.length - 1], 'title') }}</span>
      </li>
    </ul>
  </div>
</template>

<style>
  .breadcrumb_item {
    @apply flex items-center gap-[3px] font-montserrat text-[10px] font-medium text-status_gray md:gap-[7px] md:text-[12px] xl:gap-2.5 xl:text-[14px];
  }

  .breadcrumb_arrow {
    @apply w-[6px] text-transparent xl:w-[9px];
  }
</style>

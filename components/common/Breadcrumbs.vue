<script setup lang="ts">
  const props = defineProps<{
    breadcrumb?: Breadcrumb | Category;
    static?: string;
    productCrumb?: string;
  }>();

  const { BREAKPOINTS_MD } = useVariables();
  const { width: screenWidth } = useWindowSize();

  const breadcrumbs = computed(() => {
    const result: (Breadcrumb | Category)[] = [];
    let currentBreadcrumb: Breadcrumb | Category | null = props.breadcrumb || null;

    while (currentBreadcrumb) {
      result.unshift(currentBreadcrumb);
      currentBreadcrumb = currentBreadcrumb.breadcrumb;
    }

    return result;
  });
</script>

<template>
  <!-- START Tablet and desktop -->
  <div v-if="breadcrumbs.length > 0 && screenWidth >= BREAKPOINTS_MD">
    <ul
      class="container flex gap-[3px] pb-[25px] pt-3 md:gap-[7px] md:pb-[35px] md:pt-5 xl:gap-2.5 2xl:pb-[45px] 2xl:pt-[30px]"
    >
      <li class="breadcrumb_item">
        <NuxtLink to="/" class="breadcrumb_text">{{ $t('logo') }}</NuxtLink>

        <SvgoBreadcrumbArrow class="breadcrumb_arrow" :fontControlled="false" />
      </li>

      <li v-for="(crumb, i) in breadcrumbs" :key="crumb?.id" class="breadcrumb_item">
        <NuxtLink
          v-if="i !== breadcrumbs.length - 1 || productCrumb"
          :to="`/category/${crumb?.id}`"
          :class="
            cn('breadcrumb_text', {
              '!text-black': i === breadcrumbs.length - 1 && !productCrumb,
            })
          "
        >
          {{ useMultiLang(crumb, 'title') }}
        </NuxtLink>

        <span
          v-else
          :class="
            cn('breadcrumb_text', {
              '!text-black': i === breadcrumbs.length - 1 && !productCrumb,
            })
          "
        >
          {{ useMultiLang(crumb, 'title') }}
        </span>

        <SvgoBreadcrumbArrow
          v-if="i !== breadcrumbs.length - 1 || productCrumb"
          class="breadcrumb_arrow"
          :fontControlled="false"
        />
      </li>

      <li v-if="productCrumb" class="breadcrumb_item">
        <span class="breadcrumb_text !text-black">{{ productCrumb }}</span>
      </li>
    </ul>
  </div>
  <!-- END Tablet and desktop -->

  <!-- START mobile -->
  <div v-else>
    <ul
      class="container flex gap-[3px] pb-[25px] pt-3 md:gap-[7px] md:pb-[35px] md:pt-5 xl:gap-2.5 2xl:pb-[45px] 2xl:pt-[30px]"
    >
      <li class="breadcrumb_item">
        <NuxtLink to="/" class="breadcrumb_text">{{ $t('logo') }}</NuxtLink>

        <SvgoBreadcrumbArrow class="breadcrumb_arrow" :fontControlled="false" />
      </li>

      <li v-if="static" class="breadcrumb_item">
        <button class="breadcrumb_text !text-black" disabled>{{ static }}</button>
      </li>

      <li v-else class="breadcrumb_item">
        <span class="breadcrumb_text !text-black">{{
          useMultiLang(breadcrumbs[breadcrumbs.length - 1], 'title')
        }}</span>
      </li>
    </ul>
  </div>
  <!-- END mobile -->
</template>

<style>
  .breadcrumb_item {
    @apply flex items-center gap-[3px] md:gap-[7px] xl:gap-2.5;
  }

  .breadcrumb_text {
    @apply font-montserrat text-[10px] font-medium text-status_gray hover:text-black md:text-[12px] xl:text-[16px];
  }

  .breadcrumb_arrow {
    @apply w-[6px] text-transparent xl:w-[9px];
  }
</style>

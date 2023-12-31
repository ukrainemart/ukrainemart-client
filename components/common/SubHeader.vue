<script setup lang="ts">
  defineProps<{
    isLogo?: boolean;
    toggleCatalogModal: () => void;
  }>();

  const { isCatalogHovered, updateIsCatalogHovered } = inject('isCatalogHovered') as {
    isCatalogHovered: Ref<boolean>;
    updateIsCatalogHovered: (value: boolean) => void;
  };

  const { width: screenWidth } = useWindowSize();
  const { BREAKPOINTS_LG } = useVariables();

  const handleMouseOver = () => updateIsCatalogHovered(true);
  const handleMouseLeave = () => updateIsCatalogHovered(false);

  onMounted(() => window.addEventListener('scroll', handleMouseLeave));
  onUnmounted(() => window.removeEventListener('scroll', handleMouseLeave));
</script>

<template>
  <div class="flex gap-[48px]">
    <UiButtonTextUnderline
      class="md:hover:text-status_red md:hover:before:bg-status_red"
      @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave"
    >
      {{ $t('catalog.catalog') }}
      <div
        v-if="screenWidth >= BREAKPOINTS_LG && isCatalogHovered"
        :class="
          cn('fixed inset-x-0 z-[200] text-black', {
            'top-[98px] 4xl:top-[112px]': isLogo,
            'top-[48px] 4xl:top-[56px]': !isLogo,
          })
        "
      >
        <div
          class="mt-[30px] rounded-b-3xl bg-background-primary pb-[50px] shadow-xl 2xl:pb-[70px]"
        >
          <CommonCatalog
            :toggleCatalogModal="toggleCatalogModal"
            :closeCatalog="handleMouseLeave"
          />
        </div>
      </div>
    </UiButtonTextUnderline>

    <UiButtonTextUnderline
      to="/requests"
      class="md:hover:text-status_red md:hover:before:bg-status_red"
    >
      {{ $t('subHeader.requests') }}
    </UiButtonTextUnderline>

    <UiButtonTextUnderline
      to="/subscriptions"
      class="md:hover:text-status_red md:hover:before:bg-status_red"
    >
      {{ $t('subHeader.subscriptions') }}
    </UiButtonTextUnderline>
  </div>
</template>

<style></style>

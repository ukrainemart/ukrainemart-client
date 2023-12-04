<script setup lang="ts">
  defineProps<{
    isLogo?: boolean;
    toggleCatalogModal: () => void;
  }>();

  const { width: screenWidth } = useWindowSize();
  const { BREAKPOINTS_LG } = useVariables();
  const isCatalogHovered = ref(false);

  const handleMouseOver = () => (isCatalogHovered.value = true);

  const handleMouseLeave = () => (isCatalogHovered.value = false);

  onMounted(() => window.addEventListener('scroll', handleMouseLeave));

  onUnmounted(() => window.removeEventListener('scroll', handleMouseLeave));
</script>

<template>
  <div class="flex gap-[48px]">
    <UiButtonTextUnderline
      styles="md:hover:text-status_red md:hover:before:bg-status_red"
      @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave"
    >
      {{ $t('catalog') }}
      <div
        v-if="screenWidth >= BREAKPOINTS_LG && isCatalogHovered"
        :class="
          cn('fixed inset-x-0 z-[200] text-black', {
            'top-[110px]': isLogo,
            'top-[60px]': !isLogo,
          })
        "
      >
        <div
          class="mt-[30px] rounded-b-3xl bg-background-primary pb-[50px] shadow-xl 2xl:pb-[70px]"
        >
          <CommonCatalog :toggleCatalogModal="toggleCatalogModal" />
        </div>
      </div>
    </UiButtonTextUnderline>

    <UiButtonTextIconArrowDown>
      {{ $t('forUaExporters') }}
    </UiButtonTextIconArrowDown>

    <UiButtonTextIconArrowDown>
      {{ $t('forIntlImporters') }}
    </UiButtonTextIconArrowDown>
  </div>
</template>

<style></style>

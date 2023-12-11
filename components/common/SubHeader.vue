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
  <div
    :class="
      cn('flex gap-[48px]', {
        'gap-[15px] xl:gap-[48px]': !isLogo,
      })
    "
  >
    <UiButtonTextUnderline
      :styles="
        cn('md:hover:text-status_red md:hover:before:bg-status_red', {
          'md:text-[14px] xl:text-[16px]': !isLogo,
        })
      "
      @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave"
    >
      {{ $t('catalog') }}
      <div
        v-if="screenWidth >= BREAKPOINTS_LG && isCatalogHovered"
        :class="
          cn('fixed inset-x-0 z-[200] text-black', {
            'top-[110px] 4xl:top-[145px]': isLogo,
            'top-[60px] 4xl:top-[80px]': !isLogo,
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

    <UiButtonTextIconArrowDown
      :styles="
        cn('', {
          'md:text-[14px] xl:text-[16px]': !isLogo,
        })
      "
    >
      {{ $t('forUaExporters') }}
    </UiButtonTextIconArrowDown>

    <UiButtonTextIconArrowDown
      :styles="
        cn('', {
          'md:text-[14px] xl:text-[16px]': !isLogo,
        })
      "
    >
      {{ $t('forIntlImporters') }}
    </UiButtonTextIconArrowDown>
  </div>
</template>

<style></style>

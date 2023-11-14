<script setup lang="ts">
  defineProps<{
    isMobile?: boolean;
  }>();

  const { locale } = useI18n();

  const locales = ['ua', 'en'];
  const filteredLocales = computed(() => locales.filter((item) => item !== locale.value));
</script>

<template>
  <USelectMenu
    v-slot="{ open }"
    v-model="locale"
    :options="filteredLocales"
    :uiMenu="{
      background: 'bg-transparent dark:bg-transparent',
      ring: 'ring-0',
      shadow: 'shadow-transparent',
      padding: 'p-0',
      option: {
        base: 'uppercase cursor-pointer font-medium text-[12px] leading-[15px] md:text-[16px] md:leading-[19px] 4xl:text-[20px] 4xl:leading-6',
        padding: 'p-0',
        active: 'bg-transparent dark:bg-transparent text-black',
        inactive: 'text-status_gray',
      },
    }"
    class="w-fit"
  >
    <UiButtonText class="gap-x-[5px] p-0 uppercase md:gap-x-[7px]">
      {{ locale }}

      <SvgoArrowDown
        :class="
          cn('h-1 w-2 text-transparent md:h-[5px] md:w-[10px] 4xl:h-[6px] 4xl:w-3', {
            'rotate-180': open,
          })
        "
        :fontControlled="false"
      />
    </UiButtonText>
  </USelectMenu>
</template>

<style></style>

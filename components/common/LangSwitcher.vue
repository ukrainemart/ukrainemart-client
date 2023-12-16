<script setup lang="ts">
  defineProps<{
    isMobile?: boolean;
  }>();

  const { locale, locales, setLocale } = useI18n();
  const selectedLanguage = useCookie('selectedLanguage', {
    watch: true,
  });

  useHead({
    htmlAttrs: {
      lang: locale,
    },
  });

  const filteredLocales = computed(() =>
    locales.value
      .filter((item) => typeof item !== 'string' && item.code !== locale.value)
      .map((item) => (typeof item !== 'string' ? item.code : item))
  );

  const handleLocaleChange = (code: string) => {
    selectedLanguage.value = code;
    setLocale(code);
  };
</script>

<template>
  <USelectMenu
    v-slot="{ open }"
    v-model="locale"
    :options="filteredLocales"
    :uiMenu="{
      background: isMobile
        ? 'bg-white dark:bg-white left-[-5px]'
        : 'bg-transparent dark:bg-transparent',
      ring: 'ring-0',
      shadow: 'shadow-transparent',
      padding: isMobile ? 'p-[5px]' : 'p-0',
      option: {
        base: 'uppercase cursor-pointer font-medium text-[12px] leading-[15px] md:text-[16px] md:leading-[19px] 4xl:text-[20px] 4xl:leading-6',
        padding: 'p-0',
        active: 'bg-transparent dark:bg-transparent text-black',
        inactive: 'text-status_gray',
      },
    }"
    class="w-fit"
    @change="handleLocaleChange"
  >
    <UiButtonTextOpeningArrow :label="locale" :open="open" />
  </USelectMenu>
</template>

<style></style>

<script setup lang="ts">
  const { locale, locales, setLocale } = useI18n();
  const displayLocale = computed(() => {
    if (locale.value === 'ru') {
      setLocale('ua');
    }

    return locale.value === 'ru' || locale.value === 'ua' ? 'ua' : 'en';
  });
  const selectedLanguage = useCookie('selectedLanguage', {
    watch: true,
  });

  useHead({
    htmlAttrs: {
      lang: displayLocale,
    },
  });

  const filteredLocales = computed(() =>
    locales.value
      .filter(
        (item) => typeof item !== 'string' && item.code !== locale.value && item.code !== 'ru'
      )
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
    v-model="displayLocale"
    :options="filteredLocales"
    :uiMenu="{
      trigger: 'lg:p-[5px]',
      background: 'bg-transparent dark:bg-transparent',
      ring: 'ring-0',
      shadow: 'shadow-transparent',
      padding: 'p-0',
      option: {
        base: 'uppercase cursor-pointer font-medium text-[14px] leading-[15px] md:text-[16px] md:leading-[19px] 4xl:text-[20px] 4xl:leading-6',
        padding: 'p-0 lg:p-[5px]',
        active: 'bg-transparent dark:bg-transparent text-black',
        inactive: 'text-status_gray',
      },
    }"
    class="flex h-full w-fit"
    @change="handleLocaleChange"
  >
    <UiButtonTextOpeningArrow
      class="cursor-pointer text-[14px] font-medium uppercase leading-[15px] md:text-[16px] md:leading-[19px] 4xl:text-[20px] 4xl:leading-6"
      :label="displayLocale"
      :open="open"
    />
  </USelectMenu>
</template>

<style></style>

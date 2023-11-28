<script setup lang="ts">
  defineProps<{
    isActive?: boolean;
  }>();

  const emits = defineEmits(['switchAuth']);

  const switchAuth = (value: boolean, type: SwitchAuth) => {
    emits('switchAuth', value, type);
  };
</script>

<template>
  <div
    :class="
      cn(
        'fixed inset-x-0 -top-full z-40 h-fit rounded-b-[10px] bg-white px-5 py-[25px] text-black transition-all delay-0 duration-[200ms] ease-linear md:top-[-400px] md:px-10 md:py-[30px] xl:hidden',
        {
          'top-0 md:top-0': isActive,
        }
      )
    "
  >
    <CommonLogo />

    <ul class="my-[25px] flex flex-col gap-[15px]">
      <li>
        <CommonLangSwitcher isMobile />
      </li>
      <li>
        <UiButtonTextUnderline styles="md:hover:text-status_red md:hover:before:bg-status_red">
          {{ $t('catalog') }}
        </UiButtonTextUnderline>
      </li>
      <li>
        <UiButtonTextIconArrowDown>
          {{ $t('forUaExporters') }}
        </UiButtonTextIconArrowDown>
      </li>
      <li>
        <UiButtonTextIconArrowDown>
          {{ $t('forIntlImporters') }}
        </UiButtonTextIconArrowDown>
      </li>
    </ul>

    <UiButtonPrimary
      v-if="!isLoggedIn()"
      styles="mx-auto block mb-[15px]"
      @click="switchAuth(true, 'login')"
    >
      {{ $t('login') }}
    </UiButtonPrimary>
    <UiButtonTextUnderline
      v-if="!isLoggedIn()"
      styles="mx-auto"
      @click="switchAuth(true, 'register')"
    >
      {{ $t('signup') }}
    </UiButtonTextUnderline>
    <UiButtonPrimary v-if="isLoggedIn()" styles="mx-auto block w-fit mb-[15px]" to="/profile">
      {{ $t('profile.profile') }}
    </UiButtonPrimary>
  </div>
</template>

<style></style>

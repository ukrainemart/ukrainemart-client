<!-- // TODO: consider the negative value of the top top-[-310px] -->

<script setup lang="ts">
  defineProps<{
    isActive?: boolean;
  }>();
</script>

<template>
  <div
    :class="
      cn(
        'fixed inset-x-0 -top-full z-40 h-fit rounded-b-[10px] bg-white px-5 py-[25px] text-black transition-all delay-0 duration-[200ms] ease-linear md:top-[-400px] md:px-10 md:py-[30px] 2xl:hidden',
        {
          'top-0 md:top-0': isActive,
        }
      )
    "
  >
    <CommonLogo />

    <ul class="my-[25px] flex flex-col gap-[15px]">
      <li>
        <UiButtonText>UA</UiButtonText>
      </li>
      <li>
        <UiButtonTextUnderline styles="md:hover:text-status_red md:hover:before:bg-status_red">
          Каталог
        </UiButtonTextUnderline>
      </li>
      <li>
        <UiButtonTextIconArrowDown>Для українських експортерів</UiButtonTextIconArrowDown>
      </li>
      <li>
        <UiButtonTextIconArrowDown>Для міжнародних імпортерів</UiButtonTextIconArrowDown>
      </li>
    </ul>

    <UiButtonPrimary styles="mx-auto mb-[15px]">Увійти</UiButtonPrimary>
    <UiButtonTextUnderline styles="mx-auto">Зареєструватися</UiButtonTextUnderline>
  </div>
</template>

<style></style>

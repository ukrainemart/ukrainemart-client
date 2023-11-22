<script setup lang="ts"></script>

<template>
  <NuxtLink
    to="http://localhost/auth/google">
    <UiButtonOutline type="button" class="fill_revert_layer mt-[10px] md:mt-[14px] 4xl:mt-[15px]">
      <SvgoGoogle />
      <span>
        <slot />
      </span>
    </UiButtonOutline>
  </NuxtLink>
</template>

<style scoped></style>

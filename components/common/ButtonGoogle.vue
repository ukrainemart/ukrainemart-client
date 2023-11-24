<script setup lang="ts"></script>

<template>
  <UiButtonOutline
    type="button"
    class="fill_revert_layer mt-[10px] md:mt-[14px] 4xl:mt-[15px]"
    to="http://localhost/auth/google"
  >
    <SvgoGoogle />
    <span>
      <slot />
    </span>
  </UiButtonOutline>
</template>

<style scoped></style>

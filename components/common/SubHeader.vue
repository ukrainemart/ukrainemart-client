<script setup lang="ts"></script>

<template>
  <div class="flex gap-[48px]">
    <UiButtonTextUnderline styles="md:hover:text-status_red md:hover:before:bg-status_red">
      {{ $t('catalog') }}
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

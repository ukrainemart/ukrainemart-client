<script setup lang="ts">
  defineProps<{
    ui?: any;
  }>();
</script>

<template>
  <URadio
    class="ui_radio"
    :ui="{
      wrapper: 'items-center',
      border: '!border-black',
      background: 'bg-transparent',
      color: '!text-transparent',
      label: 'font-medium text-[12px] md:text-[14px]',
      ...ui,
    }"
  />
</template>

<style>
  .ui_radio .form-radio:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e") !important;
  }
</style>

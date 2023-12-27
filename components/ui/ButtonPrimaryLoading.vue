<script setup lang="ts">
  defineProps<{
    loading: boolean;
  }>();
</script>

<template>
  <UiButtonPrimary
    :disabled="loading"
    :class="
      cn('group relative', {
        '': loading,
      })
    "
  >
    <span :class="cn('', { 'opacity-0': loading })">
      <slot />
    </span>
    <UiSpinner
      v-if="loading"
      role="status"
      class="absolute py-[5px]"
      classSvg="fill-white text-gray-600 group-hover:fill-black group-hover:text-gray-300"
    />
  </UiButtonPrimary>
</template>

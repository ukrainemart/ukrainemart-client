<script setup lang="ts">
  defineProps<{
    isActive?: boolean;
    styles?: string;
    isSearch?: boolean;
  }>();
</script>

<template>
  <button
    type="button"
    :class="
      cn(
        'relative cursor-pointer before:absolute before:-inset-1 before:content-[\'\'] focus:outline-none md:before:-inset-2',
        styles
      )
    "
  >
    <UiCloseIcon
      v-if="isActive"
      :styles="
        cn('', {
          'h-[18px] w-[18px] md:h-[23px] md:w-[23px]': !isSearch,
          'h-full w-full': isSearch,
        })
      "
    />

    <SvgoBurger v-else :fontControlled="false" class="h-[18px] w-[18px] md:h-[18px] md:w-[27px]" />
  </button>
</template>

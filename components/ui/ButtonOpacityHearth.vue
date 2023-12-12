<script setup lang="ts">
  defineProps<{
    active?: boolean;
  }>();
</script>

<template>
  <UiButtonOpacity>
    <SvgoHearth
      v-if="!active"
      class="!h-5 !w-[22px] text-black 4xl:!h-[28px] 4xl:!w-[30px]"
      :fontControlled="false"
    />
    <SvgoHearthBg
      v-else
      :class="
        cn(
          '!h-5 !w-[22px] text-status_red duration-hover group-hover:text-status_red 4xl:!h-[28px] 4xl:!w-[30px]'
        )
      "
    />
  </UiButtonOpacity>
</template>

<style scoped></style>

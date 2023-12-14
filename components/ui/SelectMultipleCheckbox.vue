<script setup lang="ts">
  defineProps<{
    label: string;
    options: SelectOption;
  }>();
  const open = ref<boolean>(false);

  const onOpenSelect = () => {
    open.value = true;
  };
  const onCloseSelect = () => {
    open.value = false;
  };
</script>

<template>
  <USelectMenu
    class="relative w-fit"
    value-attribute="id"
    option-attribute="title"
    :uiMenu="{
      width: 'w-[182px] md:w-[219px] xl:w-[290px]',
      container: '!left-0',
      rounded: 'rounded-[15px]',
      base: 'scroll_bar',
      option: {
        selected: '!bg-red',
        active: '!bg-red',
        selectedIcon: {
          wrapper: 'hidden',
        },
      },
    }"
    :options="options"
    multiple
    placeholder="Select people"
    @open="onOpenSelect"
    @close="onCloseSelect"
  >
    <UiButtonTextOpeningArrow class="normal-case" :open="open" :label="label" />

    <template #option="{ option, selected }">
      <div class="flex items-center gap-[10px]">
        <span
          :class="
            cn(
              'fill_revert_layer block h-[12px] w-[12px] flex-shrink-0 rounded-[2px] border border-black !text-black md:h-[13px] md:w-[13px] xl:h-[16px] xl:w-[16px]',
              {
                'bg-black': selected,
              }
            )
          "
          ><SvgoCheckmark v-if="selected" class="!h-full !w-full !stroke-white"
        /></span>
        <span>
          <UiTextPortalPrimary>{{ option.title }}</UiTextPortalPrimary>
        </span>
      </div>
    </template>
  </USelectMenu>
</template>

<style scoped></style>

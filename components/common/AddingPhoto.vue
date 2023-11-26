<script setup lang="ts">
  // eslint-disable-next-line import/no-extraneous-dependencies
  import { Sortable } from 'sortablejs-vue3';

  const props = defineProps<{
    modelValue: any[];
  }>();

  const sortableInstance = ref<any>();

  const showPhoto = (file: any) => {
    return typeof file !== 'string' ? URL?.createObjectURL(file) : file;
  };

  const emits = defineEmits(['update:modelValue']);

  const handleChangePhoto = (photo: any) => {
    if (Array.isArray(props.modelValue)) {
      emits('update:modelValue', [...props.modelValue, photo]);
    }
  };

  const sortable = (evt: any) => {
    const { newIndex, oldIndex } = evt;

    const copyArray = props.modelValue.slice();

    const movedItem = copyArray[oldIndex];

    copyArray.splice(oldIndex, 1);

    copyArray.splice(newIndex, 0, movedItem);
    emits('update:modelValue', copyArray);
  };

  const updateInput = (value: any) => {
    handleChangePhoto(value);
  };
</script>

<template>
  <div class="">
    <ClientOnly>
      <Sortable
        ref="sortableInstance"
        class="grid w-full grid-cols-4 gap-[5px] md:grid-cols-5 md:gap-[10px] 2xl:grid-cols-4"
        :list="props.modelValue"
        tag="div"
        @sort="sortable"
      >
        <template #item="{ element }">
          <div :key="`${showPhoto(element)}`" class="w-full basis-[25%]">
            <div class="relative h-0 overflow-hidden rounded-[5px] pt-[100%] xl:rounded-[10px]">
              <div class="absolute left-0 top-0 z-10 h-full w-full">
                <img
                  :src="`${showPhoto(element)}`"
                  class="block h-full w-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </template>
        <template #footer>
          <div
            class="relative h-0 basis-[25%] overflow-hidden rounded-[3px] bg-[#D9D9D9] pt-[100%] md:rounded-[5px] xl:rounded-[10px]"
          >
            <label class="absolute left-0 top-0 z-10 h-full w-full cursor-pointer">
              <UiInputFile class="hidden" @updateInput="updateInput" />
            </label>

            <div
              class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-[5px] xl:gap-[10px]"
            >
              <span
                class="relative h-[12px] w-[12px] before:absolute before:inset-0 before:m-auto before:h-[100%] before:w-[1px] before:bg-black after:absolute after:inset-0 after:m-auto after:h-[100%] after:w-[1px] after:rotate-[90deg] after:bg-black md:h-[16px] md:w-[16px] xl:h-[20px] xl:w-[20px]"
              />
              <p class="text_xs font-medium">{{ $t('add_photo') }}</p>
            </div>
          </div>
        </template>
      </Sortable>
    </ClientOnly>
  </div>
</template>

<style scoped></style>

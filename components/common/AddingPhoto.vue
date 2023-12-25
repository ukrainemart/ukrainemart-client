<script setup lang="ts">
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
    if (!useCheckImage(value)) {
      return false;
    }
    handleChangePhoto(value);
  };

  const deleteImage = (element: any) => {
    const updateArray = props.modelValue.filter((el) => el !== element);
    emits('update:modelValue', updateArray);
  };

  const { value, errorMessage } = useField(
    'productImages',
    {},
    {
      validateOnValueUpdate: false,
    }
  );

  const checkValidation = () => {
    if (props.modelValue.length > 0) {
      value.value = true;
    } else {
      value.value = false;
    }
  };
  watchDeep(
    () => props.modelValue,
    () => {
      checkValidation();
    }
  );

  const onMove = (evt: any) => {
    if (evt.related.className.includes('non_draggable')) {
      return false;
    }
  };
</script>

<template>
  <div class="">
    <UiTextPortalPrimary class="mb-[10px] xl:mb-[15px]">{{
      $t('labels.photo')
    }}</UiTextPortalPrimary>
    <ClientOnly>
      <Sortable
        ref="sortableInstance"
        class="grid w-full grid-cols-4 gap-[5px] md:grid-cols-5 md:gap-[10px] 2xl:grid-cols-3"
        :list="props.modelValue"
        tag="div"
        :options="{
          filter: '.non_draggable',
        }"
        @move.capture="onMove"
        @sort="sortable"
      >
        <template #item="{ element }">
          <div :key="`${showPhoto(element)}`" class="relative w-full basis-[25%]">
            <div
              class="group relative h-0 overflow-hidden rounded-[5px] pt-[100%] xl:rounded-[10px]"
            >
              <div class="absolute left-0 top-0 z-10 h-full w-full">
                <img
                  :src="`${showPhoto(element)}`"
                  class="block h-full w-full object-cover"
                  alt=""
                />
              </div>
              <button
                type="button"
                class="absolute left-0 top-0 z-10 flex h-full w-full items-start justify-end bg-[#0000003e] p-[8px] group-hover:visible is-hover:invisible is-hover:items-center is-hover:justify-center is-hover:!bg-[#0000005e]"
                @click="deleteImage(element)"
              >
                <SvgoDelete class="!h-[20%] !w-[20%] text-white" />
              </button>
            </div>
          </div>
        </template>
        <template #footer>
          <CommonButtonInputFile class="non_draggable" @updateInput="updateInput">{{
            $t('add_photo')
          }}</CommonButtonInputFile>
        </template>
      </Sortable>
    </ClientOnly>
  </div>
  <UiAlertInputError v-if="errorMessage" class="mt-[5px]" :error="errorMessage" />
</template>

<style scoped></style>

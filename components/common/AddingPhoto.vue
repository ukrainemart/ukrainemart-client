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
</script>

<template>
  <div class="">
    <ClientOnly>
      <Sortable
        ref="sortableInstance"
        class="grid w-full grid-cols-4 gap-[5px] md:grid-cols-5 md:gap-[10px] 2xl:grid-cols-4"
        :list="props.modelValue"
        tag="div"
        :options="{
          filter: '.non_draggable',
        }"
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
          <div
            class="non_draggable relative h-0 basis-[25%] overflow-hidden rounded-[3px] bg-[#D9D9D9] pt-[100%] md:rounded-[5px] xl:rounded-[10px]"
          >
            <label class="absolute left-0 top-0 z-50 h-full w-full cursor-pointer">
              <UiInputFile class="invisible h-full w-full" @updateInput="updateInput" />
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
  <UiAlertInputError v-if="errorMessage" class="mt-[5px]" :error="errorMessage" />
</template>

<style scoped></style>

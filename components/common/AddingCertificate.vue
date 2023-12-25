<script setup lang="ts">
  import VuePdfEmbed from 'vue-pdf-embed';

  const props = defineProps<{
    modelValue: any[];
  }>();
  const emits = defineEmits(['update:modelValue']);
  const addedCertificate = ref<any[]>([]);

  function convertToBase64(file: any, callback: Function) {
    const reader = new FileReader();

    reader.onload = function () {
      const result = reader?.result as string;
      const base64String = result?.split(',')[1];
      callback(base64String);
    };

    reader.readAsDataURL(file);
  }

  const renderPdf = async () => {
    const promises = props.modelValue.map((el) => {
      if (typeof el === 'string') {
        return el;
      }

      return new Promise((resolve) => {
        convertToBase64(el, (base64: string) => {
          const src = `data:application/pdf;base64,${base64}`;
          resolve(src);
        });
      });
    });

    addedCertificate.value = await Promise.all(promises);
  };

  const updateModelValue = (value: any) => {
    emits('update:modelValue', value);
  };

  const updateInput = (value: any) => {
    if (value.type !== 'application/pdf') return false;
    if (props.modelValue.length === 3) return false;

    updateModelValue([...props.modelValue, value]);
  };

  const deleteCertificate = (index: number) => {
    const newFilsArray: any[] = props.modelValue.filter((el: any, ind: number) => ind !== index);
    updateModelValue(newFilsArray);
  };

  watchDeep(
    () => props.modelValue,
    () => {
      renderPdf();
    }
  );

  renderPdf();
</script>

<template>
  <ClientOnly>
    <div class="">
      <UiTextPortalPrimary class="mb-[10px] 2xl:mb-[15px]">{{
        $t('labels.certificates')
      }}</UiTextPortalPrimary>

      <div
        ref="test"
        class="relative grid w-full basis-[25%] grid-cols-4 gap-[5px] md:grid-cols-5 md:gap-[10px] 2xl:grid-cols-3"
      >
        <div
          v-for="(item, index) in addedCertificate"
          :key="index"
          class="group relative h-0 overflow-hidden rounded-[5px] pt-[100%] xl:rounded-[10px]"
        >
          <div class="absolute left-0 top-0 z-10 h-full w-full">
            <vue-pdf-embed class="block h-full w-full object-cover" :source="item" />
          </div>
          <button
            type="button"
            class="absolute left-0 top-0 z-10 flex h-full w-full items-start justify-end bg-[#0000003e] p-[8px] group-hover:visible is-hover:invisible is-hover:items-center is-hover:justify-center is-hover:!bg-[#0000005e]"
            @click="deleteCertificate(index)"
          >
            <SvgoDelete class="!h-[20%] !w-[20%] text-white" />
          </button>
        </div>

        <CommonButtonInputFile class="non_draggable" @updateInput="updateInput">{{
          $t('add_product.add_certificate')
        }}</CommonButtonInputFile>
      </div>
    </div>
  </ClientOnly>
</template>

<style scoped></style>

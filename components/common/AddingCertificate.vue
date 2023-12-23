<script setup lang="ts">
  import VuePdfEmbed from 'vue-pdf-embed';

  const props = defineProps<{
    modelValue: any[];
  }>();
  const emits = defineEmits(['update:modelValue']);

  function convertToBase64(file: any, callback: Function) {
    const reader = new FileReader();

    reader.onload = function () {
      const base64String = reader?.result?.split(',')[1];
      callback(base64String);
    };

    reader.readAsDataURL(file);
  }

  const updateValue = (value: any) => {
    emits('update:modelValue', value);
  };

  const addedCertificate = ref<any[]>([]);
  const test = ref();

  const updateInput = (value: any) => {
    console.log(value);

    addedCertificate.value.push(value);

    // convertToBase64(value, function (base64String: any) {
    //   const src = `data:application/pdf;base64,${base64String}`;
    //   addedCertificate.value.push(src);
    // });
  };

  watchDeep(addedCertificate, () => {
    updateValue(addedCertificate.value);
  });
</script>

<template>
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
          <!-- <vue-pdf-embed class="block h-full w-full object-cover" :source="item" /> -->
          <!-- <img :src="item" class="block h-full w-full object-cover" alt="" /> -->
          <p>{{ item.name }}</p>
        </div>
        <button
          type="button"
          class="absolute left-0 top-0 z-10 flex h-full w-full items-start justify-end bg-[#0000003e] p-[8px] group-hover:visible is-hover:invisible is-hover:items-center is-hover:justify-center is-hover:!bg-[#0000005e]"
        >
          <SvgoDelete class="!h-[20%] !w-[20%] text-white" />
        </button>
      </div>

      <CommonButtonInputFile class="non_draggable" @updateInput="updateInput">{{
        $t('add_product.add_certificate')
      }}</CommonButtonInputFile>
    </div>
  </div>
</template>

<style scoped></style>

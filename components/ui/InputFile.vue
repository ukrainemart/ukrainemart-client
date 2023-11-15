<script setup lang="ts">
  const props = defineProps<{
    typeInput?: string;
  }>();

  const emits = defineEmits(['updateInput']);

  const fileUpload = ref<any>(null);

  const handleFileUpload = () => {
    const file = fileUpload.value.files[0];
    file.value = file;

    emits('updateInput', file.value, props?.typeInput);
  };
</script>

<template>
  <input
    id="inp_file_popup"
    ref="fileUpload"
    class="input_photo"
    type="file"
    name="inp_file_popup"
    @change="handleFileUpload()"
  />
</template>

<style scoped></style>

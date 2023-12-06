<script setup lang="ts">
  const props = defineProps<{
    inputs: any;
    modelValue: string;
  }>();

  const emits = defineEmits(['update:modelValue']);

  const updateModelValue = (value: string) => {
    emits('update:modelValue', value);
  };

  const { value, errorMessage } = useField(
    'createCompany',
    {},
    {
      validateOnValueUpdate: false,
    }
  );

  const checkValidation = () => {
    if (props.inputs.phone && props.inputs.name && props.inputs.code && props.inputs.description) {
      value.value = true;
    } else {
      value.value = false;
    }
  };

  watch(errorMessage, () => {
    updateModelValue(errorMessage.value || '');
  });

  watchDeep(
    () => props.inputs,
    () => {
      checkValidation();
    }
  );
</script>

<template>
  <UiButtonPrimary type="submit" class="mt-[25px] md:mt-[45px]">{{
    $t('send_request')
  }}</UiButtonPrimary>
</template>

<style scoped></style>

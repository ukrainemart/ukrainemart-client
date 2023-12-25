<script setup lang="ts">
  const props = defineProps<{
    loading: boolean;
    inputs: InputsCreateProduct;
    errorEn: boolean;
  }>();
  const emits = defineEmits(['update:errorEn']);

  const { value, errorMessage } = useField(
    () => 'multiLangValid',
    {},
    {
      validateOnValueUpdate: false,
    }
  );
  value.value = false;

  const checkValidation = () => {
    let check = false;

    Object.keys(props.inputs).some((key: string) => {
      if (key.includes('En') && !props.inputs[key as keyof InputsCreateProduct]) {
        check = true;
        return true;
      }
      return false;
    });

    Object.keys(props.inputs.sections).forEach((key: any) => {
      if (key.includes('en') && !props.inputs.sections[key]) {
        check = true;
        return false;
      }
    });
    value.value = check;
    // emits('update:errorEn', !!errorMessage);
  };

  watchDeep(errorMessage, () => {
    emits('update:errorEn', !!errorMessage.value);
  });

  watchDeep(
    () => props.inputs,
    () => {
      checkValidation();
    }
  );
</script>

<template>
  <UiButtonPrimaryLoading :loading="loading" type="submit">
    <slot />
  </UiButtonPrimaryLoading>
</template>

<style scoped></style>

<script setup lang="ts">
  const props = defineProps<{
    modelValue: string;
    name: string;
    customClass?: string;
    type?: string;
    tabindex?: any;
    styles?: string;
  }>();

  const { value, errorMessage } = useField(() => props.name);

  watchDeep(
    () => props.modelValue,
    () => {
      value.value = props.modelValue;
    }
  );

  const emits = defineEmits(['update:modelValue']);

  const handleInput = () => {
    emits('update:modelValue', value.value);
  };
</script>

<template>
  <UiInputOutline
    v-model="value"
    :tabindex="tabindex"
    :type="type || 'text'"
    :class="
      cn(props.styles, {
        '!border-status_red': errorMessage,
      })
    "
    name="titleUa"
    @input="handleInput"
  />
  <UiAlertInputError :error="errorMessage" />
</template>

<style scoped></style>

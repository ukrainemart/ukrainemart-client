<script setup lang="ts">
  const props = defineProps<{
    modelValue: string;
    name: string;
    customClass?: string;
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
  <UiTextareaOutline
    v-model="value"
    class="min-h-[120px] md:min-h-[179px]"
    :class="{ '!border-status_red': errorMessage }"
    @input="handleInput"
  />
  <UiAlertInputError :error="errorMessage" />
</template>

<style scoped></style>

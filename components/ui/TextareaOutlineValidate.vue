<script setup lang="ts">
  interface Props {
    modelValue: string;
    name: string;
    customClass?: string;
    class?: string;
    message?: boolean;
    placeholder?: string;
    validateOnValueUpdate?: boolean;
  }
  const props = withDefaults(defineProps<Props>(), {
    message: true,
    placeholder: '',
    validateOnValueUpdate: true,
  });

  const { value, errorMessage } = useField(
    () => props.name,
    {},
    {
      validateOnValueUpdate: props.validateOnValueUpdate,
    }
  );

  const getStartValue = () => {
    value.value = props.modelValue;
  };

  watchDeep(
    () => props.modelValue,
    () => {
      getStartValue();
    }
  );
  getStartValue();

  const getClasses = computed(() => {
    return `${props.class} ${errorMessage.value ? '!border-status_red' : ''}`;
  });

  const emits = defineEmits(['update:modelValue']);

  const handleInput = () => {
    emits('update:modelValue', value.value);
  };
</script>

<template>
  <div class="relative">
    <UiTextareaOutline
      v-model="value"
      :placeholder="placeholder"
      :class="cn('min-h-[120px] w-full  md:min-h-[179px]', getClasses)"
      @input="handleInput"
    />
    <UiAlertInputError
      v-if="message"
      class="absolute left-0 top-full mt-[5px] normal-case"
      :error="errorMessage || ''"
    />
  </div>
</template>

<style scoped></style>

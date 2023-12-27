<script setup lang="ts">
  interface Props {
    modelValue: string;
    name: string;
    type?: string;
    tabindex?: any;
    styles?: string;
    class?: string;
    message?: boolean;
    validateOnValueUpdate?: boolean;
    placeholder?: string;
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
    return `${props.class} ' ' ${props.styles} ' ' ${
      errorMessage.value ? '!border-status_red' : ''
    }`;
  });

  const emits = defineEmits(['update:modelValue']);

  const handleInput = () => {
    emits('update:modelValue', value.value);
  };
</script>

<template>
  <div class="relative w-full">
    <UiInputOutline
      v-model="value"
      :placeholder="placeholder"
      :tabindex="tabindex"
      :type="type || 'text'"
      :class="cn('w-full', getClasses)"
      :name="name"
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

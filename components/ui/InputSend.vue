<script setup lang="ts">
  defineProps<{
    btnType?: string;
    modelValue: string;
    placeholder?: string;
  }>();
  const emits = defineEmits(['update:modelValue']);
  const value = ref('');

  const updateValue = () => {
    emits('update:modelValue', value.value);
  };
</script>

<template>
  <div
    class="input_outline relative flex w-full items-center justify-end overflow-hidden !border-status_gray !px-0"
  >
    <input
      v-model="value"
      :placeholder="placeholder"
      type="text"
      class="absolute left-0 top-0 h-full w-full bg-transparent pl-[15px] focus:outline-none"
      @input="updateValue"
    />
    <div class="relative z-10 pr-[10px]">
      <UiButtonOpacitySend :type="btnType" />
    </div>
  </div>
</template>

<style scoped></style>

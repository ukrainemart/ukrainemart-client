<script setup lang="ts">
  defineProps<{
    modelValue?: string;
    required?: boolean;
  }>();

  const showPassword = ref(false);

  const emits = defineEmits(['update:modelValue']);
  const handleInput = (event: Event) => {
    const inputValue = (event.target as HTMLInputElement).value;
    emits('update:modelValue', inputValue);
  };

  const switchPassword = () => {
    showPassword.value = !showPassword.value;
  };
</script>

<template>
  <div class="relative w-full">
    <UiButtonOpacity
      class="absolute inset-y-0 right-[5px] my-auto p-[10px] md:right-[10px] xl:right-[15px]"
      @click="switchPassword"
    >
      <SvgoShowPassword
        v-if="showPassword"
        class="!h-[7px] !w-[11px] text-status_gray md:!h-[10px] md:!w-[15px] xl:!h-[15px] xl:!w-[22px]"
      />
      <SvgoHiddenPassword
        v-else
        class="!h-[9px] !w-[11px] text-status_gray md:!h-[13px] md:!w-[15px] xl:!h-[19px] xl:!w-[22px]"
      />
    </UiButtonOpacity>
    <UiInputOutline
      :value="modelValue"
      :required="required"
      class="w-full pr-[26px] md:pr-[35px] xl:pr-[47px]"
      :type="showPassword ? 'text' : 'password'"
      @input="handleInput"
    />
  </div>
</template>

<style scoped></style>

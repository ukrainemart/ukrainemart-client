<script setup lang="ts">
  const props = defineProps<{
    modelValue: string;
    required?: boolean;
    tabindex?: string;
    showPasswordError?: boolean;
    name: string;
  }>();
  const { value, errorMessage } = useField(() => props.name);

  const showPassword = ref(false);

  const emits = defineEmits(['update:modelValue']);
  const handleInput = () => {
    emits('update:modelValue', value);
  };

  watchDeep(
    () => value,
    () => {
      handleInput();
    }
  );

  const switchPassword = () => {
    showPassword.value = !showPassword.value;
  };
</script>

<template>
  <div class="relative w-full">
    <div>
      <UiButtonOpacity
        class="absolute inset-y-0 right-[5px] my-auto p-[10px] md:right-[10px] xl:right-[15px]"
        @click="switchPassword"
      >
        <SvgoShowPassword
          v-if="showPassword"
          class="pointer-events-none inline !h-[7px] !w-[11px] text-status_gray md:!h-[10px] md:!w-[15px] xl:!h-[15px] xl:!w-[22px]"
        />
        <SvgoHiddenPassword
          v-else
          class="pointer-events-none inline !h-[9px] !w-[11px] text-status_gray md:!h-[13px] md:!w-[15px] xl:!h-[19px] xl:!w-[22px]"
        />
      </UiButtonOpacity>
    </div>
    <UiInputOutline
      v-model="value"
      :tabindex="tabindex"
      :name="name"
      :required="required"
      class="w-full pr-[26px] md:pr-[35px] xl:pr-[47px]"
      :class="{ '!border-status_red': errorMessage && showPasswordError }"
      :type="showPassword ? 'text' : 'password'"
    />
  </div>
  <UiAlertInputError v-if="showPasswordError" :error="errorMessage" />
</template>

<style scoped></style>

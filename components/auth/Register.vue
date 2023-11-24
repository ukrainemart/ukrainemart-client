<script setup lang="ts">
  const auth = useAuthStore();
  const emits = defineEmits(['switchTypeAuth']);
  const credentials = reactive<RegisterCredentials>({
    name: '',
    email: '',
    password: '',
    c_password: '',
  });
  type FormValidationErrors = {
    password?: string;
    c_password?: string;
  };
  const formValidationErrors = ref<FormValidationErrors>({});

  const switchTypeAuth = (type: SwitchAuth) => {
    emits('switchTypeAuth', type);
  };

  const validateForm = async () => {
    try {
      await validationSchema.validate(credentials, { abortEarly: false });
      formValidationErrors.value = {};

      auth.register(credentials).then((res: any) => {
        if (res.data.value.status === 1) {
          switchTypeAuth('successRegister');
        }
      });
    } catch (validationErrors: any) {
      formValidationErrors.value = {};

      validationErrors.inner.forEach((error: any) => {
        const errorPath = error.path as keyof FormValidationErrors;
        formValidationErrors.value[errorPath] = error.message;
      });
    }
  };

  const register = () => {
    validateForm();
  };
</script>

<template>
  <UiTitleNamu
    class="mb-[20px] text-center text-[23px] md:mb-[22px] md:text-[35px] xl:mb-[25px] xl:text-[50px]"
  >
    {{ $t('registration') }}
  </UiTitleNamu>
  <CommonButtonGoogle>
    {{ $t('logInWithGoogle') }}
  </CommonButtonGoogle>

  <UiDivider
    :label="'або'"
    class="my-[10px] w-[100px] self-center md:my-[17px] md:w-[139px] xl:my-[15px] xl:w-[181px]"
  />

  <form action="#" @submit.prevent="register">
    <div class="flex flex-col">
      <div class="flex flex-col gap-[10px] md:gap-[12px] xl:gap-[15px]">
        <UiLabel :label="`${$t('name')}:`" type="text" class="!text-status_gray">
          <UiInputOutline v-model="credentials.name" tabindex="1" required />
        </UiLabel>

        <UiLabel :label="`${$t('email')}:`" type="email" class="!text-status_gray">
          <UiInputOutline v-model="credentials.email" tabindex="2" required />
        </UiLabel>

        <UiLabel :label="`${$t('password')}:`" class="!text-status_gray">
          <UiInputOutlinePassword v-model="credentials.password" tabindex="3" required />
        </UiLabel>
        <div v-if="formValidationErrors.password" class="text-status_red">
          {{ $t(formValidationErrors.password) }}
        </div>

        <UiLabel :label="`${$t('repeatPassword')}:`" class="!text-status_gray">
          <UiInputOutlinePassword v-model="credentials.c_password" tabindex="4" required />
        </UiLabel>
        <div v-if="formValidationErrors.c_password" class="text-status_red">
          {{ $t(formValidationErrors.c_password) }}
        </div>
      </div>

      <div class="mt-[14px] flex items-center justify-between md:mt-[20px]">
        <UiLabel
          :label="$t('consentStatement')"
          class="!flex-row-reverse items-center justify-end whitespace-normal"
        >
          <UiCheckbox required tabindex="5" />
        </UiLabel>
      </div>

      <UiButtonPrimary type="submit" class="mt-[20px] md:mt-[25px] xl:mt-[30px]" tabindex="6">
        {{ $t('signup') }}
      </UiButtonPrimary>

      <div
        class="mt-[15px] flex items-center justify-center gap-[5px] text-[7px] font-medium md:mt-[22px] md:text-[10px] xl:mt-[20px] xl:text-[14px]"
      >
        <span>
          {{ $t('alreadyRegistered') }}
        </span>

        <UiButtonText
          type="button"
          class="gap-[5px] !text-[7px] font-semibold md:!text-[10px] xl:!text-[14px]"
          tabindex="7"
          @click="switchTypeAuth('login')"
        >
          {{ $t('login') }}
        </UiButtonText>
      </div>
    </div>
  </form>
</template>

<style scoped></style>

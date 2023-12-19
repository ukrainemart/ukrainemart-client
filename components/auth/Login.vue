<script setup lang="ts">
  const auth = useAuthStore();
  const { t } = useI18n();

  const emits = defineEmits(['switchTypeAuth', 'switchModal']);

  const switchTypeAuth = (type: SwitchAuth) => {
    emits('switchTypeAuth', type);
  };

  const error = ref('');
  const loadingRequest = ref(false);

  const credentials = reactive<LoginCredentials>({
    email: '',
    password: '',
  });

  const login = async () => {
    loadingRequest.value = true;
    const status: any = await auth.login(credentials);

    setTimeout(() => {
      loadingRequest.value = false;
    }, 100);

    if (status === 0) {
      error.value = t('validation_inputs.the_data_incorrect');
      return false;
    }

    if (!status) {
      error.value = t('validation_inputs.try_again');
      return false;
    }

    if (status === 2) {
      error.value = t('email_validate.email_not_verified');
    }
  };
</script>

<template>
  <UiTitleNamu
    class="mb-[20px] text-center text-[23px] md:mb-[22px] md:text-[35px] xl:mb-[25px] xl:text-[50px]"
  >
    {{ $t('authorization') }}
  </UiTitleNamu>
  <VForm :validation-schema="validationLogin" action="#" @submit="login">
    <div class="flex flex-col">
      <div class="flex flex-col gap-[10px] md:gap-[12px] xl:gap-[15px]">
        <UiLabel :label="`${$t('email')}:`" type="text" class="!text-status_gray">
          <UiInputOutlineValidate v-model="credentials.email" name="email" tabindex="1" />
        </UiLabel>
        <UiLabel for="" :label="`${$t('password')}:`" class="!text-status_gray">
          <UiInputOutlinePassword
            v-model="credentials.password"
            :showPasswordError="true"
            tabindex="2"
            name="password"
          />
        </UiLabel>
      </div>

      <div class="mt-[14px] flex items-center justify-between md:mt-[20px]">
        <UiLabel :label="$t('rememberMe')" class="!flex-row-reverse items-center justify-end">
          <UiCheckbox tabindex="3" />
        </UiLabel>
        <UiButtonText
          class="!text-[7px] text-status_gray md:!text-[10px] xl:!text-[14px]"
          tabindex="4"
          @click="switchTypeAuth('forgotPassword')"
        >
          {{ $t('forgotPassword') }}
        </UiButtonText>
      </div>

      <UiAlertTextDanger v-if="error" class="mt-[20px]">{{ error }}</UiAlertTextDanger>
      <UiButtonPrimaryLoading
        :loading="loadingRequest"
        type="submit"
        class="mt-[20px] md:mt-[25px] xl:mt-[30px]"
        tabindex="5"
      >
        {{ $t('login') }}
      </UiButtonPrimaryLoading>
      <CommonButtonGoogle type="button" tabindex="6">
        {{ $t('logInWithGoogle') }}
      </CommonButtonGoogle>

      <div
        class="mt-[15px] flex items-center justify-center gap-[5px] text-[7px] font-medium md:mt-[22px] md:text-[10px] xl:mt-[20px] xl:text-[14px]"
      >
        <span>
          {{ $t('notRegistered') }}
        </span>
        <UiButtonText
          class="gap-[5px] !text-[7px] font-semibold md:!text-[10px] xl:!text-[14px]"
          tabindex="7"
          @click="switchTypeAuth('register')"
        >
          {{ $t('signup') }}
        </UiButtonText>
      </div>
    </div>
  </VForm>
</template>

<style scoped></style>

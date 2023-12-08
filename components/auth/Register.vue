<script setup lang="ts">
  const { t } = useI18n();
  const auth = useAuthStore();
  const emits = defineEmits(['switchTypeAuth']);
  const credentials = reactive<RegisterCredentials>({
    name: '',
    email: '',
    password: '',
    c_password: '',
  });

  const error = ref('');
  const loadingRequest = ref(false);
  const switchTypeAuth = (type: SwitchAuth) => {
    emits('switchTypeAuth', type);
  };

  const register = () => {
    loadingRequest.value = true;
    auth.register(credentials).then((res: any) => {
      loadingRequest.value = false;
      if (res.data.value.status === 2) {
        switchTypeAuth('successRegister');
      } else {
        error.value = t('validation_inputs.try_again');
      }
    });
  };
</script>

<template>
  <UiTitleNamu
    class="mb-[20px] text-center text-[23px] md:mb-[22px] md:text-[35px] xl:mb-[25px] xl:text-[50px]"
  >
    {{ $t('registration') }}
  </UiTitleNamu>
  <CommonButtonGoogle type="button">
    {{ $t('logInWithGoogle') }}
  </CommonButtonGoogle>

  <UiDivider
    :label="'або'"
    class="my-[10px] w-[100px] self-center md:my-[17px] md:w-[139px] xl:my-[15px] xl:w-[181px]"
  />

  <VForm action="#" :validation-schema="validationRegister" @submit="register">
    <div class="flex flex-col">
      <div class="flex flex-col gap-[10px] md:gap-[12px] xl:gap-[15px]">
        <UiLabel :label="`${$t('name')}:`" type="text" class="!text-status_gray">
          <UiInputOutlineValidate v-model="credentials.name" name="name" tabindex="1" required />
        </UiLabel>

        <UiLabel :label="`${$t('email')}:`" type="email" class="!text-status_gray">
          <UiInputOutlineValidate v-model="credentials.email" name="email" tabindex="2" required />
        </UiLabel>

        <UiLabel for="" :label="`${$t('password')}:`" class="!text-status_gray">
          <UiInputOutlinePassword
            v-model="credentials.password"
            :showPasswordError="true"
            name="password"
            tabindex="3"
            required
          />
        </UiLabel>
        <UiLabel for="" :label="`${$t('repeatPassword')}:`" class="!text-status_gray">
          <UiInputOutlinePassword
            v-model="credentials.c_password"
            :showPasswordError="true"
            name="c_password"
            tabindex="4"
            required
          />
        </UiLabel>
      </div>

      <div class="mt-[14px] flex items-center justify-between md:mt-[20px]">
        <UiLabel
          :label="$t('consentStatement')"
          class="!flex-row-reverse items-center justify-end whitespace-normal"
        >
          <UiCheckbox required tabindex="5" />
        </UiLabel>
      </div>

      <UiAlertTextDanger v-if="error" class="mt-[7px] xl:mt-[10px]">{{ error }}</UiAlertTextDanger>

      <UiButtonPrimaryLoading
        :loading="loadingRequest"
        type="submit"
        class="mt-[20px] md:mt-[25px] xl:mt-[30px]"
        tabindex="6"
      >
        {{ $t('signup') }}
      </UiButtonPrimaryLoading>

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
  </VForm>
</template>

<style scoped></style>

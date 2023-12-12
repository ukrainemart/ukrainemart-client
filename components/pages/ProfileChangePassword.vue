<script setup lang="ts">
  const auth = useAuthStore();
  const { t } = useI18n();

  const isPassword = computed(() => auth.isPassword);
  const error = ref('');
  const message = ref('');
  const loadingRequest = ref(false);

  const inputs = ref({
    oldPassword: '',
    newPassword: '',
    newConfPassword: '',
  });

  const isShowValidate = ref(false);
  const onInvalidSubmit = () => {
    isShowValidate.value = true;
  };

  const changePassword = () => {
    loadingRequest.value = true;
    message.value = '';
    error.value = '';

    useApi(`${useUrlApi()}/user/password/change`, {
      method: 'POST',
      body: {
        old_password: inputs.value.oldPassword,
        new_password: inputs.value.newPassword,
        new_c_password: inputs.value.newConfPassword,
      },
    }).then((res: any) => {
      if (res.status === 1) {
        message.value = t('password_successfully_changed');
        inputs.value.oldPassword = '';
        inputs.value.newPassword = '';
        inputs.value.newConfPassword = '';
        isShowValidate.value = false;
        loadingRequest.value = false;
        return false;
      }
      if (res.status === 0) {
        error.value = t('the_old_password_is_wrong');
        return false;
      }
    });
  };

  const setPassword = () => {
    loadingRequest.value = true;
    useApi(`${useUrlApi()}/user/password/set`, {
      method: 'POST',
      body: {
        new_password: inputs.value.newPassword,
        new_c_password: inputs.value.newConfPassword,
      },
    }).then(() => {
      loadingRequest.value = false;
    });
  };

  const onSetPassword = () => {
    if (isPassword) {
      changePassword();
      return false;
    }
    setPassword();
  };
</script>

<template>
  <VForm
    action="#"
    :validation-schema="validationChangePassword"
    @invalid-submit="onInvalidSubmit"
    @submit="onSetPassword"
  >
    <div
      class="mt-[30px] flex flex-col gap-y-[15px] sm:gap-x-[50px] md:mt-[35px] md:gap-x-[84px] md:gap-y-[20px] xl:mt-[55px] 2xl:gap-x-[150px] 2xl:gap-y-[25px]"
    >
      <UiLabel
        v-if="isPassword"
        class="row-span-1"
        :label="$t('password_change.old_password') + ':'"
      >
        <UiInputOutlinePassword
          v-model="inputs.oldPassword"
          :placeholder="$t('placeholders.password_hide')"
          :showPasswordError="isShowValidate"
          name="old_password"
        />
      </UiLabel>
      <UiLabel
        class="row-span-1"
        :label="(!isPassword ? $t('password') : $t('password_change.new_password')) + ':'"
      >
        <UiInputOutlinePassword
          v-model="inputs.newPassword"
          :placeholder="$t('placeholders.password_hide')"
          :showPasswordError="isShowValidate"
          name="newPassword"
        />
      </UiLabel>
      <UiLabel class="row-span-1" :label="$t('repeatPassword') + ':'">
        <UiInputOutlinePassword
          v-model="inputs.newConfPassword"
          :placeholder="$t('placeholders.password_hide')"
          :showPasswordError="isShowValidate"
          name="newConfPassword"
        />
      </UiLabel>
      <UiAlertTextDanger v-if="error"> {{ error }}</UiAlertTextDanger>
      <UiAlertTextSuccess v-if="message"> {{ message }}</UiAlertTextSuccess>
      <div class="col-span-2 flex justify-center">
        <UiButtonPrimaryLoading :loading="loadingRequest" type="submit" class="w-fit">{{
          !isPassword ? $t('password_change.set_password') : $t('change_password')
        }}</UiButtonPrimaryLoading>
      </div>
    </div>
  </VForm>
</template>

<style scoped></style>

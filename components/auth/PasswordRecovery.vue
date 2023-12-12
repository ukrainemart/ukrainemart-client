<script setup lang="ts">
  const { t } = useI18n();
  useTitle(t('labels.password_recovery'));
  const routePage = useRoute();
  const loadingRequest = ref(false);
  const successChange = ref(false);
  const error = ref('');
  const inputs = ref({
    password: '',
    cPassword: '',
  });
  const resetId = routePage.query.id;

  const onRecoveryPassword = () => {
    error.value = '';
    loadingRequest.value = true;
    useApiFetch(`${useUrlApi()}/user/password/reset/${resetId}`, {
      method: 'POST',
      body: {
        password: inputs.value.password,
        c_password: inputs.value.cPassword,
      },
    }).then((res: any) => {
      if (res.data.value.status === 0) {
        error.value = t('the_link_not_active');
        return false;
      }
      if (res.data.value.status === 1) {
        successChange.value = true;
        return false;
      }
    });
  };
</script>

<template>
  <div
    class="container flex flex-1 items-center justify-center pb-[130px] pt-[20px] md:pb-[100px] md:pt-[30px] xl:pb-[130px] xl:pt-[50px]"
  >
    <VForm :validation-schema="validationRecoveryPassword" @submit="onRecoveryPassword">
      <div
        class="w-full max-w-[490px] rounded-[5px] bg-white px-[25px] pb-[28px] pt-[20px] shadow-lg md:rounded-[10px] md:px-[40px] md:pb-[41px] md:pt-[35px] xl:max-w-[647px] xl:rounded-[15px] xl:px-[64px] xl:py-[50px]"
      >
        <div v-if="!successChange" class="flex flex-col">
          <UiTitleNamu
            class="mb-[20px] text-center text-[23px] md:mb-[22px] md:text-[35px] xl:mb-[25px] xl:text-[50px]"
          >
            {{ $t('labels.password_recovery') }}
          </UiTitleNamu>
          <div class="flex flex-col gap-[10px] md:gap-[12px] xl:gap-[15px]">
            <UiLabel :label="$t('password_change.new_password') + ':'">
              <UiInputOutlinePassword
                v-model="inputs.password"
                :showPasswordError="true"
                name="password"
              />
            </UiLabel>
            <UiLabel :label="$t('repeatPassword') + ':'">
              <UiInputOutlinePassword
                v-model="inputs.cPassword"
                :showPasswordError="true"
                name="cPassword"
              />
            </UiLabel>
          </div>
          <UiButtonPrimaryLoading
            type="submit"
            :loading="loadingRequest"
            class="mt-[40px] self-center md:mt-[50px] xl:mt-[60px]"
            >{{ $t('labels.recover_password') }}</UiButtonPrimaryLoading
          >
        </div>
        <AuthSuccessRegister v-else :message="$t('password_successfully_changed')" />
      </div>
    </VForm>
  </div>
</template>

<style scoped></style>

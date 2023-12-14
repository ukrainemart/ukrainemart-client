<script setup lang="ts">
  const auth = useAuthStore();
  const { t } = useI18n();
  const email = ref('');
  const error = ref('');
  const loadingRequest = ref(false);

  const succesSendForm = () => {
    auth.switchTypeAuth('messageRestorePassword');
  };

  const onSendForm = () => {
    loadingRequest.value = true;
    error.value = '';

    useApiFetch(`${useUrlApi()}/user/password/forgot`, {
      method: 'POST',
      body: {
        email: email.value,
      },
    }).then((res: any) => {
      loadingRequest.value = false;
      if (res.data.value.status === 1) {
        succesSendForm();
        return false;
      }
      if (res.data.value.status === 0) {
        error.value = t('email_validate.there_no_such_email');
        return false;
      }
    });
  };
</script>

<template>
  <div>
    <form action="#" @submit.prevent="onSendForm">
      <UiTitleNamu
        class="mb-[20px] text-center text-[23px] md:mb-[22px] md:text-[35px] xl:mb-[25px] xl:text-[50px]"
      >
        {{ $t('labels.recover_password') }}
      </UiTitleNamu>
      <UiLabel label="Email:">
        <UiInputOutline v-model="email" :placeholder="$t('email')" />
      </UiLabel>
      <UiAlertTextDanger v-if="error" class="mt-[20px]">{{ error }}</UiAlertTextDanger>
      <UiButtonPrimaryLoading
        :loading="loadingRequest"
        type="submit"
        class="mt-[30px] w-full md:mt-[65px]"
        >{{ $t('labels.restore') }}</UiButtonPrimaryLoading
      >
    </form>
  </div>
</template>

<style scoped></style>

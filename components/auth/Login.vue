<script setup lang="ts">
  const auth = useAuthStore();
  const emits = defineEmits(['switchTypeAuth', 'switchModal']);

  const switchTypeAuth = (type: SwitchAuth) => {
    emits('switchTypeAuth', type);
  };
  const switchModal = (value: boolean) => {
    emits('switchModal', value);
  };

  const credentials = reactive<LoginCredentials>({
    email: '',
    password: '',
  });

  const login = async () => {
    await auth.login(credentials);
    switchModal(false);
  };
</script>

<template>
  <UiTitleNamu
    class="mb-[20px] text-center text-[23px] md:mb-[22px] md:text-[35px] xl:mb-[25px] xl:text-[50px]"
  >
    {{ $t('authorization') }}
  </UiTitleNamu>
  <form action="#" @submit.prevent="login">
    <div class="flex flex-col">
      <div class="flex flex-col gap-[10px] md:gap-[12px] xl:gap-[15px]">
        <UiLabel :label="`${$t('email')}:`" type="text" class="!text-status_gray">
          <UiInputOutline v-model="credentials.email" />
        </UiLabel>
        <UiLabel :label="`${$t('password')}:`" class="!text-status_gray">
          <UiInputOutlinePassword v-model="credentials.password" />
        </UiLabel>
      </div>
      <div class="mt-[14px] flex items-center justify-between md:mt-[20px]">
        <UiLabel :label="$t('rememberMe')" class="!flex-row-reverse items-center justify-end">
          <UiCheckbox />
        </UiLabel>
        <UiButtonText class="!text-[7px] text-status_gray md:!text-[10px] xl:!text-[14px]">
          {{ $t('forgotPassword') }}
        </UiButtonText>
      </div>
      <UiButtonPrimary type="submit" class="mt-[20px] md:mt-[25px] xl:mt-[30px]">
        {{ $t('login') }}
      </UiButtonPrimary>
      <CommonButtonGoogle>
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
          @click="switchTypeAuth('register')"
        >
          {{ $t('signup') }}
        </UiButtonText>
      </div>
    </div>
  </form>
</template>

<style scoped></style>

<script setup lang="ts">
  const auth = useAuthStore();
  const emits = defineEmits(['switchTypeAuth']);

  const switchTypeAuth = (type: SwitchAuth) => {
    emits('switchTypeAuth', type);
  };

  const credentials = reactive<LoginCredentials>({
    email: '',
    password: '',
  });

  const login = () => {
    auth.login(credentials).then((res: any) => {
      navigateTo('/profile');
      console.log(res);
    });
  };
</script>

<template>
  <UiTitleNamu
    class="mb-[20px] text-center text-[23px] md:mb-[22px] md:text-[35px] xl:mb-[25px] xl:text-[50px]"
    >Авторизація</UiTitleNamu
  >
  <form action="#" @submit.prevent="login()">
    <div class="flex flex-col">
      <div class="flex flex-col gap-[10px] md:gap-[12px] xl:gap-[15px]">
        <UiLabel label="Email:" type="text" class="!text-status_gray">
          <UiInputOutline v-model="credentials.email" />
        </UiLabel>
        <UiLabel label="Пароль:" class="!text-status_gray">
          <UiInputOutline v-model="credentials.password" type="password" />
        </UiLabel>
      </div>
      <div class="flex items-center justify-between">
        <UiLabel label="Запам’ятати мене" class="!flex-row-reverse items-center justify-end">
          <UiCheckbox />
        </UiLabel>
        <UiButtonText class="!text-[7px] text-status_gray md:!text-[10px] xl:!text-[14px]"
          >Забули пароль?</UiButtonText
        >
      </div>
      <UiButtonPrimary class="mt-[20px] md:mt-[25px] xl:mt-[30px]">Увійти</UiButtonPrimary>
      <CommonButtonGoogle>Увійти через Google</CommonButtonGoogle>
      <div
        class="mt-[15px] flex items-center justify-center gap-[5px] text-[7px] font-medium md:mt-[22px] md:text-[10px] xl:mt-[20px] xl:text-[14px]"
      >
        <span>Ще не зареєстровані?</span>
        <UiButtonText
          class="gap-[5px] !text-[7px] font-semibold md:!text-[10px] xl:!text-[14px]"
          @click="switchTypeAuth('register')"
          >Зареєструватися</UiButtonText
        >
      </div>
    </div>
  </form>
</template>

<style scoped></style>

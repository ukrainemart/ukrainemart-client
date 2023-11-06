<script setup lang="ts">
  const auth = useAuthStore();

  const emits = defineEmits(['switchTypeAuth']);

  const switchTypeAuth = (type: SwitchAuth) => {
    emits('switchTypeAuth', type);
  };

  const credentials = reactive<RegisterCredentials>({
    name: '',
    email: '',
    password: '',
    c_password: '',
  });

  const register = () => {
    auth.register(credentials);
  };
</script>

<template>
  <UiTitleNamu
    class="mb-[20px] text-center text-[23px] md:mb-[22px] md:text-[35px] xl:mb-[25px] xl:text-[50px]"
    >Реєстрація</UiTitleNamu
  >
  <CommonButtonGoogle>Увійти через Google</CommonButtonGoogle>
  <UiDivider
    :label="'або'"
    class="my-[10px] w-[100px] self-center md:my-[17px] md:w-[139px] xl:my-[15px] xl:w-[181px]"
  />
  <form action="#" @submit.prevent="register">
    <div class="flex flex-col">
      <div class="flex flex-col gap-[10px] md:gap-[12px] xl:gap-[15px]">
        <UiLabel label="Ім'я:" type="text" class="!text-status_gray">
          <UiInputOutline v-model="credentials.name" required />
        </UiLabel>
        <UiLabel label="Email:" type="email" class="!text-status_gray">
          <UiInputOutline v-model="credentials.email" required />
        </UiLabel>
        <UiLabel label="Пароль:" class="!text-status_gray">
          <UiInputOutlinePassword v-model="credentials.password" required />
        </UiLabel>
        <UiLabel label="Повторіть пароль:" class="!text-status_gray">
          <UiInputOutlinePassword v-model="credentials.c_password" required />
        </UiLabel>
      </div>
      <div class="mt-[14px] flex items-center justify-between md:mt-[20px]">
        <UiLabel
          label="Приєднуючись, я погоджуюся з умовами використання та політикою конфіденційності."
          class="!flex-row-reverse items-center justify-end whitespace-normal"
        >
          <UiCheckbox required />
        </UiLabel>
      </div>
      <UiButtonPrimary class="mt-[20px] md:mt-[25px] xl:mt-[30px]">Зареєструватися</UiButtonPrimary>
      <div
        class="mt-[15px] flex items-center justify-center gap-[5px] text-[7px] font-medium md:mt-[22px] md:text-[10px] xl:mt-[20px] xl:text-[14px]"
      >
        <span>Вже зареєстровані?</span>
        <UiButtonText
          type="button"
          class="gap-[5px] !text-[7px] font-semibold md:!text-[10px] xl:!text-[14px]"
          @click="switchTypeAuth('login')"
          >Увійти</UiButtonText
        >
      </div>
    </div>
  </form>
</template>

<style scoped></style>

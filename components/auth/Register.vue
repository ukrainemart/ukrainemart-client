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
          <UiInputOutline tabindex="1" v-model="credentials.name" required />
        </UiLabel>
        <UiLabel :label="`${$t('email')}:`" type="email" class="!text-status_gray">
          <UiInputOutline tabindex="2" v-model="credentials.email" required />
        </UiLabel>
        <UiLabel :label="`${$t('password')}:`" class="!text-status_gray">
          <UiInputOutlinePassword tabindex="3" v-model="credentials.password" required />
        </UiLabel>
        <UiLabel :label="`${$t('repeatPassword')}:`" class="!text-status_gray">
          <UiInputOutlinePassword tabindex="4" v-model="credentials.c_password" required />
        </UiLabel>
      </div>
      <div class="mt-[14px] flex items-center justify-between md:mt-[20px]">
        <UiLabel
          :label="$t('consentStatement')"
          class="!flex-row-reverse items-center justify-end whitespace-normal"
        >
          <UiCheckbox required />
        </UiLabel>
      </div>
      <UiButtonPrimary type="submit" class="mt-[20px] md:mt-[25px] xl:mt-[30px]">
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
          @click="switchTypeAuth('login')"
        >
          {{ $t('login') }}
        </UiButtonText>
      </div>
    </div>
  </form>
</template>

<style scoped></style>

<script setup lang="ts">
  const auth = useAuthStore();
  const isPassword = computed(() => auth.isPassword);

  const inputs = ref({
    oldPassword: '',
    newPassword: '',
    newConfPassword: '',
  });

  const changePassword = () => {
    useApi(`${useUrlApi()}/user/password/change`, {
      method: 'POST',
      body: {
        old_password: inputs.value.oldPassword,
        new_password: inputs.value.newPassword,
        new_c_password: inputs.value.newConfPassword,
      },
    }).then((res) => {
      console.log(res);
    });
  };

  const setPassword = () => {
    useApi(`${useUrlApi()}/user/password/set`, {
      method: 'POST',
      body: {
        new_password: inputs.value.newPassword,
        new_c_password: inputs.value.newConfPassword,
      },
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
  <div
    class="mt-[30px] flex flex-col gap-y-[15px] sm:gap-x-[50px] md:mt-[35px] md:gap-x-[84px] md:gap-y-[20px] xl:mt-[55px] 2xl:gap-x-[150px] 2xl:gap-y-[25px]"
  >
    <UiLabel v-if="isPassword" class="row-span-1" :label="$t('password_change.old_password') + ':'">
      <UiInputOutlinePassword v-model="inputs.oldPassword" />
    </UiLabel>
    <UiLabel
      class="row-span-1"
      :label="(!isPassword ? $t('password') : $t('password_change.new_password')) + ':'"
    >
      <UiInputOutlinePassword v-model="inputs.newPassword" />
    </UiLabel>
    <UiLabel class="row-span-1" :label="$t('repeatPassword') + ':'">
      <UiInputOutlinePassword v-model="inputs.newConfPassword" />
    </UiLabel>
    <div class="col-span-2 flex justify-center">
      <UiButtonPrimary class="w-fit" @click="onSetPassword">{{
        !isPassword ? $t('password_change.set_password') : $t('change_password')
      }}</UiButtonPrimary>
    </div>
  </div>
</template>

<style scoped></style>

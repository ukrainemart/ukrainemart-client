<script setup lang="ts">
  const auth = useAuthStore();
  const isPassword = computed(() => auth.isPassword);

  const changePassword = () => {
    useApi(`${useUrlApi()}/user/password/change`, {
      body: {
        old_password: 'required|min:6|max:20',
        new_password: 'required|min:6|max:20',
        new_c_password: 'required|min:6|max:20|same:new_password',
      },
    });
  };
</script>

<template>
  <div
    class="mt-[30px] flex flex-col gap-y-[15px] sm:gap-x-[50px] md:mt-[35px] md:gap-x-[84px] md:gap-y-[20px] xl:mt-[55px] 2xl:gap-x-[150px] 2xl:gap-y-[25px]"
  >
    <UiLabel v-if="isPassword" class="row-span-1" :label="$t('password_change.old_password') + ':'">
      <UiInputOutline />
    </UiLabel>
    <UiLabel
      class="row-span-1"
      :label="(!isPassword ? $t('password') : $t('password_change.new_password')) + ':'"
    >
      <UiInputOutline />
    </UiLabel>
    <UiLabel class="row-span-1" :label="$t('repeatPassword') + ':'">
      <UiInputOutline />
    </UiLabel>
    <div class="col-span-2 flex justify-center">
      <UiButtonPrimary class="w-fit">{{
        !isPassword ? $t('password_change.set_password') : $t('change_password')
      }}</UiButtonPrimary>
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
  defineProps<{
    type: SwitchAuth;
  }>();

  const emits = defineEmits(['switchTypeAuth', 'switchModal']);

  const switchTypeAuth = (type: SwitchAuth) => {
    emits('switchTypeAuth', type);
  };

  const switchModal = (value: boolean) => {
    emits('switchModal', value);
  };
</script>

<template>
  <UiModal :ui="{ width: 'max-w-[490px] 2xl:max-w-[622px]', container: 'items-center' }">
    <div class="flex flex-col">
      <AuthLogin
        v-if="type === 'login'"
        @switchTypeAuth="switchTypeAuth"
        @switchModal="switchModal"
      />
      <AuthRegister v-if="type === 'register'" @switchTypeAuth="switchTypeAuth" />
      <AuthSuccessRegister
        v-if="type === 'successRegister'"
        :message="$t('success_register_message')"
        @switchModal="switchModal"
      />
      <AuthForgotPassword v-if="type === 'forgotPassword'" @switchModal="switchModal" />
      <AuthMessageRestorePassword
        v-if="type === 'messageRestorePassword'"
        @switchModal="switchModal"
      />
      <AuthMessageSubscribe v-if="type === 'messageSubscribe'" @switchModal="switchModal" />
    </div>
  </UiModal>
</template>

<style scoped></style>

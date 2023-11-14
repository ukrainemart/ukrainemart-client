<script setup lang="ts">
  const companyStatus = ref<LoginCredentials>('noCreate');
  const isCheck = ref<boolean>(false);

  const inputs = reactive({
    name: '',
    phone: '',
    code: '',
    description: '',
    experience: '',
  });

  const checkStatus = () => {
    useApiFetch(`${useUrlApi()}/company/request/check`).then((res: any) => {
      isCheck.value = true;

      if (!res.data.value.status) {
        companyStatus.value = 'noCreate';
        return false;
      }

      if (res.data.value.status === '0') {
        companyStatus.value = 'moderation';
        return false;
      }

      return false;
    });
  };

  const sendRequest = () => {
    useApiFetch(`${useUrlApi()}/company/request`, {
      method: 'POST',
      body: {
        title: inputs.name,
        phone: +inputs.phone,
        legal_code: +inputs.code,
        description: inputs.description,
      },
    }).then((res) => {
      console.log(res);
    });
  };

  watch(inputs, () => {
    console.log(inputs);
  });

  checkStatus();
</script>

<template>
  <LayoutProfilePage v-if="isCheck" :title="$t('create_company.application_submission')">
    <UiAlertSuccess v-if="companyStatus === 'moderation'">
      Ваша заявка знаходиться на модерації
    </UiAlertSuccess>

    <form v-if="companyStatus === 'noCreate'" action="#" @submit.prevent="sendRequest">
      <div>
        <div
          class="grid max-w-[1110px] gap-[15px] md:gap-[20px] xl:grid-cols-2 xl:gap-x-[80px] xl:gap-y-[15px]"
        >
          <UiLabel class="" :label="$t('create_company.name_legal_entity') + ':'">
            <UiInputOutline v-model="inputs.name" required />
          </UiLabel>
          <UiLabel :label="$t('create_company.enter_edrpou_code') + ':'" type="text" class="">
            <UiInputOutline v-model="inputs.code" type="number" required />
          </UiLabel>

          <UiLabel :label="$t('create_company.contact_person_number') + ':'" class="xl:row-span-1">
            <CommonPhoneInputOutline v-model="inputs.phone" required />
          </UiLabel>

          <UiLabel
            :label="$t('create_company.describe_plan_using_platform') + ':'"
            class="xl:row-span-2"
          >
            <UiTextareaOutline
              v-model="inputs.description"
              class="h-[125px] md:h-[159px] xl:h-[147px]"
          /></UiLabel>

          <UiLabel
            :label="$t('create_company.have__experience_export_import')"
            class="xl:row-span-1"
          >
            <div class="flex items-center gap-[25px]">
              <UiRadio v-model="inputs.experience" value="yes" name="name" :label="$t('yes')" />
              <UiRadio v-model="inputs.experience" value="no" name="name" :label="$t('no')" />
            </div>
          </UiLabel>
        </div>

        <UiButtonPrimary type="submit" class="mt-[25px] md:mt-[45px]">{{
          $t('send_request')
        }}</UiButtonPrimary>
      </div>
    </form>
  </LayoutProfilePage>
</template>

<style scoped></style>

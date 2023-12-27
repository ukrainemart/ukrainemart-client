<script setup lang="ts">
  definePageMeta({
    middleware: ['no-company'],
  });
  useTitle('create_company.application_submission');

  const companyStatus = ref<CompanyStatus>('noCreate');
  const isCheck = ref<boolean>(false);
  const error = ref('');
  const loadingRequest = ref(false);

  type Inputs = {
    name: string;
    phone: string;
    code: string;
    description: string;
    experience: string;
    type: CompanyType;
  };

  const inputs = reactive<Inputs>({
    name: '',
    phone: '',
    code: '',
    description: '',
    experience: 'no',
    type: 'exporter',
  });

  watchDeep(inputs, () => {
    console.log(inputs);
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
    loadingRequest.value = true;
    useApiFetch(`${useUrlApi()}/company/request`, {
      method: 'POST',
      body: {
        title: inputs.name,
        phone: +inputs.phone,
        legal_code: +inputs.code,
        description: inputs.description,
        type: inputs.type,
      },
    }).then(() => {
      checkStatus();
      loadingRequest.value = false;
    });
  };

  checkStatus();
</script>

<template>
  <LayoutProfilePage v-if="isCheck" :title="$t('create_company.application_submission')">
    <UiAlertSuccess v-if="companyStatus === 'moderation'">
      {{ $t('create_company.your_application_moderated') }}
    </UiAlertSuccess>

    <VForm
      v-if="companyStatus === 'noCreate'"
      :validation-schema="validationCreateCompany"
      @submit="sendRequest"
    >
      <div>
        <div
          class="grid max-w-[1110px] gap-[15px] md:gap-[20px] xl:grid-cols-2 xl:gap-x-[80px] xl:gap-y-[15px]"
        >
          <div class="col-span-2 flex items-center gap-[15px] xl:gap-[25px]">
            <UiRadio v-model="inputs.type" value="importer" :label="$t('importer')" />
            <UiRadio v-model="inputs.type" value="exporter" :label="$t('exporter')" />
          </div>
          <UiLabel class="" :label="$t('create_company.name_legal_entity') + ':'">
            <UiInputOutline
              v-model="inputs.name"
              :placeholder="$t('placeholders.name_company')"
              :error="(error && !inputs.name) || false"
              required
            />
          </UiLabel>
          <UiLabel :label="$t('create_company.enter_edrpou_code') + ':'" type="text" class="">
            <UiInputOutline
              v-model="inputs.code"
              placeholder="12345678"
              type="number"
              :error="(error && !inputs.code) || false"
              required
            />
          </UiLabel>

          <UiLabel
            :label="$t('create_company.contact_person_number') + ':'"
            class="self-start xl:row-span-1"
          >
            <CommonPhoneInputOutline
              v-model="inputs.phone"
              :error="(error && !inputs.phone) || false"
              :placeholder="$t('placeholders.phone_number')"
            />
          </UiLabel>

          <UiLabel
            :label="$t('create_company.describe_plan_using_platform') + ':'"
            class="xl:row-span-2"
          >
            <UiTextareaOutline
              v-model="inputs.description"
              :placeholder="$t('placeholders.description_company')"
              class="h-[125px] md:h-[159px] xl:h-[147px]"
              :error="error && !inputs.description"
          /></UiLabel>

          <UiLabel
            for=""
            :label="$t('create_company.have__experience_export_import')"
            class="xl:row-span-1"
          >
            <div class="flex items-center gap-[25px]">
              <UiRadio v-model="inputs.experience" value="yes" :label="$t('yes')" />
              <UiRadio v-model="inputs.experience" value="no" :label="$t('no')" />
            </div>
          </UiLabel>
        </div>
        <UiAlertInputError class="mt-[10px] xl:mt-[30px]" :error="error" />

        <PagesCompanySendValidationBtn v-model="error" :loading="loadingRequest" :inputs="inputs" />
      </div>
    </VForm>
  </LayoutProfilePage>
</template>

<style scoped></style>

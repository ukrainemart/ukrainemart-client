<script setup lang="ts">
  const auth = useAuthStore();
  const { t } = useI18n();
  useTitle('profile.personal_data');
  const user = computed(() => auth.user);
  const isCompany = computed(() => auth.isCompany);
  const messageUserData = ref('');
  const loadingRequest = ref(false);

  const inputs = ref({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    companyTitle: '',
    companyCategory: '',
    companyDescription: '',
    whatsApp: '',
    telegram: '',
    skype: '',
  });

  const categories = ref<Category[]>([]);
  const categoriesOptions = computed(() =>
    categories.value.map((el: Category) => {
      return {
        id: el.id,
        title: useMultiLang(el, 'title'),
      };
    })
  );
  const currentCategory = computed(() => {
    const current = categoriesOptions.value.find((el) => el.id === +inputs.value.companyCategory);
    return current?.title;
  });

  const getUserData = () => {
    inputs.value.name = user.value?.name || '';
    inputs.value.phone = user.value?.phone || '';
    inputs.value.lastName = user.value?.last_name || '';
    inputs.value.email = user.value?.email || '';
    inputs.value.companyTitle = user.value?.company?.title || '';
    inputs.value.companyDescription = user.value?.company?.description || '';
    inputs.value.companyCategory = String(user.value?.company?.category_id) || '';

    if (!isCompany.value) return false;

    useApi(`${useUrlApi()}/category/parents`).then((res: any) => {
      categories.value = res;
    });
  };

  const updateUser = () => {
    loadingRequest.value = true;

    const requestBody = {
      name: inputs.value.name,
      last_name: inputs.value.lastName,
      phone: inputs.value.phone,
      email: inputs.value.email,
    };

    if (isCompany.value) {
      Object.assign(requestBody, {
        company_title: inputs.value.companyTitle,
        company_category: inputs.value.companyCategory,
        company_description: inputs.value.companyDescription,
      });
    }

    useApi(`${useUrlApi()}/user/changeInfo`, {
      method: 'POST',
      body: requestBody,
    }).then((res: any) => {
      if (res.status === 1) {
        messageUserData.value = t('profile.the_data_has_been_updated');
        loadingRequest.value = false;
      }
    });
  };

  getUserData();
</script>

<template>
  <LayoutProfilePage :title="$t('profile.personal_data')">
    <div class="max-w-[1190px]">
      <div
        class="grid grid-cols-1 gap-y-[15px] sm:grid-cols-2 sm:gap-x-[50px] md:gap-x-[84px] md:gap-y-[20px] 2xl:gap-x-[150px] 2xl:gap-y-[25px]"
      >
        <UiLabel :label="$t('name') + ':'" class="col-span-2 sm:col-span-1">
          <UiInputOutline v-model="inputs.name" :placeholder="$t('placeholders.name')" />
        </UiLabel>
        <UiLabel
          v-if="isCompany"
          :label="$t('name_company') + ':'"
          class="col-span-2 sm:col-span-1"
        >
          <UiInputOutline
            v-model="inputs.companyTitle"
            :placeholder="$t('placeholders.name_company')"
          />
        </UiLabel>
        <UiLabel :label="$t('last_name') + ':'" class="col-span-2 sm:col-span-1">
          <UiInputOutline v-model="inputs.lastName" :placeholder="$t('placeholders.last_name')" />
        </UiLabel>
        <UiLabel
          v-if="isCompany"
          for=""
          :label="$t('category.singular') + ':'"
          class="col-span-2 sm:col-span-1"
        >
          <UiSelectOutline
            v-model="inputs.companyCategory"
            :placeholder="$t('placeholders.category')"
            :currentValue="currentCategory"
            :options="categoriesOptions"
            value-attribute="id"
            option-attribute="title"
          />
        </UiLabel>
        <UiLabel :label="$t('email') + ':'" class="col-span-2 sm:col-span-1">
          <UiInputOutline v-model="inputs.email" :placeholder="$t('placeholders.email')" />
        </UiLabel>
        <UiLabel
          v-if="isCompany"
          :label="$t('description_of_your_company') + ':'"
          class="col-span-2 row-span-2 sm:col-span-1"
        >
          <UiTextareaOutline
            v-model="inputs.companyDescription"
            :placeholder="$t('placeholders.description_company')"
            class="!h-[90px] md:!h-[119px] xl:!h-[152px]"
          />
        </UiLabel>
        <UiLabel :label="$t('phone_number') + ':'" class="col-span-2 sm:col-span-1">
          <CommonPhoneInputOutline
            v-model="inputs.phone"
            :placeholder="$t('placeholders.phone_number')"
          />
        </UiLabel>
        <UiLabel :label="$t('WhatsApp') + ':'" class="col-span-2 sm:col-span-1">
          <UiInputOutline v-model="inputs.whatsApp" />
        </UiLabel>
        <UiLabel :label="$t('Telegram') + ':'" class="col-span-2 sm:col-span-1">
          <UiInputOutline v-model="inputs.telegram" />
        </UiLabel>
        <UiLabel :label="$t('Skype') + ':'" class="col-span-2 sm:col-span-1">
          <UiInputOutline v-model="inputs.skype" />
        </UiLabel>
        <UiAlertTextSuccess v-if="messageUserData" class="col-span-2">
          {{ messageUserData }}
        </UiAlertTextSuccess>
        <UiButtonPrimaryLoading
          :loading="loadingRequest"
          class="col-span-2 w-fit justify-self-center"
          @click="updateUser"
          >{{ $t('save_changes') }}</UiButtonPrimaryLoading
        >
        <PagesProfileChangePassword />
      </div>
    </div>
  </LayoutProfilePage>
</template>

<style scoped></style>

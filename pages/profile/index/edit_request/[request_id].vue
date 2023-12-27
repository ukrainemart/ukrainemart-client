<script setup lang="ts">
  useTitle('profile.my_requests.edit_request');
  definePageMeta({
    middleware: ['importer'],
  });
  const { t } = useI18n();
  const route = useRoute();
  const error = ref('');
  const requestId = route.params.request_id;
  const loading = ref(true);

  const inputs = ref<InputsCreateRequest>({
    title: '',
    categoryId: null,
    description: '',
    country: '',
    // dateFrom: '',
    // dateBefore: '',
    // dataType: '',
    count: null,
    countType: '',
    activeBefore: '',
  });

  const fetchRequest = () => {
    useApiFetch(`${useUrlApi()}/importRequest/show/${requestId}`).then((res) => {
      const data = res.data.value as RequestImporter;

      inputs.value.title = data?.title;
      inputs.value.categoryId = data?.category?.id;
      inputs.value.description = data?.description;
      inputs.value.country = data?.country?.title_en;
      inputs.value.count = data?.count;
      inputs.value.countType = data?.count_type;
      inputs.value.activeBefore = data?.active_before;

      loading.value = false;
    });
  };

  const onEditRequest = () => {
    useApiFetch(`${useUrlApi()}/importRequest/update/${requestId}`, {
      method: 'POST',
      body: {
        title: inputs.value.title,
        category_id: inputs.value.categoryId,
        description: inputs.value.description,
        country: inputs.value.country,
        // date_from: inputs.value.dateFrom,
        // date_before: inputs.value.dateBefore,
        // date_type: inputs.value.dataType,
        count: inputs.value.count,
        count_type: String(inputs.value.countType),
        active_before: inputs.value.activeBefore,
      },
    })
      .then((res: any) => {
        if (res.data.value.status === 1) {
          navigateTo('/profile/my_requests');
        }
      })
      .catch((err) => {
        error.value = t('validation_inputs.try_again');
        console.log(err);
      });
  };

  fetchRequest();
</script>

<template>
  <div>
    <SkeletonPageInputs v-if="loading" />
    <LayoutCreateRequest
      v-else
      :inputs="inputs"
      :error="error"
      :title="`${$t('profile.my_requests.edit_request')}`"
      @actionSubmit="onEditRequest"
    />
  </div>
</template>

<style scoped></style>

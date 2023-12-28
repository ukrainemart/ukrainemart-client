<script setup lang="ts">
  useTitle('profile.my_requests.add_request');
  const { t } = useI18n();
  const error = ref('');

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

  watchDeep(inputs, () => {
    console.log(inputs.value);
  });

  const onCreateRequest = () => {
    useApiFetch(`${useUrlApi()}/importRequest/create`, {
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
</script>

<template>
  <LayoutCreateRequest
    :inputs="inputs"
    :error="error"
    :title="`${$t('profile.my_requests.add_request')}`"
    @actionSubmit="onCreateRequest"
  />
</template>

<style></style>

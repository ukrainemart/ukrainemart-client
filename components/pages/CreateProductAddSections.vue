<script setup lang="ts">
  const props = defineProps<{
    categoryId: InputsCreateProduct['categoryId'];
    modelValue: any;
    language: Language;
  }>();
  const emits = defineEmits(['update:modelValue']);

  const sections = ref<SectionProduct[]>([]);

  const valueSections = ref<any>({});

  const updateModelValue = (value: any) => {
    emits('update:modelValue', value);
  };

  const fetchSections = () => {
    useApiFetch(`${useUrlApi()}/category/sections/${props.categoryId}`).then((res) => {
      sections.value = res.data.value as SectionProduct[];
    });
  };

  const { value, errorMessage } = useField(
    () => 'section',
    {},
    {
      validateOnValueUpdate: false,
    }
  );

  const checkValidation = () => {
    const values = Object.values(props.modelValue);
    if (values.length !== sections.value.length * 2) {
      value.value = false;
      return false;
    }

    const valid = values.every((val) => typeof val === 'string' && val.trim() !== '');

    if (!valid) {
      value.value = false;
      return false;
    }

    value.value = true;
  };

  const getStartValue = () => {
    valueSections.value = props.modelValue;
  };

  watchDeep(
    () => props.modelValue,
    () => {
      console.log(props.modelValue);

      checkValidation();
      getStartValue();
    }
  );

  watchDeep(valueSections, () => {
    updateModelValue(valueSections.value);
  });

  watchDeep(
    () => props.categoryId,
    () => {
      fetchSections();
    }
  );
  getStartValue();
  fetchSections();
</script>

<template>
  <div>
    <div
      v-if="sections.length > 0"
      class="mt-[24px] grid grid-cols-2 gap-[15px] md:mt-[30px] lg:mt-[43px] xl:gap-[25px]"
    >
      <div v-for="section in sections" :key="section.id">
        <UiLabel v-show="language === 'ua'" :label="useMultiLang(section, 'title') + ':'">
          <UiInputOutline v-model="valueSections[`section_${section.id}_ua`]" class="w-full" />
        </UiLabel>
        <UiLabel v-show="language === 'en'" :label="useMultiLang(section, 'title') + ':'">
          <UiInputOutline v-model="valueSections[`section_${section.id}_en`]" class="w-full" />
        </UiLabel>
      </div>
    </div>
    <UiAlertInputError v-if="errorMessage" class="mt-[10px]" :error="errorMessage" />
  </div>
</template>

<style scoped></style>

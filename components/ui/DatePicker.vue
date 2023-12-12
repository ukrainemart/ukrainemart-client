<script setup lang="ts">
  import '@vuepic/vue-datepicker/dist/main.css';

  import VueDatePicker from '@vuepic/vue-datepicker';

  const props = defineProps<{
    modelValue: any;
    placeholder?: string;
  }>();
  const { locale } = useI18n();
  const formatDate = ref('');
  const valueDate = ref('');

  const langDatePicker = computed(() => {
    if (locale.value === 'ua') {
      return 'uk';
    }
    if (locale.value === 'en') {
      return 'en';
    }
  });
  const emits = defineEmits(['update:modelValue']);

  const updateValue = () => {
    emits('update:modelValue', useFormatDate(valueDate.value));
  };

  const getStartValue = () => {
    valueDate.value = props.modelValue;
  };

  const format = (date: any) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    formatDate.value = `${day}-${month}-${year}`;
    return formatDate.value;
  };

  watchDeep(
    () => props.modelValue,
    () => {
      getStartValue();
    }
  );
  watchDeep(valueDate, () => {
    updateValue();
  });

  getStartValue();
</script>

<template>
  <VueDatePicker
    v-model="valueDate"
    class="date_picker input_outline !h-auto"
    :locale="langDatePicker"
    :enable-time-picker="false"
    auto-apply
    :format="format"
  >
    <template #dp-input="{ value }">
      <UiButtonTextOpacity
        class="input_outline_height input_outline_text flex w-full justify-between"
      >
        <span :class="{ 'text-status_gray': !value }">{{ value || placeholder }}</span>
        <SvgoCalendar v-if="!modelValue" />
      </UiButtonTextOpacity>
    </template>
  </VueDatePicker>
</template>

<style>
  .date_picker {
    font-weight: 500;
  }
  .date_picker .dp--arrow-btn-nav {
    order: 3;
    justify-self: flex-end;
  }

  .date_picker .dp__theme_light .dp__arrow_top {
    display: none;
  }

  .date_picker .dp__month_year_row {
    display: grid;
    grid-template-columns: 100px auto 25px;
  }
  .date_picker .dp__overlay {
    @apply rounded-[25px];
  }

  .date_picker .dp__month_year_wrap {
    @apply rounded-[25px];
    width: auto;
  }

  .date_picker .dp__menu {
    border: none;
    box-shadow: 0px 4px 30px #b8b8b8;
  }

  .date_picker .dp__calendar_row {
    column-gap: 0px;
  }

  .date_picker .dp__theme_light,
  .date_picker .dp__theme_dark {
    --dp-background-color: #ffffff;
    --dp-border-radius: 25px;
    --dp-font-size: 12px;
    --dp-font-family: Montserrat;
    --dp-primary-color: #c8c8c8;
    --dp-primary-text-color: #111111;
    --dp-cell-border-radius: 50%;
  }

  @media screen and (min-width: 400px) {
    .date_picker .dp__calendar_row {
      column-gap: 10px;
    }
  }
</style>

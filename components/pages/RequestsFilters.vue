<script setup lang="ts">
  type Filters = {
    categories: Category[] | any[];
    countries: Country[] | any[];
  };

  const props = defineProps<{
    filtersActive: Filters;
  }>();

  const emits = defineEmits(['update:filtersActive']);

  const updateFilters = (value: Filters) => {
    emits('update:filtersActive', value);
  };

  const filters = ref<Filters | null>(null);

  const categories = ref<any[]>([]);
  const countries = ref<any[]>([]);

  const categoriesOptions = computed(
    () =>
      filters.value?.categories?.map((el: Category) => {
        return {
          id: `${el.id}`,
          title: useMultiLang(el, 'title'),
        } as SelectOption;
      })
  );

  const countriesOptions = computed(
    () =>
      filters.value?.countries?.map((el: Country) => {
        return {
          id: el.title_en,
          title: useMultiLang(el, 'title'),
        } as SelectOption;
      })
  );

  const fetchFilters = () => {
    useFetch(`${useUrlApi()}/importRequest/filters`).then((res) => {
      console.log(res.data.value);

      filters.value = res.data.value as Filters;
    });
  };

  const getStartFilters = () => {
    categories.value = props.filtersActive.categories;
    countries.value = props.filtersActive.countries;
  };

  watchDeep(
    () => props.filtersActive,
    () => {
      getStartFilters();
    }
  );

  watchDeep([categories, countries], () => {
    updateFilters({
      categories: categories.value,
      countries: countries.value,
    });
  });

  getStartFilters();
  fetchFilters();
</script>

<template>
  <div class="flex gap-[30px] md:gap-[50px] xl:gap-[70px]">
    <UiSelectMultipleCheckbox
      v-model="categories"
      :options="categoriesOptions"
      :label="$t('category.singular')"
    />
    <UiSelectMultipleCheckbox
      v-model="countries"
      :options="countriesOptions"
      :label="$t('labels.country')"
    />
  </div>
</template>

<style scoped></style>

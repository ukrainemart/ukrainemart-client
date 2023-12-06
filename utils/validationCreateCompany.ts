import * as Yup from 'yup';

export const validationCreateCompany = Yup.object().shape({
  createCompany: Yup.boolean().required('fill_in_all_fields').oneOf([true], 'fill_in_all_fields'),
});

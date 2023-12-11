import * as Yup from 'yup';

export const validationCreateRequestForm = Yup.object().shape({
  title: Yup.string().required('validation_inputs.required'),
  categoryId: Yup.number().required('validation_inputs.required'),
  description: Yup.string().required('validation_inputs.required'),
  country: Yup.string().required('validation_inputs.required'),
  // dateFrom: Yup.string().required('validation_inputs.required'),
  // dateBefore: Yup.string().required('validation_inputs.required'),
  // dataType: Yup.string().required('validation_inputs.required'),
  count: Yup.string().required('validation_inputs.required'),
  countType: Yup.string().required('validation_inputs.required'),
  activeBefore: Yup.string().required('validation_inputs.required'),
});

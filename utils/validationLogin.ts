import * as Yup from 'yup';

export const validationLogin = Yup.object().shape({
  email: Yup.string().required('validation_inputs.required'),
  password: Yup.string()
    .required('password_required')
    .trim()
    .min(6, 'password_length_min')
    .max(22, 'password_length_max'),
});

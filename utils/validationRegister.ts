import * as Yup from 'yup';

export const validationRegister = Yup.object().shape({
  name: Yup.string().required('validation_inputs.required'),
  email: Yup.string().required('validation_inputs.required'),
  password: Yup.string()
    .required('password_required')
    .trim()
    .min(6, 'password_length_min')
    .max(22, 'password_length_max'),
  c_password: Yup.string()
    .oneOf([Yup.ref('password')], 'password_match')
    .required('password_confirmation'),
});

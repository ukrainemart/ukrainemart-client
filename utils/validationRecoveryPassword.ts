import * as Yup from 'yup';

export const validationRecoveryPassword = Yup.object().shape({
  password: Yup.string()
    .required('password_required')
    .trim()
    .min(6, 'password_length_min')
    .max(22, 'password_length_max'),
  cPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'password_match')
    .required('password_confirmation'),
});

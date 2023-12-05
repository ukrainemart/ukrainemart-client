import * as Yup from 'yup';

export const validationChangePassword = Yup.object().shape({
  old_password: Yup.string()
    .required('password_required')
    .trim()
    .min(6, 'password_length_min')
    .max(22, 'password_length_max'),
  newPassword: Yup.string()
    .required('password_required')
    .trim()
    .min(6, 'password_length_min')
    .max(22, 'password_length_max'),
  newConfPassword: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'password_match')
    .required('password_confirmation'),
});

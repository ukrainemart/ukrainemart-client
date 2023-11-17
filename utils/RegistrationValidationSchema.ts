import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required('password_required')
    .trim()
    .min(8, 'password_length_min')
    .max(22, 'password_length_max'),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
  //   'Password must contain at least one uppercase letter, one lowercase letter, and one number'
  // ),
  c_password: Yup.string()
    .oneOf([Yup.ref('password')], 'password_match')
    .required('password_confirmation'),
});

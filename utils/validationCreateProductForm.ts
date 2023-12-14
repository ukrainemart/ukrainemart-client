import * as Yup from 'yup';

export const validationCreateProductForm = Yup.object().shape({
  titleUa: Yup.string().required('validation_inputs.required'),
  titleEn: Yup.string().required('validation_inputs.required'),
  descriptionUa: Yup.string().required('validation_inputs.required'),
  descriptionEn: Yup.string().required('validation_inputs.required'),
  categoryId: Yup.number().required('validation_inputs.required'),
  priceType: Yup.string().required('validation_create_product.there_must_be_at_least_1_price'),

  section: Yup.boolean()
    .required('check_multilingual_fields')
    .oneOf([true], 'check_multilingual_fields'),

  price: Yup.boolean().required('fill_in_all_fields').oneOf([true], 'fill_in_all_fields'),

  productImages: Yup.boolean()
    .required('validation_create_product.there_must_be_at_least_one_photo')
    .oneOf([true], 'validation_create_product.there_must_be_at_least_one_photo'),
});

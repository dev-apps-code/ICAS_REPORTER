import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .min(5, 'Password is too short - should be 5 characters minimum'),

  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password is too short - should be 8 characters minimum')
    .matches(/[a-z]/, 'Should have atleast one lowercase letter')
    .matches(/[A-Z]/, 'Should have atleast one uppercase letter')
    .matches(/[0-9]/, 'Should have atleast one digit')
    .matches(
      /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/,
      'Should contain a special character',
    ),
});

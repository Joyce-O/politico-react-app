import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .matches(/^[a-z0-9]+$/i, 'symbols are not allowed in first name')
    .min(3,
      'Your First name is too short. Please provide a First name with more than 3 characters')
    .max(50,
      'Your First name is too long. Please provide a First name with less than 50 characters!')
    .required('First name is required'),
  lastname: Yup.string()
    .matches(/^[a-z0-9]+$/i, 'symbols are not allowed in last name')
    .min(3,
      'Your Last name is too short. Please provide a Last name with more than 3 characters')
    .max(50,
      'Your Last name is too long. Please provide a Last name with less than 50 characters!')
    .required('Last name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is Required'),
  password: Yup.string()
    .min(8, 'Password should be more than 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string().when('password', {
    is: val => !!(val && val.length > 0),
    then: Yup.string().oneOf([Yup.ref('password')],
      'Both password field need to be the same')
  })
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is Required'),
  password: Yup.string()
    .min(8, 'Password should be more than 8 characters')
    .required('Password is required'),
});

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is Required'),
});


export const newOfficeSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-z0-9]+$/i, 'symbols are not allowed in name')
    .min(3,
      'Your name is too short. Please provide a name with more than 3 characters')
    .max(50,
      'Your name is too long. Please provide a name with less than 50 characters!')
    .required('name is required'),
  type: Yup.string('office type should be one of federal', 'legislative', 'state', 'local government').required('type of office is required'),
  ageLimit: Yup.string('Candidate age should not be less than 35 and not more than 75').required('age is required'),
  basicQual: Yup.string('Candidate qualification should be one of school certificate level', 'undergraduate level', 'postgraduate level').required('qualification required'),
});

export const newPartySchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-z0-9]+$/i, 'symbols are not allowed in party name')
    .min(3,
      'Party name is too short. Please provide a name with more than 3 characters')
    .max(50,
      'Party name is too long. Please provide a name with less than 50 characters!')
    .required('Party name is required'),
  acronym: Yup.string().max(10, 'Acronym should not be more that 10 characters').required('Acronym is required'),
  hqAddress: Yup.string().required('A valid address is required'),
  // logoUrl: Joi.string().label('A valid logo image is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is Required'),
  phone: Yup.number().integer().required('A valid phone number is required'),
});

export const newCandSchema = Yup.object().shape({
  age: Yup.number().integer().required('Candidate age should not be less than 35 and not more than 75'),
  qualification: Yup.string().required('Candidate qualification should be one of school certificate level', 'undergraduate level', 'postgraduate level'),
  office: Yup.number().integer().required('A valid officeId is required'),
  party: Yup.number().integer().required('A valid partyId is required'),
});

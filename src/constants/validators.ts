import * as yup from 'yup';

const EMAIL = yup.string().email().required();

const PASSWORD = yup.string().min(8).required();

export default {
  EMAIL,
  PASSWORD,
};

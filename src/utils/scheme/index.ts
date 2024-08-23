import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {SchemeResolverProps} from './types';

const resolve = (schema: SchemeResolverProps) => yupResolver(schema);

const build = (schema: yup.ObjectShape) => yup.object().shape(schema);

export default {
  resolve,
  build,
};

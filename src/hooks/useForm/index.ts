import {
  FieldValues,
  UseFormProps,
  UseFormReturn,
  useForm as useRHForm,
} from 'react-hook-form';

import type {Maybe} from '@types';
import {Scheme} from '@utils';

import type {SchemeResolverProps} from '../../utils/scheme/types';

export const useForm = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
>(
  props: UseFormProps<TFieldValues, TContext> & {
    scheme?: Maybe<SchemeResolverProps>;
  },
) => {
  const form = useRHForm({
    ...props,
    ...(props?.scheme && ({resolver: Scheme.resolve(props.scheme)} as any)),
  });

  return form as UseFormReturn<FieldValues, any, undefined> & {
    handleSubmit: <T extends {}>(submit: (data: T) => void) => () => void;
  };
};

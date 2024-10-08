import { useCallback } from 'react';

import { Validators } from '@constants';

import { useForm } from '@hooks';

import { ResultActions } from '@types';

import { useAuthStore } from '../../stores';
import { Login, LoginForm } from '../../types';

export const useLoginForm = ({ onSuccess, onError }: ResultActions) => {
  const { setIsAuth } = useAuthStore();

  const form = useForm<Login>({
    defaultValues: {
      email: '',
      password: '',
    },
    scheme: {
      [LoginForm.EMAIL]: Validators.EMAIL,
      [LoginForm.PASSWORD]: Validators.PASSWORD,
    },
    mode: 'onSubmit',
  });

  const onSubmit = useCallback(
    ({ email, password }: Login) => {
      onSuccess?.();
      setIsAuth(true);
    },
    [onSuccess, setIsAuth],
  );

  const formAction = form.handleSubmit(onSubmit);
  return {
    ...form,
    handleSubmit: formAction,
  };
};

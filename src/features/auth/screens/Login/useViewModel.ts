import {useLoginForm} from '@features/auth/hooks';

const useViewModel = () => {
  const {control, handleSubmit} = useLoginForm({});

  return {
    control,
    handleSubmit,
  };
};

export default useViewModel;

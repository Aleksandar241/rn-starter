import {useTheme} from '@hooks';

const useViewModel = () => {
  const {getColor} = useTheme();

  return {
    backgroundColor: getColor('secondary'),
  };
};

export default useViewModel;

import {useTheme} from '@hooks';

const useViewModel = () => {
  const {getColor} = useTheme();

  return {
    backgroundColor: getColor('background'),
  };
};

export default useViewModel;

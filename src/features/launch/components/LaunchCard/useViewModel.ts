import {useTheme} from '@hooks';

import {ViewModelProps} from './types';

const useViewModel = ({id, onPress}: ViewModelProps) => {
  const {getColor} = useTheme();

  const onPressHandler = () => onPress(id);

  const cardStyle = {
    backgroundColor: getColor('secondary'),
    shadowColor: getColor('primary'),
  };

  return {
    cardStyle,
    onPressHandler,
  };
};

export default useViewModel;

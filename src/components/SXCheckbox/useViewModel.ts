import {useState} from 'react';

import {useTheme} from '@hooks';

import type {ViewModelProps} from './types';

const useViewModel = ({initialValue = false, onPress}: ViewModelProps) => {
  const [isChecked, setIsChecked] = useState(initialValue);

  const {getColor} = useTheme();

  const onPressHandler = () => {
    onPress(!isChecked);
    setIsChecked(prev => !prev);
  };

  return {isChecked, borderColor: getColor('primary'), onPressHandler};
};

export default useViewModel;

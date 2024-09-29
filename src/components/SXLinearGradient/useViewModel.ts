import { useTheme } from '@hooks';

import { ViewModelProps } from './types';

const useViewModel = ({ colors }: ViewModelProps) => {
  const { getColor } = useTheme();
  const mappedColors = colors.map(color => getColor(color));
  return {
    mappedColors,
  };
};

export default useViewModel;

import { Icons } from '@icons';

import { useTheme } from '@hooks';

import type { ViewModelProps } from './types';

const useViewModel = ({ icon, color = 'text' }: ViewModelProps) => {
  const { getColor } = useTheme();
  const Icon = Icons?.[icon];

  const fill = getColor(color);

  return { Icon, fill };
};

export default useViewModel;

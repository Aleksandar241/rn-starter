import {useTheme} from '@hooks';
import {FONTS} from '@theme';
import {useTranslation} from '@translations';

import type {ViewModelProps} from './types';

const useViewModel = ({
  children,
  text,
  color,
  font = 'DEFAULT-PETITE/REGULAR',
}: ViewModelProps) => {
  const {t, exists} = useTranslation();
  const {getColor} = useTheme();

  const textContent =
    text && exists(text?.t) ? t(text.t, text?.params || {}) : children;

  const textColor = getColor(color);
  const fontStyle = FONTS?.[font] ?? FONTS['DEFAULT-PETITE/REGULAR'];

  return {textContent, textColor, fontStyle};
};

export default useViewModel;

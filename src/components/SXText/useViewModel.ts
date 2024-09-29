import {useTheme} from '@hooks';
import {FONTS} from '@theme';
import {TranslationKeys, useTranslation} from '@translations';

import type {ViewModelProps} from './types';

const useViewModel = ({
  children,
  text,
  color,
  font = 'DEFAULT-PETITE/REGULAR',
}: ViewModelProps) => {
  const {translate} = useTranslation();
  const {getColor} = useTheme();

  const textContent = translate({
    fb: children ? children : typeof text === 'string' ? text : '',
    text: text as TranslationKeys,
  });
  const textColor = getColor(color);
  const fontStyle = FONTS?.[font] ?? FONTS['DEFAULT-PETITE/REGULAR'];

  return {textContent, textColor, fontStyle};
};

export default useViewModel;

import {useCallback} from 'react';

import {useThemeStore} from '@stores';
import {Color, Colors, hexColorWithOpacity} from '@theme';
import {Logger} from '@utils';

export const useTheme = () => {
  const {theme: scheme} = useThemeStore();

  const theme = Colors?.[scheme] ?? Colors.light;

  const getColor = useCallback(
    (color?: Color) => {
      if (!color) {
        Logger.warn('No color provided', {location: 'useTheme'});
        return theme.primary;
      }

      const isWithOpacity = typeof color !== 'string';
      const themeColor = theme?.[isWithOpacity ? color.color : color];

      if (!themeColor) {
        Logger.warn('Get default color', {location: 'useTheme'});
        return theme.primary;
      }
      return isWithOpacity
        ? hexColorWithOpacity(themeColor, color.opacity)
        : themeColor;
    },
    [theme],
  );

  return {
    theme,
    getColor,
  };
};

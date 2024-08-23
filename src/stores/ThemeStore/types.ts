import {ColorScheme} from '@theme';

export type ThemeStore = {
  theme: ColorScheme;
  setTheme: (theme: ColorScheme) => void;
};

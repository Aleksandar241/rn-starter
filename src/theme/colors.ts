import { AllValuesToString } from '@types';

type Palette = AllValuesToString<typeof LightPallet>;

export enum HexOpacity {
  _01 = '03',
  _02 = '05',
  _03 = '08',
  _04 = '0A',
  _05 = '0D',
  _06 = '0F',
  _07 = '12',
  _08 = '14',
  _09 = '17',
  _10 = '1A',
  _11 = '1C',
  _12 = '1F',
  _13 = '21',
  _14 = '24',
  _15 = '26',
  _16 = '29',
  _17 = '2B',
  _18 = '2E',
  _19 = '30',
  _20 = '33',
  _21 = '36',
  _22 = '38',
  _23 = '3B',
  _24 = '3D',
  _25 = '40',
  _26 = '42',
  _27 = '45',
  _28 = '47',
  _29 = '4A',
  _30 = '4D',
  _31 = '4F',
  _32 = '52',
  _33 = '54',
  _34 = '57',
  _35 = '59',
  _36 = '5C',
  _37 = '5E',
  _38 = '61',
  _39 = '63',
  _40 = '66',
  _41 = '69',
  _42 = '6B',
  _43 = '6E',
  _44 = '70',
  _45 = '73',
  _46 = '75',
  _47 = '78',
  _48 = '7A',
  _49 = '7D',
  _50 = '80',
  _51 = '82',
  _52 = '85',
  _53 = '87',
  _54 = '8A',
  _55 = '8C',
  _56 = '8F',
  _57 = '91',
  _58 = '94',
  _59 = '96',
  _60 = '99',
  _61 = '9C',
  _62 = '9E',
  _63 = 'A1',
  _64 = 'A3',
  _65 = 'A6',
  _66 = 'A8',
  _67 = 'AB',
  _68 = 'AD',
  _69 = 'B0',
  _70 = 'B3',
  _71 = 'B5',
  _72 = 'B8',
  _73 = 'BA',
  _74 = 'BD',
  _75 = 'BF',
  _76 = 'C2',
  _77 = 'C4',
  _78 = 'C7',
  _79 = 'C9',
  _80 = 'CC',
  _81 = 'CF',
  _82 = 'D1',
  _83 = 'D4',
  _84 = 'D6',
  _85 = 'D9',
  _86 = 'DB',
  _87 = 'DE',
  _88 = 'E0',
  _89 = 'E3',
  _90 = 'E6',
  _91 = 'E8',
  _92 = 'EB',
  _93 = 'ED',
  _94 = 'F0',
  _95 = 'F2',
  _96 = 'F5',
  _97 = 'F7',
  _98 = 'FA',
  _99 = 'FC',
  _100 = 'FF',
}

const LightPallet = {
  white: '#ffffff',
  black: '#000000',
  text: '#000000',
  primary: '#0B3D91',
  secondary: '#1F75FE',
  disabledPrimary: '#7F7F7F',
  disabledSecondary: '#B0C4DE',
  background: '#fff',
  surface: '#2C2C2C',
  error: '#FF6347',
} as const;

const DarkPallet: Palette = {
  white: '#ffffff',
  black: '#000000',
  text: '#FFFFFF',
  primary: '#0A2A59',
  secondary: '#1A5AB5',
  disabledPrimary: '#3C3C3C',
  disabledSecondary: '#8A9BAB',
  background: '#121212',
  surface: '#1C1C1C',
  error: '#D9534F',
};

export type Color =
  | keyof typeof LightPallet
  | { color: keyof typeof LightPallet; opacity: keyof typeof HexOpacity };

export type ColorScheme = 'light' | 'dark';

export const Colors: Record<ColorScheme, Palette> = {
  light: LightPallet,
  dark: DarkPallet,
};

export const hexColorWithOpacity = (
  color: string,
  opacity: keyof typeof HexOpacity,
): string => `${color}${HexOpacity[opacity ?? '_100']}`;

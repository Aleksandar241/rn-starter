import {TextStyle} from 'react-native';

import {EnumHelper} from '@utils';

export const generateFontFamily = (
  fontFamily: FONT_FAMILIES,
  fontWeight: FONT_WEIGHTS,
): string => `${fontFamily}-${fontWeight}`;

export enum FONT_FAMILIES {
  POPPINS = 'Poppins',
}

export enum FontTypes {
  DEFAULT = 'DEFAULT',
}

enum FONT_SIZE {
  PETITE = 12,
  MINIMAL = 14,
  COMPACT = 16,
  COZY = 18,
  SPACIOUS = 20,
  VAST = 22,
}

export enum FONT_WEIGHTS {
  THIN = 'Thin',
  LIGHT = 'Light',
  REGULAR = 'Regular',
  MEDIUM = 'Medium',
  SEMI_BOLD = 'SemiBold',
  BOLD = 'Bold',
  EXTRA_BOLD = 'ExtraBold',
}

type FontWeightKeys = keyof typeof FONT_WEIGHTS;
type FontSizeKeys = keyof typeof FONT_SIZE;
type FontKeys = `${FontTypes}-${FontSizeKeys}/${FontWeightKeys}`;

type FontStyles = {
  [key in FontKeys]: TextStyle;
};

export const generateFonts = <T extends FontTypes>(
  fontFamily: FONT_FAMILIES,
  prefix: T,
): FontStyles => {
  const fontFamilies = {
    [FONT_WEIGHTS.THIN]: generateFontFamily(fontFamily, FONT_WEIGHTS.THIN),
    [FONT_WEIGHTS.LIGHT]: generateFontFamily(fontFamily, FONT_WEIGHTS.LIGHT),
    [FONT_WEIGHTS.REGULAR]: generateFontFamily(
      fontFamily,
      FONT_WEIGHTS.REGULAR,
    ),
    [FONT_WEIGHTS.MEDIUM]: generateFontFamily(fontFamily, FONT_WEIGHTS.MEDIUM),
    [FONT_WEIGHTS.SEMI_BOLD]: generateFontFamily(
      fontFamily,
      FONT_WEIGHTS.SEMI_BOLD,
    ),
    [FONT_WEIGHTS.BOLD]: generateFontFamily(fontFamily, FONT_WEIGHTS.BOLD),
    [FONT_WEIGHTS.EXTRA_BOLD]: generateFontFamily(
      fontFamily,
      FONT_WEIGHTS.EXTRA_BOLD,
    ),
  };

  const generateGroup = (group: string, fontSize: number) =>
    EnumHelper.getValues(FONT_WEIGHTS).reduce((acc, key) => {
      return {
        ...acc,
        [`${group}${key}`]: {
          fontFamily: fontFamilies[FONT_WEIGHTS[key as FontWeightKeys]],
          fontSize,
        } as TextStyle,
      };
    }, {} as FontStyles);

  const fontStyles = EnumHelper.getValues(FONT_SIZE).reduce((acc, key) => {
    const sizeKey = key as FontSizeKeys;
    const group = `${prefix}-${sizeKey}/`;

    return {
      ...acc,
      ...generateGroup(group, FONT_SIZE[sizeKey]),
    };
  }, {} as FontStyles);

  return fontStyles;
};

export const FONTS = {
  ...generateFonts(FONT_FAMILIES.POPPINS, FontTypes.DEFAULT),
};

export type Fonts = keyof typeof FONTS;
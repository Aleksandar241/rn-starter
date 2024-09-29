import { TextProps } from 'react-native';

import { AllValuesToString, RecursiveKeyOf } from '@types';

import { en as primaryLang } from './locales/en';

type PrimaryLang = typeof primaryLang;

export type useTranslationReturn = {
  t: (key: TranslationKeys, options?: any) => void;
  exists: (key: TranslationKeys, options?: any) => boolean;
  translate: (params: TranslateProps) => string;
};
export type Lang = AllValuesToString<PrimaryLang>;
export type TranslationKeys = RecursiveKeyOf<Lang['translation']>;

export type TranslatedTextProps =
  | TranslationKeys
  | {
      t: TranslationKeys;
      params?: Record<string, string | number>;
    }
  | string;

export type TranslateProps = {
  text?:
    | TranslationKeys
    | {
        t: TranslationKeys;
        params?: Record<string, string | number>;
      };
  fb?: TextProps['children'];
};

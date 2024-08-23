import {AllValuesToString, RecursiveKeyOf} from '@types';

import {en as primaryLang} from './locales/en';

type PrimaryLang = typeof primaryLang;

export type useTranslationReturn = {
  t: (key: TranslationKeys, options?: any) => void;
  exists: (key: TranslationKeys, options?: any) => boolean;
};
export type Lang = AllValuesToString<PrimaryLang>;
export type TranslationKeys = RecursiveKeyOf<Lang['translation']>;

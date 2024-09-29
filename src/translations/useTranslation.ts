import { useCallback } from 'react';

import { useTranslation as useTranslationI18 } from 'react-i18next';

import { en as primaryLang } from './locales/en';
import { TranslateProps, TranslationKeys, useTranslationReturn } from './types';

export const useTranslation = () => {
  const { t, i18n } = useTranslationI18();

  const exists = useCallback(
    (key: TranslationKeys, options?: any) => {
      const splitKey = key.split('.');

      if (splitKey.length > 1) {
        return i18n.exists(key, options);
      }

      return (
        typeof primaryLang.translation?.[
          splitKey?.[0] as keyof typeof primaryLang.translation
        ] === 'string' && i18n.exists(key, options)
      );
    },
    [i18n],
  );

  const translate = useCallback(
    ({ fb, text }: TranslateProps): string => {
      if (typeof text === 'string' && exists(text)) {
        return t(text);
      }
      if (typeof text === 'object' && exists(text?.t)) {
        return t(text.t, text?.params || {});
      }

      return typeof fb === 'string' ? fb : '';
    },
    [exists, t],
  );

  return { exists, translate } as useTranslationReturn;
};

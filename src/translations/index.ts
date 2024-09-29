import { NativeModules } from 'react-native';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { Device } from '@constants';

import { en, sr } from './locales';

export * from './useTranslation';
export type { TranslationKeys } from './types';

const RNLanguageDetector = {
  type: 'languageDetector',
  detect: () => {
    const locale = Device.IS_IOS
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
      : NativeModules.I18nManager.localeIdentifier;

    return locale.split('_')[0];
  },
};

const Languages = {
  en,
  ['sr-Latn']: sr,
} as const;

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  lng: RNLanguageDetector.detect(),
  resources: Languages,
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

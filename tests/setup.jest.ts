import * as ReactNative from 'react-native';

require('react-native-reanimated').setUpTests();

jest.doMock('react-native', () => {
  return Object.setPrototypeOf(
    {
      Platform: {
        ...jest.requireActual('react-native').Platform,
      },
      NativeModules: {
        ...jest.requireActual('react-native').NativeModules,
        SettingsManager: {
          settings: {
            AppleLocale: ['en_US'],
            AppleLanguages: ['en'],
          },
        },
        I18nManager: {
          localeIdentifier: 'en_US',
        },
      },
    },
    ReactNative,
  );
});

jest.mock('i18next', () => ({
  ...jest.requireActual('i18next'),
  t: (key: string, params: Record<string, string>) => {
    return `${key} ${JSON.stringify(params)}`;
  },
}));

jest.mock('react-i18next', () => ({
  ...jest.requireActual('react-i18next'),
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        exists: jest.fn(() => true),
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}));

jest.mock('rn-secure-storage', () => {
  return {
    __esModule: true,
    default: {
      setItem: jest.fn(),
      getItem: jest.fn(),
      removeItem: jest.fn(),
    },
    ACCESSIBLE: {
      ALWAYS: 'ALWAYS',
    },
  };
});

jest.mock('@utils', () => {
  const yup = require('yup');
  const { yupResolver } = require('@hookform/resolvers/yup');

  return {
    ...jest.requireActual('@utils'),
    Logger: {
      warn: jest.fn(),
      error: jest.fn(),
      log: jest.fn(),
    },
    Scheme: {
      resolve: jest.fn(schema => yupResolver(schema)),
      build: jest.fn(schema => yup.object().shape(schema)),
    },
  };
});

jest.mock('@constants', () => {
  return {
    ...jest.requireActual('@constants'),
    Device: {
      WIDTH: 375,
      HEIGHT: 812,
    },
  };
});

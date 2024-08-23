/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  preset: 'jest-expo',
  rootDir: '..',
  testMatch: ['<rootDir>/e2e/**/*.test.ts'],
  testTimeout: 120000,
  maxWorkers: 1,
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  reporters: [
    'detox/runners/jest/reporter',
    [
      'jest-allure2-reporter',
      {
        extends: 'detox-allure2-adapter/preset-allure',
        /* see https://github.com/wix-incubator/jest-allure2-reporter/blob/beta/index.d.ts */
      },
    ],
  ],
  testEnvironment: 'detox/runners/jest/testEnvironment',
  testEnvironmentOptions: {
    eventListeners: [
      'jest-metadata/environment-listener',
      'jest-allure2-reporter/environment-listener',
      'detox-allure2-adapter',
    ],
  },
  verbose: true,
};

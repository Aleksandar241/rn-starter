const {execSync} = require('child_process');

/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      $0: 'jest',
      config: 'e2e/jest.config.js',
    },
    jest: {
      setupTimeout: 120000,
    },
  },
  apps: {
    'ios.debug': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/spacex.app',
      build:
        'xcodebuild -workspace ios/spacex.xcworkspace -scheme spacex -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'ios.release': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Release-iphonesimulator/spacex.app',
      build:
        'xcodebuild -workspace ios/spacex.xcworkspace -scheme spacex -configuration Release -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build:
        'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug',
      reversePorts: [8081],
    },
    'android.release': {
      type: 'android.apk',
      build:
        'cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release',
      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 14 Pro',
      },
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_5_API_33',
      },
    },
  },
  configurations: {
    ios: {
      device: 'simulator',
      app: 'ios.release',
    },
    android: {
      device: 'emulator',
      app: 'android.debug',
    },
  },
  artifacts: {
    plugins: {
      allure2: {
        enabled: true,
        keepOnlyFailedTestsArtifacts: false,
        rootDir: 'allure-results',
      },
    },
  },
};

export default ({config}) => ({
  ...config,
  name: 'space-x',
  slug: 'space-x',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  extra: {
    storybookEnabled: process.env.EXPO_PUBLIC_STORYBOOK,
  },
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  ios: {
    supportsTablet: true,
    userInterfaceStyle: 'automatic',
    bundleIdentifier: 'com.anonymous.spacex',
  },
  android: {
    userInterfaceStyle: 'automatic',
    package: 'com.anonymous.spacex',
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    favicon: './assets/favicon.png',
  },
  packagerOpts: {
    config: 'metro.config.js',
  },
  plugins: [
    [
      'expo-font',
      {
        fonts: [
          './assets/fonts/Poppins-Bold.ttf',
          './assets/fonts/Poppins-Light.ttf',
          './assets/fonts/Poppins-Regular.ttf',
          './assets/fonts/Poppins-Medium.ttf',
          './assets/fonts/Poppins-SemiBold.ttf',
          './assets/fonts/Poppins-Thin.ttf',
        ],
      },
    ],
  ],
});

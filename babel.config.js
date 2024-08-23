module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@types': './src/types',
            '@hooks': './src/hooks',
            '@theme': './src/theme',
            '@utils': './src/utils',
            '@icons': './assets/icons',
            '@features/*': './src/features/*',
            '@services': './src/services',
            '@constants': './src/constants',
            '@translations': './src/translations',
            '@stores': './src/stores',
            '@e2e': './e2e',
            '@graphql': './src/graphql',
            '@tests': './tests',
          },
        },
      ],
    ],
  };
};

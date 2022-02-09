module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            components: './src/components',
            assets: './src/assets',
            hooks: './src/hooks',
            navigation: './src/navigation',
            screens: './src/screens',
            styles: './src/styles',
          },
        },
      ],
    ],
  };
};

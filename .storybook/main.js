const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];

    config.resolve.alias = {
      ...config.resolve.alias,
      '@components/*': path.resolve(__dirname, '../src/components/*'),
      '@hooks/*': path.resolve(__dirname, '../src/hooks/*'),
      '@redux/*': path.resolve(__dirname, '../src/redux/*'),
      '@utils/*': path.resolve(__dirname, '../src/utils/*'),
      '@theme/*': path.resolve(__dirname, '../src/theme/*'),
    };

    return config;
  },
};

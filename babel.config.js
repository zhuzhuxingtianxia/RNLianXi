// 路径别名配置
const aliasConfig = {
  paths: [
    {
      rootPathSuffix: './src/assets',
      rootPathPrefix: '@assets'
    },
    {
      rootPathSuffix: './src/common',
      rootPathPrefix: '@common'
    },
    {
      rootPathSuffix: './src/components',
      rootPathPrefix: '@com'
    },
    {
      rootPathSuffix: './src/pages',
      rootPathPrefix: '@pages'
    },
  ]
}

module.exports = {
  plugins: [
    [ "babel-plugin-root-import",aliasConfig ]
  ],
  presets: ['module:metro-react-native-babel-preset']
};

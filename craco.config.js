// 根路径 -> craco.config.js
const path = require('path')
const { whenDev } = require('@craco/craco')
const fastRefreshCracoPlugin = require('craco-fast-refresh')
const CracoLessPlugin = require('craco-less')
const CracoAntDesignPlugin = require('craco-antd')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  babel: {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false, // 对ES6的模块文件不做转化，以便使用tree shaking、sideEffects等
          useBuiltIns: 'entry', // browserslist环境不支持的所有垫片都导入
          // https://babeljs.io/docs/en/babel-preset-env#usebuiltins
          // https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md
          corejs: {
            version: 3, // 使用core-js@3
            proposals: true
          }
        }
      ]
    ]
  },
  webpack: {
    alias: {
      // @映射src路径
      '@': resolve('src')
    },
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = 'dist'
      // 修改 output
      webpackConfig.output = {
        ...webpackConfig.output,
        ...{
          filename: whenDev(() => 'static/js/bundle.js', 'static/js/[name].js'),
          chunkFilename: 'static/js/[name].js'
        },
        path: path.resolve(__dirname, 'dist'), // 修改输出文件目录
        publicPath: '/'
      }

      // 关闭 devtool
      webpackConfig.devtool = false

      // 配置扩展扩展名
      webpackConfig.resolve.extensions = [
        ...webpackConfig.resolve.extensions,
        ...['.less']
      ]

      // 配置 splitChunks
      webpackConfig.optimization.splitChunks = {
        ...webpackConfig.optimization.splitChunks,
        ...{
          chunks: 'all',
          name: true
        }
      }

      return webpackConfig
    }
  },
  plugins: [
    ...whenDev(
      () => [
        {
          plugin: fastRefreshCracoPlugin
        }
      ],
      []
    ),
    {
      plugin: CracoAntDesignPlugin
    },
    {
      plugin: CracoLessPlugin,
      options: {
        cssLoaderOptions: {
          modules: { localIdentName: '[local]_[hash:base64:5]' }
        },
        modifyLessRule: function (lessRule, _context) {
          lessRule.test = /\.(module)?\.(less)$/
          lessRule.exclude = path.join(__dirname, 'node_modules')
          return lessRule
        }
      }
    }
  ],
  devServer: {
    port: 9000,
    proxy: {
      '/api': {
        target: 'http://sayhub.me/api',
        changeOrigin: true,
        secure: false,
        xfwd: false
      }
    }
  }
}

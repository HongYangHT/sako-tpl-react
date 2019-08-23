const config = require('./config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
const assetLoader = require('./utils/asset')
const cssModuleLoader = require('./utils/cssModule')
const es6Loader = require('./utils/es6')
const lessLoader = require('./utils/less')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  devtool: devMode ? 'inline-source-map' : 'source-map',
  entry: {
    app: './src/index.js'
  },
  output: {
    publicPath: config.PUBLIC_PATH,
    path: config.DIST_PATH,
    libraryTarget: 'umd',
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    umdNamedDefine: true
  },
  // 需要解析的文件后缀名
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [...assetLoader, ...cssModuleLoader, ...es6Loader, ...lessLoader]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      favicon: resolve(__dirname, '../src/asset/ico/favicon.ico'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
        html5: true
      },
      hash: false
    })
  ]
}

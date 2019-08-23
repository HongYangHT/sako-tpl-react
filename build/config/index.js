const { resolve } = require('path')

module.exports = {
  PUBLIC_PATH: resolve(__dirname, '/'),
  DIST_PATH: resolve(__dirname, '../../dist'),
  APP_PATH: resolve(__dirname, '../../src'),
  BUILD_PUBLIC_PATH: '/asset/',
  BUILD_DIST_PATH: resolve(__dirname, '../../dist/asset'),
  PORT: '8009',
  proxy: {}
}

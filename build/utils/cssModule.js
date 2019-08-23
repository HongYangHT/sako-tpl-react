/*
 * @Author: sam.hongyang
 * @LastEditors: sam.hongyang
 * @Description:
 * @Date: 2019-07-31 10:56:33
 * @LastEditTime: 2019-08-13 10:08:45
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const postcss = require('postcss')
const packageJson = require('../../package.json')

module.exports = [
  {
    test: /\.(sc|sa|c)ss$/,
    oneOf: [
      {
        resourceQuery: /module/,
        use: [
          {
            loader:
              process.env.NODE_ENV !== 'production'
                ? 'vue-style-loader'
                : MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
              publicPath:
                process.env.NODE_ENV === 'production'
                  ? process.env.microRoot
                    ? process.env.microRoot
                    : '/asset'
                  : '/'
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              // 开启 CSS Modules
              modules: true,
              // 自定义生成的类名
              localIdentName: '[local]_[hash:base64:8]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: () => [
                // 可以配置多个插件
                require('autoprefixer')({
                  overrideBrowserslist: [
                    'last 10 Chrome versions',
                    'last 5 Firefox versions',
                    'Safari >= 6',
                    'ie > 8'
                  ],
                  grid: true
                }),
                // NOTE: 自定义插件
                postcss.plugin('namespace', () => css =>
                  css.walkRules(rule => {
                    if (
                      rule.parent &&
                      rule.parent.type === 'atrule' &&
                      rule.parent.name !== 'media'
                    )
                      return
                    rule.selectors = rule.selectors.map(
                      s =>
                        `${
                          /^.(ivu-dropdown|ivu-select|ivu-picker|ivu-color|ivu-alert|ivu-message|ivu-notice|ivu-poptip|ivu-loading|ivu-modal|vu-drawer|ivu-tooltip)|^(html|body|main|div|dl|dt|dd|ul|ol|li|h1|h2|h3|h4|h5|h6|form|fieldset|legend|input|textarea|p|blockquote|th|td|hr|button|article|aside|details|figcaption|figure|footer|header|hgroup|menu|nav|section)/.test(
                            s
                          )
                            ? ''
                            : '.' + packageJson.name + ' '
                        }${s}`
                    )
                  })
                )
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ] // use的顺序从右往左
      },
      {
        use: [
          {
            loader:
              process.env.NODE_ENV !== 'production'
                ? 'vue-style-loader'
                : MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
              publicPath:
                process.env.NODE_ENV === 'production'
                  ? process.env.microRoot
                    ? process.env.microRoot
                    : '/asset'
                  : '/'
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: () => [
                // 可以配置多个插件
                // NOTE: new feature should change browsers to overrideBrowserslist
                require('autoprefixer')({
                  overrideBrowserslist: [
                    'last 10 Chrome versions',
                    'last 5 Firefox versions',
                    'Safari >= 6',
                    'ie > 8'
                  ],
                  grid: true
                }),
                // NOTE: 自定义插件
                postcss.plugin('namespace', () => css =>
                  css.walkRules(rule => {
                    if (
                      rule.parent &&
                      rule.parent.type === 'atrule' &&
                      rule.parent.name !== 'media'
                    )
                      return
                    rule.selectors = rule.selectors.map(
                      s =>
                        `${
                          /^.(ivu-dropdown|ivu-select|ivu-picker|ivu-color|ivu-alert|ivu-message|ivu-notice|ivu-poptip|ivu-loading|ivu-modal|vu-drawer|ivu-tooltip)|^(html|body|main|div|dl|dt|dd|ul|ol|li|h1|h2|h3|h4|h5|h6|form|fieldset|legend|input|textarea|p|blockquote|th|td|hr|button|article|aside|details|figcaption|figure|footer|header|hgroup|menu|nav|section)/.test(
                            s
                          )
                            ? ''
                            : '.' + packageJson.name + ' '
                        }${s}`
                    )
                  })
                )
              ]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ] // use的顺序从右往左
      }
    ]
  }
]

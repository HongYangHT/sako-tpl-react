module.exports = [
  {
    test: /\.(png|jpe?g|gif)(\?.*)?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          // 具体配置见插件官网
          limit: 8192,
          // 具体配置见插件官网
          name: '[name]-[contenthash].[ext]',
          outputPath: 'img/',
          publicPath:
            process.env.NODE_ENV === 'production'
              ? process.env.microRoot
                ? process.env.microRoot + '/img'
                : '/asset/img'
              : '/img'
        }
      },
      {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
            quality: 65
          },
          // optipng.enabled: false will disable optipng
          optipng: {
            enabled: false
          },
          pngquant: {
            quality: '65-90',
            speed: 4
          },
          gifsicle: {
            interlaced: false
          },
          // the webp option will enable WEBP
          webp: {
            quality: 75
          }
        }
      }
    ]
  },
  {
    test: /\.(svg|woff|woff2|ttf|oft|eot)(\?.*)?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          // 具体配置见插件官网
          limit: 8192,
          // 具体配置见插件官网
          name: '[name]-[contenthash].[ext]',
          outputPath: 'fonts/',
          publicPath:
            process.env.NODE_ENV === 'production'
              ? process.env.microRoot
                ? process.env.microRoot + '/fonts'
                : '/asset/fonts'
              : '/fonts'
        }
      }
    ]
  },
  {
    test: /\.html$/,
    use: [
      {
        loader: 'html-loader'
      }
    ]
  }
]

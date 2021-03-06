let merge = require('webpack-merge'),
  { rootPath } = require('./helper'),
  commonConfig = require('./webpack.common.config')

const devConfig = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    rootPath('src/index.js')
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './src',
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    watchOptions: {
      aggregateTimeout: 100,
      poll: 300,
      ignored: /node_modules/
    }
  },
  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [
          /elm-stuff/,
          /node_modules/
        ],
        use: [
          {
            loader: 'elm-webpack-loader',
            options: {
              verbose: true,
              warn: true,
              debug: true
            }
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
}

module.exports = merge(commonConfig, devConfig)

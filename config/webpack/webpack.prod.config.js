let webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  merge = require('webpack-merge'),
  commonConfig = require('./webpack.common.config')
  { rootPath } = require('./helper')

const entryPath = rootPath('src/assets/index.js')

const prodConfig = {
  entry: entryPath,
  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [
          /elm-stuff/,
          /node_modules/
        ],
        use: 'elm-webpack-loader'
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'assets/css/[name]-[hash].css',
      allChunks: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compressor: {
          warnings: false
      }
    })
  ]
}

module.exports = merge(commonConfig, prodConfig)

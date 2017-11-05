let webpack = require('webpack'),
  path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin')

const entryPath = path.join(__dirname, 'src/assets/index.js')

module.exports = {
  entry: entryPath,
  module: {
      rules: [{
          test: /\.elm$/,
          exclude: [/elm-stuff/, /node_modules/],
          use: 'elm-webpack-loader'
      }, {
          test: /\.sc?ss$/,
          use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'postcss-loader', 'sass-loader']
          })
      }]
  },
  plugins: [
      new ExtractTextPlugin({
          filename: 'assets/css/[name]-[hash].css',
          allChunks: true,
      }),
      new CopyWebpackPlugin([
        {
          from: 'src/assets/img/',
          to: 'assets/img/'
        }
      ]),
      new webpack.optimize.UglifyJsPlugin({
          minimize: true,
          compressor: {
              warnings: false
          }
      })
  ]
}
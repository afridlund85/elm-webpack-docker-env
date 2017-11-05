let webpack = require('webpack'),
  merge = require('webpack-merge'),
  path = require('path'),
  autoprefixer = require('autoprefixer'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  devConfig = require('./webpack.dev.config'),
  prodConfig = require('./webpack.prod.config')

const prod = 'production'
const dev = 'development'
const TARGET_ENV = process.env.npm_lifecycle_event === 'build' ? prod : dev
const isProduction = TARGET_ENV === prod

const outputPath = path.join(__dirname, 'dist');
const outputFilename = isProduction ? '[name]-[hash].js' : '[name].js'

let commonConfig = {
  output: {
      path: outputPath,
      filename: `assets/js/${outputFilename}`,
  },
  resolve: {
      extensions: ['.js', '.elm'],
      modules: ['node_modules']
  },
  module: {
      noParse: /\.elm$/,
      rules: [{
          test: /\.(eot|ttf|woff|woff2|svg)$/,
          use: 'file-loader?publicPath=../../&name=assets/css/[hash].[ext]'
      }]
  },
  plugins: [
      new webpack.LoaderOptionsPlugin({
          options: {
              postcss: [autoprefixer()]
          }
      }),
      new HtmlWebpackPlugin({
          template: 'src/assets/index.html',
          inject: 'body',
          filename: 'index.html'
      })
  ]
}

module.exports = !isProduction
  ? merge(commonConfig, devConfig)
  : merge(commonConfig, prodConfig)

let webpack = require('webpack'),
  autoprefixer = require('autoprefixer'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  { rootPath, DIST, SRC } = require('./helper')

const isProduction = process.env.ENV === 'production'
const outputFilename = isProduction
  ? '[name]-[hash].js'
  : '[name].js'

module.exports = {
  output: {
    path: DIST,
    filename: `assets/js/${outputFilename}`,
  },
  resolve: {
    extensions: ['.js', '.elm'],
    modules: ['node_modules']
  },
  module: {
    noParse: /\.elm$/,
    rules: [
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        use: 'file-loader?publicPath=../../&name=assets/css/[hash].[ext]'
      }
    ]
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

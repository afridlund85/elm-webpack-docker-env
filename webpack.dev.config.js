let path = require('path')

const entryPath = path.join(__dirname, 'src/assets/index.js')

module.exports = {
  entry: [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      entryPath
  ],
  devServer: {
      historyApiFallback: true,
      contentBase: './src',
      host: '0.0.0.0',
      port: 8080,
      hot: true
  },
  module: {
      rules: [{
          test: /\.elm$/,
          exclude: [/elm-stuff/, /node_modules/],
          use: [{
              loader: 'elm-webpack-loader',
              options: {
                  verbose: true,
                  warn: true,
                  debug: true
              }
          }]
      },{
          test: /\.sc?ss$/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }]
  }
}
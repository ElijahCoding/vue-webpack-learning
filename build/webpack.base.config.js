const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/app.js'
  },

  module: {
    rules: [

      {
          test: /\.scss$/,
          use: [
            'css-loader','sass-loader'
          ]
      },

      {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            extractCSS: false
          }
      },

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: 'index.html'
    })
  ],

  devServer: {
    compress: true,
    overlay: true
  }
}

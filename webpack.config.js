const path = require('path')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/app.js'
  },

  module: {
    rules: [
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

  devServer: {
    compress: true,
    overlay: true
  }
}

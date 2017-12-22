const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

// console.log(process.env.NODE_ENV)

module.exports = merge(base, {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          use: ['css-loader','sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/app.css'
    }),
    new UglifyJsPlugin(),
    new OptimizeCssAssetsPlugin()
  ]
})

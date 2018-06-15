const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/js/index.js'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.css$/, loader: ['style-loader', 'css-loader', 'sass-loader']},
      {test: /\.js$/, exclude: /node_modules/, use: {loader: 'babel-loader'}}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
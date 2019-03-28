const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = resolve(__dirname, '../..');

const config = {
  entry: resolve(root, 'index.js'),
  module: {
    rules: [{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(root, 'index.html'),
    }),
  ],
};

module.exports = config;

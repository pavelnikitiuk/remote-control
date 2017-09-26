const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

const { paths } = require('./../consts');

module.exports = {
  entry: ['react-hot-loader/patch'],
  devtool: 'source-map',
  plugins: [
    new WebpackNotifierPlugin({ title: 'Webpack' }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /.jsx?/,
        exclude: /node_modules/,
        loader: 'react-hot-loader/webpack',
      },
    ],
  },
  devServer: {
    open: true,
    contentBase: paths.public,
    port: 3000,
    hot: true,
    inline: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};

const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

const { paths } = require('./../consts');

module.exports = {
  entry: ['react-hot-loader/patch'],
  devtool: 'source-map',
  mode: 'development',
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
  watchOptions: {
    aggregateTimeout: 50,
    poll: true,
  },
  devServer: {
    open: true,
    contentBase: paths.public,
    publicPath: '/',
    port: 4000,
    hot: true,
    inline: true,
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};

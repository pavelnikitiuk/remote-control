const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { paths } = require('./consts');

const { entry, output, template } = paths;

const environment = process.env.NODE_ENV || 'development';
const isDevelopment = environment === 'development';

let envConfig;

/* eslint-disable global-require */
if (isDevelopment) {
  envConfig = require('./webpack.config.dev');
} else {
  envConfig = require('./webpack.config.prod');
}

const config = {
  entry: [
    entry,
  ],
  output: {
    path: output,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      isDevelopment,
      'process.env': {
        NODE_ENV: JSON.stringify(environment),
      },
    }),
    new HtmlWebpackPlugin({
      template,
    }),
  ],
};

module.exports = merge(envConfig, config);

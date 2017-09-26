const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { paths, environment, isDevelopment } = require('./../consts');

const { entry, output, template, source } = paths;

let envConfig;

/* eslint-disable global-require */
if (isDevelopment) {
  envConfig = require('./webpack.config.dev');
} else {
  envConfig = require('./webpack.config.prod');
}

const config = {
  entry: [entry],
  output: {
    path: output,
    filename: 'bundle-[hash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', source],
  },
  module: {
    rules: [
      {
        test: /.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
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

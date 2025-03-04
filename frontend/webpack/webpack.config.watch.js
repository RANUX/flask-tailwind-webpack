const Path = require('path');
const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const StylelintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  target: 'web',
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    chunkFilename: 'js/[name].chunk.js',
  },
  plugins: [
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new StylelintPlugin({
      files: Path.resolve(__dirname, '../src/**/*.s?(a|c)ss'),
    }),
    new ESLintPlugin({
      context: Path.resolve(__dirname, '../../'), //VERY IMPORTANT, project base
      overrideConfigFile: Path.resolve(__dirname, '../../eslint.config.js'), // Use the new config file
      extensions: ['js'],
      files: 'frontend/src', // Where are the JS files
      emitWarning: true,
    }),
    // new MiniCssExtractPlugin({
    //   filename: 'css/[name].css',
    //   chunkFilename: 'css/[id].css',
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.js$/,
        include: Path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          // MiniCssExtractPlugin.loader,
          // {
          //   loader: 'css-loader',
          //   options: {
          //     sourceMap: true,
          //   },
          // },
          'postcss-loader',
        ],
      },
    ],
  },
});

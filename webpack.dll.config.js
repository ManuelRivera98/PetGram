/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    module: [
      'react',
      'react-dom',
      'styled-components',
      'prop-types',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].dll.js',
    library: '[name]',
  },
  optimization: {
    minimizer: [new TerserJSPlugin()],
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json'),
      entryOnly: true,
    }),
  ],
};

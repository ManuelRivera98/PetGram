/* eslint-disable global-require */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const AddAssetsHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve('src/index.jsx'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  optimization: {
    minimizer: [new TerserJSPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   manifest: require('./modules-manifest.json'),
    // }),
    new AddAssetsHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, 'dist/js/*.dll.js'),
      outputPath: 'js',
      publicPath: 'js',
    }),
    new WebpackPwaManifest({
      name: 'InstaPlatzi',
      description: 'Tu app preferida para encontrar las mascotas que te encantan',
      background_color: '#ffffff',
      orientation: 'portrait',
      display: 'standalone',
      theme_color: '#ffffff',
      icons: [
        {
          src: path.resolve(__dirname, 'src/assets/icon.png'),
          sizes: [96, 192],
          destination: path.join('Icons'),
          ios: true,
        },
      ],
    }),
  ],
};

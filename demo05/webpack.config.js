  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CleanWebpackPlugin = require('clean-webpack-plugin');
  const webpack = require('webpack');

  module.exports = {
    entry: {
      app: './src/index.js',
      print: './src/print.js'
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new webpack.ModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: 'webpack-dev-server',
        filename: 'index.html',
        template: 'src/index.html'
      })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    devServer: {
      hot: true, // 告诉 dev-server 我们在使用 HMR
      contentBase: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    }
  };
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  optimization: {
    minimizer: [],
   },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: __dirname,
    },
    compress: true,
    port: 8080,
  },
};
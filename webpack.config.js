const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  optimization: {
    minimizer: [],
    splitChunks: {
      cacheGroups: {
        presto: {
          test(module) {
            // `module.resource` contains the absolute path of the file on disk.
            // Note the usage of `path.sep` instead of / or \, for cross-platform compatibility.
            // console.log(module)
            console.log(module.resource, module.resource.includes('PrestoDOM'))
            return module.resource.includes('PrestoDOM');
          },

          chunks: 'initial',
          name: 'prestodom',
          chunks: 'all',
        },
        qr_generator: {
          test(module) {
            // `module.resource` contains the absolute path of the file on disk.
            // Note the usage of `path.sep` instead of / or \, for cross-platform compatibility.
            // console.log(module)
            console.log(module.resource, module.resource.includes('QR-Generator'))
            return module.resource.includes('QR-Generator');
          },

          chunks: 'initial',
          name: 'qr_generator',
          chunks: 'all',
        }
      }
    }
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
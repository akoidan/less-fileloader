const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')
module.exports = {
  entry: ['./src/main.js'],
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  devtool: '#source-map',
  resolve: {
    extensions: ['.less', '.js'], // not require
    alias: {'@': path.resolve(__dirname, 'src')}
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: 'file-loader',
        options: {
          publicPath: '', // you can override this to put less output in different folder
          name: '[name].[ext]?[sha512:hash:base64:6]' // I guess you want the filename to stay the same after it's modified
        }
      },
    ],
  },
};

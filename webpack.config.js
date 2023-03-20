const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',  
  entry: {
    bst: './src/binary-search-trees.js',
    mergeSort: '../recursion-and-sort-algos/merge-sort.js',
    },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'BSTs'
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
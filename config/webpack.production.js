const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:5].bundles.js',
    publicPath: '/'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[hash:5].css',
      chunkFilename: 'styles/[id].[hash:5].css'
    })
  ],
  devtool: 'source-map',
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})]
  }
};

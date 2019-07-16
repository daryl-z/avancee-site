const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash:5].bundles.js',
    publicPath: '/'
  },
  plugins: [
    new CompressionPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[hash:5].css',
      chunkFilename: 'styles/[id].[hash:5].css'
    })
  ],
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      cacheGroups: {
        officeUiFabricReactBase: {
          name: 'officeUiFabricReact',
          test: /[\\/]node_modules[\\/](office-ui-fabric-react)[\\/]/,
          chunks: 'all',
          priority: 2
        },
        reactBase: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react',
          chunks: 'all',
          priority: 1
        }
      }
    }
  }
};

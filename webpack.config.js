const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _modeflag = _mode == 'production' ? true : false;
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const path = require('path');
const paths = require('./config/paths');
const alias = require('./config/alias').alias; // doesn't work for ts

webpackConfig = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre'
      },
      {
        test: /\.m.(sa|sc|c)ss$/,
        use: [
          !_modeflag ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader?modules&importLoaders=true&localIdentName=[name]__[local]___[hash:base64:5]',

          'postcss-loader',
          'sass-loader'
        ],
        exclude: [path.resolve(__dirname, './node_modules')]
      },
      {
        test: /^((?!\.m).)*(sa|sc|c)ss$/,
        use: [!_modeflag ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias,
    extensions: ['*', '.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: _modeflag ? 'styles/[name].[hash:5].css' : 'styles/[name].css',
      chunkFilename: _modeflag ? 'styles/[id].[hash:5].css' : 'styles/[name].css'
    }),
    new CleanWebpackPlugin([path.join(__dirname, 'dist')]),
    new ForkTsCheckerWebpackPlugin()
  ]
};

module.exports = merge(_mergeConfig, webpackConfig);

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const merge = require("webpack-merge");
const argv = require("yargs-parser")(process.argv.slice(2));
const _mode = argv.mode || "development";
const _modeflag = _mode == "production" ? true : false;
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const path = require("path");

webpackConfig = {
  entry: path.join(__dirname, "src", "index.tsx"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "static/media/[name].[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      Utils: path.resolve(__dirname, "src/utils/"),
      Compo: path.resolve(__dirname, "src/components/")
    },
    extensions: ["*", ".ts", ".tsx", ".js", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html")
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin([path.join(__dirname, "dist")]),
    new ForkTsCheckerWebpackPlugin()
  ]
};

module.exports = merge(_mergeConfig, webpackConfig);

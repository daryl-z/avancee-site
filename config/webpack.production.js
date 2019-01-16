const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = {
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[hash:5].bundles.js",
    publicPath: "/"
  },
  plugins: [],
  devtool: "source-map",
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})]
  }
};

const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[hash:5].bundles.js",
    publicPath: "/"
  },
  devtool: "source-map",
  optimization: {
    minimizer: [new TerserPlugin()]
  }
};

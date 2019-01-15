const path = require("path");

module.exports = {
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    filename: "[name].bundle.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    hot: true
  }
};

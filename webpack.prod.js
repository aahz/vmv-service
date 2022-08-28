const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./webpack.common.js");
const path = require('path');

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[contenthash].js",
    charset: true,
  },
  devtool: "source-map",
  plugins: [new MiniCssExtractPlugin({
    filename: '[contenthash].css'
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", 'less-loader'],
      },
    ],
  },
});

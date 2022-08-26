const path = require("path");

const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "vmv.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new FaviconsWebpackPlugin({
      logo: './src/assets/logo.png',
      inject: true,
      favicons: {
        appName: 'vmv-service',
        addDescription: 'VMV Service',
        developerName: 'Andrei Ozdon',
        developerURL: 'https://github.com/aahz',
        background: '#1e1e1e',
        theme_color: '#378EF0',
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: [
            "style-loader",
            "css-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: "asset",
      },
    ],
  },
};

const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    page3: "./src/index3.js",
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[id].chunk.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./template/index.html",
    }),
  ],
  mode: "production",
};

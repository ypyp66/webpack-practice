const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    page1: "./src/index1.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      //minSize: 10, //bytes
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 1,
          name: "vendors",
        },
        // defaultVendors: {
        //   minChunks: 1,
        //   priority: 1,
        //   name: "default",
        // },
        reactBundle: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: "react.bundle",
          priority: 2,
          minSize: 100,
        },
      },
    },
  },
  plugins: [new CleanWebpackPlugin()],
  mode: "production",
};

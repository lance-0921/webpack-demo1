const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")


module.exports = {
    entry: "./src/index.js",
    performance: {
      "maxEntrypointSize":10000000,
      "maxAssetSize":30000000,
    },
    output: {
      filename: "[name].[contenthash].js", 
      },
    plugins: [
      new HtmlWebpackPlugin({
      filename: "index.html",
      template:"./src/test.html"
      }),
    ],
    
  };

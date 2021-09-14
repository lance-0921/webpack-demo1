const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const path = require('path')

module.exports = {
    mode: 'production',
    entry: "./src/index.js",
    devtool: 'inline-source-map',
    performance: {
      "maxEntrypointSize":10000000,
      "maxAssetSize":30000000,
    },
    devServer: {
      static: './dist',
    },
    output: {
      filename: "[name].[contenthash].js", 
      },
      plugins: [
        new HtmlWebpackPlugin({
      filename: "index.[contenthash].html",
      template:"./src/test.html"
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
        chunkFilename: "[id].[contenthash].css",
        ignoreOrder:false,
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          //方法一：使用插件提出css文件
          use: [MiniCssExtractPlugin.loader, "css-loader"],
          
        },
      ],
    },
    optimization:
     {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
        // minimize: true,
        // true是在development模式是設置
      },
  };


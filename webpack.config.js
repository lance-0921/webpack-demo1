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
      plugins: [new HtmlWebpackPlugin({
        filename: "index.html",
      template:"./src/test.html"}
      )],

    plugins: [new MiniCssExtractPlugin()],
    module: {
      rules: [
        {
          test: /\.css$/i,
          //方法一：使用插件提出css文件
          use: [MiniCssExtractPlugin.loader, "css-loader"],
          //方法二：使用loader引入css
          //use: ["style-loader","css-loader"],
          //style-loader 将style标签加入head;css-loader只是将style引入js
        },
      ],
    },
    optimization:
     {
        minimizer: [
          new CssMinimizerPlugin(),
        ],
         minimize: true,
      },
  };


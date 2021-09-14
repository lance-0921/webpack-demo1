const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const path = require('path')

module.exports = {
    mode: 'development',
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
        filename: "index.[contenthash].html",
      template:"./src/test.html"}
      )],


    module: {
      rules: [
        {
          test: /\.css$/i,
         
          //方法二：使用loader引入css
          use: ["style-loader","css-loader"],
          //style-loader 将style标签加入head;css-loader只是将style引入js
        },
      ],
    },
    
  };


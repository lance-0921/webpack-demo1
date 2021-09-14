const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
    mode: 'production',
    
    plugins: [
      ...base.plugins,
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
        chunkFilename: "[id].[contenthash].css",
        ignoreOrder:false,
      }),
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


const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const base = require('./webpack.config.base.js')

module.exports = {
  ...base,
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
    },
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


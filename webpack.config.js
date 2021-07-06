const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const styleLoader = devMode ? 'style-loader' : MiniCssExtractPlugin.loader;


const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
  modules: true,
  importLoaders: 2,
  sourceMap: false,
 }
}
const CSSLoader = {
  loader: 'css-loader',
  options: {
  modules: "global",
  importLoaders: 2,
  sourceMap: false,
 }
}


module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/, /\.module\.css$/],
        use: [
          styleLoader,
          CSSLoader
        ]
      },
      {
        test: /\.module\.css$/,
        exclude: /node_modules/,
        use: [
          styleLoader,
          CSSModuleLoader
        ]
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          "url-loader"
        ]
      },
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    hot: true
  }
};
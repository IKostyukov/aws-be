const path = require("path");
const slsw = require("serverless-webpack");
const webpack = require("webpack");
// const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  entry: slsw.lib.entries,
  stats: "summary",
  resolve: {
    extensions: ['.mjs', '.json', '.ts', '.js'],
  },
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js",
  },
  plugins: [
    new webpack.IgnorePlugin({ resourceRegExp:/^pg-native$/ })
  ],
  target: "node",
  module: {
    rules: [
      {
        test: /\.(ts?)$/,
        loader: "ts-loader",
        options: {
          configFile: path.resolve("./tsconfig.json"),
        },
        exclude: [
          [
            path.resolve(__dirname, "node_modules"),
            path.resolve(__dirname, ".serverless"),
            path.resolve(__dirname, ".webpack"),
          ],
        ],
      },
    ],
  },
};

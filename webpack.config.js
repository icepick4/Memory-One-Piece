const PATH = require("path");

module.exports = {
  entry: './src/main.ts',
  output: {
    publicPath: "./public",
    filename: "main.js",
    path: PATH.resolve(__dirname, "./public/scripts"),
  },
  resolve: {
    extensions: ['.ts','.js']
  },
  module: {
    rules: [
      { test: /.ts?$/, loader: 'ts-loader' }
    ]
  },
  mode: 'development'
}
const path = require('path')

module.exports = {
  entry: ['core-js/es/array/from', path.resolve(__dirname, 'package/index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'seed',
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}

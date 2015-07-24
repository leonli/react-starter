"use strict";

var webpack = require('webpack');
var path = require('path');

var port = process.env.HOT_LOAD_PORT || 3001;

var config = {
  cache: true,
  resolve: {
    extensions: ['', '.js']
  },
  entry: [
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/dev-server',
    './src/app/app.js'
  ],
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'app.js',
    publicPath: 'http://localhost:' + port + '/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.(jpe?g|png|gif|svg)$/, loader: 'file' },
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel?stage=0&optional=runtime&plugins=typecheck']},
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
    ]
  }
};

if (process.env.NODE_ENV === "development") {
  config.devtool = 'eval'; // This is not as dirty as it looks. It just generates source maps without being crazy slow.
}

module.exports = config;

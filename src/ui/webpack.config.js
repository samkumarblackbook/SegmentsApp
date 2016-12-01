var path = require('path');
var webpack = require('webpack');

var config = {
  cache: true,
  devtool: 'source-map',
  entry: {
    polyfills: './js/polyfills',
    vendor:    './js/vendor',
    main:      './js/main'
  },

  output: {
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map'
  },
  module: {
    loaders: [
      {
        test: /\.(pug|jade)$/,
        loader: 'pug-html-loader'
      },
      { test: /\.ts$/,   loader: 'awesome-typescript-loader' }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: ['polyfills', 'vendor', 'main'].reverse(), minChunks: Infinity }),
  ],

  resolve: {
    alias:{
      views: path.resolve( __dirname, 'views'),
      services:path.resolve( __dirname,'js','app','services')
    },
    extensions: ['', '.ts', '.js', '.json']
  },

  node: {
    global: true,
    process: true,
    Buffer: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false,
    clearTimeout: true,
    setTimeout: true
  }
};
module.exports = config;

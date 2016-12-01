var webpack = require('webpack');
var path = require('path');

var config = {
  cache: true,
  devtool: 'inline-source-map',
  entry: './testing/spec.entry.ts',

  output: {
    path: __dirname,
    filename: 'specs.js',
    sourceMapFilename: 'specs.map'
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

  resolve: {
    alias:{
      views: path.resolve( __dirname, 'views'),
      services:path.resolve( __dirname,'js','app','services')
    },
    extensions: ['', '.ts', '.js', '.json'],
  },
  plugins: []
};
module.exports = config;

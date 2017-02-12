var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: [
    'babel-polyfill',
    './index.js'
  ],

  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.jpg$/, loader: 'url-loader'}
    ]
  }
};

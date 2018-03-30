const Path = require('path');
const CLIENT_ROOT = Path.resolve(__dirname, 'client/');  // needed?
const CONFIG_ROOT = Path.resolve(__dirname, 'config/');  // needed?

module.exports = {
  target: 'web',
  entry : ['babel-polyfill', 'whatwg-fetch', './client.js'],
  output: {
    path      : Path.join(__dirname, 'static/bundle/'),
    publicPath: 'static/bundle/',
    filename  : 'bundle.js',
  },
  module: {
    loaders: [
      {
        test   : /.jsx?$/,
        loader : 'babel-loader',
        exclude: /node_modules/,
        query  : {
          presets: ['es2015', 'react', 'stage-2'],
        },
      },
    ],
  },
  resolve: {
    modules: [
      CLIENT_ROOT,
      CONFIG_ROOT,
      'node_modules',
      __dirname,
    ],
    extensions: ['.js', '.jsx', '.scss'],
  },
};

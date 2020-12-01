const path = require('path');
const base = require('../base.loader.webpack.config.js');

module.exports = {
  ...base,
  entry: path.resolve(__dirname, 'loader.js'),
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'demo-namespaced.loader.js'
  }
};

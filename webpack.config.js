const path = require('path');
const base = require('./src/base.loader.webpack.config.js');

module.exports = {
  ...base,
  entry: path.resolve(__dirname, 'src/sdk.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'gizmo.js'
  }
};

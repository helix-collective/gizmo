const path = require('path');
const base = require('../base.widget.webpack.config.js');

module.exports = {
  ...base,
  entry: path.resolve(__dirname, 'widget.js'),
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'combined.widget.js'
  },
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat'
    }
  }
};

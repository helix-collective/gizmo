const webpack = require('webpack');

const banner = `Gizmo by Helix Collective`;

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {sideEffects: true},
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new webpack.BannerPlugin({banner})]
};

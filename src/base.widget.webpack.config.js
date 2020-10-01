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
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [new webpack.BannerPlugin({banner})]
};

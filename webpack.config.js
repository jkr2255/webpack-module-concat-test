const webpack = require('webpack');

module.exports = {
  output: {
    filename: 'index.js'
  },
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  stats: {
    optimizationBailout: true
  }
};

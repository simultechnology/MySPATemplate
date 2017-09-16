const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [ './src/main.js', './src/main.css' ],
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {sourceMap: true},
            },
            {
              loader: 'postcss-loader',
              options: {sourceMap: true},
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    port: 38080,
    inline: true,
    historyApiFallback: true,
  },
  devtool: 'source-map',
};

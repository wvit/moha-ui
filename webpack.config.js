const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/main.js',
  output: {
    libraryTarget: 'umd',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  performance: {
    hints: false
  },
  module: {
    rules: [{
        test: /.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|jpeg|gif)\w*/,
        use: [{
          loader: 'url-loader'
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
};
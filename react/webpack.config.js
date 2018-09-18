const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
  },

  output: {
    filename: '[name].js',
    publicPath: '/assets/',
    path: path.resolve(__dirname, 'public'),
  },

  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ],
  },

  // plugins: [
  //   new ExtractTextPlugin("style.css"),
  //   // new CleanWebpackPlugin([PUBLIC_PATH]),
  // ],
};

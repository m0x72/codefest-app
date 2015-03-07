var webpack = require('webpack');

module.exports = {
  devtool: "eval",
  entry: {
    app: [
      "webpack-dev-server/client?http://0.0.0.0:8080",
      "webpack/hot/only-dev-server",
      "./src/scripts/main.js"
    ]
  },
  output: {
    path: "./build",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    modulesDirectories: ['node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "react-hot!jsx",
        exclude: /node_modules/
      },
      // the url-loader uses DataUrls. 
      // the file-loader emits files. 
      { test: /\.woff$/,   loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.woff2$/,   loader: "url-loader?limit=10000&minetype=application/font-woff2" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" },

      {
        test: /\.scss$/,
        loader: "style!css!sass?outputStyle=expanded"
      },

      {
        test: /\.(html|png)$/,
        loader: "file?name=[path][name].[ext]&context=./src"
      }
    ]
  }
};

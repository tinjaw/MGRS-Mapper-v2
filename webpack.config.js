const WebpackMonitor = require('webpack-monitor');

module.exports = [{
  entry: ['./app.scss', './app.js', './mdcComponents.js'],
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules'],
            },
          },
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-object-assign'],
        },
      },
    ],
  },
  performance: {
    // ! This just hides the file size warnings in the console
    hints: false,
  },
  // plugins: [
  //   new WebpackMonitor({
  //     capture: true,
  //     launch: true,
  //     port: 39875,
  //   }),
  // ],
}];

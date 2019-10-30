const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const CompressionPlugin = require('compression-webpack-plugin');


module.exports = [{
  entry: ['./src/css/app.scss', './src/js/app.js', './src/js/mdcComponents.js', './src/js/pushbar.js', './src/js/moveSymbol.js', './src/js/map.js'],
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
  devtool: 'inline-source-map',
  plugins: [
    new BundleAnalyzerPlugin(),
    // https://medium.com/@rajaraodv/two-quick-ways-to-reduce-react-apps-size-in-production-82226605771a
    // new CompressionPlugin({
    //   asset: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10240,
    //   minRatio: 0.8,
    // }),
  ],
}];
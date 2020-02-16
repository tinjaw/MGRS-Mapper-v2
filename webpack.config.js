const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const CompressionPlugin = require('compression-webpack-plugin');


module.exports = [{
  entry: ['./src/css/app.scss', './src/js/app.js', './src/js/ui/mdcComponents.js', './src/js/ui/pushbar.js', './src/js/ui/moveSymbol.js', './src/js/map/map.js'],
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
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
      {
        test: /\.png$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  performance: {
    // ! This just hides the file size warnings in the console
    hints: false,
  },
  // devtool: 'inline-source-map',
  //! eval is the best performance for builds, use inline-source-maps for better debugging
  devtool: 'eval',
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

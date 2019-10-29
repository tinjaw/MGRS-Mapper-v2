const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const CompressionPlugin = require('compression-webpack-plugin');
// require('babel-core').transform('code', {
//   plugins: ['@babel/plugin-transform-async-to-generator'],
// });


module.exports = [{
  entry: ['@babel/polyfill', './src/css/app.scss', './src/js/app.js', './src/js/mdcComponents.js', './src/js/pushbar.js', './src/js/moveSymbol.js', './src/js/map.js'],
  output: {
    filename: 'bundle.js',
  },
  // resolve: {
  //   alias: {
  //     'mapbox-gl': 'mapbox-gl/dist/mapbox-gl.js',
  //     '@mapbox/mapbox-gl-draw': '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.js',
  //   },
  // },
  module: {
    // noParse: /(mapbox-gl)\.js$/,
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
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
        exclude: /mapbox-gl/,
        query: {
          // presets: ['es2015'],
          presets: ['@babel/preset-env'],
          plugins: ['transform-object-assign', '@babel/plugin-transform-async-to-generator'],
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

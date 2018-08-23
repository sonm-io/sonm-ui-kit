const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const mode = process.env.NODE_ENV;
const isDev = mode === 'development';
const SRC = path.resolve(__dirname, 'src');
const DIST = path.resolve(__dirname, 'dist');

module.exports = {
  entry: {
    main: path.join(SRC, 'index.tsx'),
  },
  output: {
    filename: '[name].js',
    path: DIST,
  },
  watch: isDev,
  mode: mode || 'production',
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              localIdentName: isDev ? '[name]__[local]__[hash:base64:5]' : '[hash:base64:5]'
            },
          },
          { loader: 'stylus-loader' }
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      chunks: ['main'],
      template: path.join(SRC, 'assets/index_template.html')
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  devServer: {
    contentBase: DIST,
    port: 4000,
    hot: true,
  },
};

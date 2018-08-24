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
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: isDev ? '[name]__[local]__[hash:base64:5]' : '[hash:base64:5]',
            },
          },
          { loader: 'stylus-loader' },
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
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['url-loader?limit=10000', 'img-loader'],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      chunks: ['main'],
      template: path.join(SRC, 'assets/index_template.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      components: path.resolve(SRC, '/components'),
      assets: path.resolve(SRC, '/assets'),
      common: path.resolve(SRC, '/common'),
    },
  },
  devServer: {
    contentBase: DIST,
    port: 4000,
    hot: true,
  },
};

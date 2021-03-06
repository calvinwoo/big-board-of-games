const path = require('path');
/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
/* eslint-enable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');

const nodeModules = path.join(process.cwd(), 'node_modules');

module.exports = config => ({
  entry: {
    [config.bundleName]: [
      process.env.PHENOMIC_ENV !== 'static' &&
        require.resolve('webpack-hot-middleware/client'),
      process.env.PHENOMIC_ENV !== 'static' &&
        require.resolve('react-hot-loader/patch'),
      './src/StaticApp.js',
    ].filter(item => item),
    GameEntry: './src/GameEntry.js',
  },
  output: {
    publicPath: '/', // @todo make this dynamic
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
        options: {
          babelrc: false,
          presets: [require.resolve('@phenomic/babel-preset')],
          plugins: [require.resolve('react-hot-loader/babel')],
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: require.resolve('style-loader'),
          use: require.resolve('css-loader'),
        }),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: process.env.PHENOMIC_ENV !== 'static',
    }),
    process.env.PHENOMIC_ENV !== 'static' &&
      new webpack.HotModuleReplacementPlugin(),
    process.env.NODE_ENV === 'production' &&
      new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Big Board of Games',
      filename: 'game/index.html',
      chunks: ['GameEntry'],
    }),
  ].filter(item => item),

  resolve: {
    // react-native(-web) | react-primitives
    extensions: ['.web.js', '.js', '.json'],
    alias: {
      'react-native': 'react-native-web',

      // to ensure a single module is used
      react: path.resolve(path.join(nodeModules, 'react')),
      'react-dom': path.resolve(path.join(nodeModules, 'react-dom')),
      'react-router': path.resolve(path.join(nodeModules, 'react-router')),
    },
  },

  // eslint-disable-next-line max-len
  // https://github.com/facebookincubator/create-react-app/blob/fbdff9d722d6ce669a090138022c4d3536ae95bb/packages/react-scripts/config/webpack.config.prod.js#L279-L285
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
});

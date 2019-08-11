const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const increaseSpecificity = require('postcss-increase-specificity');
const JavaScriptObfuscator = require('webpack-obfuscator');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const devMode = process.env.NODE_ENV !== 'production';

const publicDir = path.join(__dirname, 'public');
const distDir = path.join(__dirname, 'embed-build');

const defaultConfig = {
  mode: process.env.NODE_ENV || 'development',
  devServer: {
    contentBase: publicDir,
    port: 5000
  },
  plugins: [
    // new CleanWebpackPlugin({protectWebpackAssets: false}),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    }),
    new CopyPlugin([{ from: 'public', to: '.' }]),
    devMode ? null : new JavaScriptObfuscator()
  ].filter(i => i),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          // fallback to style-loader in development
          // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          'cssimportant-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                increaseSpecificity({
                  stackableRoot: '.cleanslate',
                  repeat: 1
                })
              ],
              sourceMap: devMode
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};

module.exports = [
  {
    ...defaultConfig,
    entry: './src/outputs/embed.js',
    output: {
      path: distDir,
      publicPath: '/',
      filename: 'widget.js',
      library: 'InterDrop',
      libraryExport: 'default',
      libraryTarget: 'window'
    }
  }
];

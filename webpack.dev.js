const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    open: true,
    port: 3000,
    historyApiFallback: true
  },
  mode: 'development',
});

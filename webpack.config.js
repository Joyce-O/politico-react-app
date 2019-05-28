export const devtool = 'inline-source-map';
export const entry = './src/index.js';
export const output = {
  path: `${__dirname}/dist`,
  publicPath: '/',
  filename: 'bundle.js'
};
export const devServer = {
  contentBase: './dist',
};
export const module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader']
    }
  ]
};

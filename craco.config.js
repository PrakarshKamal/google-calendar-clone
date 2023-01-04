// module.exports = {
//   style: {
//     postcss: {
//       plugins: [require("tailwindcss"), require("autoprefixer")],
//     },
//   },
// };

const path = require('path')

module.exports = {
  entry: './js/app.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader' }],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
}

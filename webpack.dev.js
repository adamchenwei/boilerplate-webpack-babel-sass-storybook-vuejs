// // Hum... dont really need dev, since I really just need storybook!
// const merge = require('webpack-merge');
// const common = require('./webpack.common.js');

// module.exports = merge(common, {
//   mode: 'development',
//   devtool: 'inline-source-map',
//   devServer: {
//     contentBase: './dist'
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new VueLoaderPlugin(),
//     new HtmlWebpackPlugin({
//       filename: 'index.html',
//       template: 'index.html',
//       inject: true
//     }),
//     new CopyWebpackPlugin([{
//       // NOTE: it does not really do anything, unless we have a asset folder, that needed no compression
//       from: './static/',
//       to: './static/',
//       toType: 'dir'
//     }]),
//   ],
// })

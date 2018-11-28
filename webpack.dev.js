// NOTE: TICKET#-???: Dont really need dev, since I really just need storybook, for now,
// But keeping this structure for when it needed to build independent application in the future
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

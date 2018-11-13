const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry: {
    library: './src/library.js',
    HelloComp: './src/components/HelloComponent/HelloComponent.vue',
    Bye: './src/components/ByeComponent/ByeComponent.vue',
    MiniC: './src/components/MiniC/MiniC.vue'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])

    // Do not really need it as no live app is here
    // new HtmlWebpackPlugin({
    //   title: 'Production'
    // })
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: {
    'vue': {
      root: 'vue',
      commonjs2: 'vue',
      commonjs: 'vue',
      amd: 'vue',
      umd: 'vue'
    },
    'vue-router': {
      root: 'vue-router',
      commonjs2: 'vue-router',
      commonjs: 'vue-router',
      amd: 'vue-router',
      umd: 'vue-router'
    }
    // ,
    // 'style-loader': {
    //   root: 'style-loader',
    //   commonjs2: 'style-loader',
    //   commonjs: 'style-loader',
    //   amd: 'style-loader',
    //   umd: 'style-loader'
    // },
    // 'vue-hot-reload-api': {
    //   root: 'vue-hot-reload-api',
    //   commonjs2: 'vue-hot-reload-api',
    //   commonjs: 'vue-hot-reload-api',
    //   amd: 'vue-hot-reload-api',
    //   umd: 'vue-hot-reload-api'
    // },
    // 'vue-loader': {
    //   root: 'vue-loader',
    //   commonjs2: 'vue-loader',
    //   commonjs: 'vue-loader',
    //   amd: 'vue-loader',
    //   umd: 'vue-loader'
    // }
  }
}

const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    library: './src/library.js',
    HelloComp: './src/components/HelloComponent/HelloComponent.vue',
    Bye: './src/components/ByeComponent/ByeComponent.vue',
    MiniC: './src/components/MiniC/MiniC.vue',
    TestAb: './src/components/test-ab/test-ab.vue',
    'library-global-styles': './src/library-global-styles.scss'
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
    path: path.resolve(__dirname, 'dist'),
    library: 'library',
    libraryTarget: 'umd'
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
  }
}

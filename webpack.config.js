const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'stencil/index.js')
  },
  output: {
    filename: 'spxWebpack.js',
    path: path.resolve(__dirname, 'assets/js')
  },
  plugins: [
    new CopyPlugin(
      [
        {
          from: path.resolve(__dirname, 'assets'),
          to: path.resolve(__dirname, '../../../../../releases/spx-release/assets')
        },
        {
          from: path.resolve(__dirname, 'includes'),
          to: path.resolve(__dirname, '../../../../../releases/spx-release/includes')
        },
        {
          from: path.resolve(__dirname, 'spx.php'),
          to: path.resolve(__dirname, '../../../../../releases/spx-release')
        },
        {
          from: path.resolve(__dirname, 'readme.txt'),
          to: path.resolve(__dirname, '../../../../../releases/spx-release')
        }
      ]
    ),
    new CleanWebpackPlugin({
      dry: false,
      cleanOnceBeforeBuildPatterns: [
        path.resolve(__dirname, '../../../../../releases/spx-release/assets/*'),
        path.resolve(__dirname, '../../../../../releases/spx-release/includes/*'),
        path.resolve(__dirname, '../../../../../releases/spx-release/readme.txt'),
        path.resolve(__dirname, '../../../../../releases/spx-release/spx.php')],
      cleanAfterEveryBuildPatterns: [
        path.resolve(__dirname, '../../../../../releases/spx-release/assets/js/components/host.config.json'),
        path.resolve(__dirname, '../../../../../releases/spx-release/assets/js/spxWebpack.js'),
        path.resolve(__dirname, '../../../../../releases/spx-release/assets/.DS_STORE'),
        path.resolve(__dirname, '../../../../../releases/spx-release/.DS_STORE')
      ],
      dangerouslyAllowCleanPatternsOutsideProject: true
    })
  ]
}

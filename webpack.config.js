const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'stencil/index.js'),
    },
    output: {
        filename: 'spxWebpack.js',
        path: path.resolve(__dirname, 'assets/js')
    },
    plugins: [
        new CopyPlugin(
            [
                {
                    from: path.resolve(__dirname, 'assets/js/build'),
                    to: path.resolve(__dirname, '../../../../../releases/spx-release/assets/js/build'),
                },
                {
                    from: path.resolve(__dirname, 'includes'),
                    to: path.resolve(__dirname, '../../../../../releases/spx-release/includes'),
                },
                {
                    from: path.resolve(__dirname, 'spx.php'),
                    to: path.resolve(__dirname, '../../../../../releases/spx-release'),
                },
                {
                    from: path.resolve(__dirname, 'readme.txt'),
                    to: path.resolve(__dirname, '../../../../../releases/spx-release'),
                },
            ]
        ),
        new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'release')],
            }
        ),
    ],
};

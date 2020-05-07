const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'stencil/index.js'),
    },
    output: {
        filename: 'spx.js',
        path: path.resolve(__dirname, 'js')
    },
    plugins: [
        new CopyPlugin(
            [
                {
                    from: path.resolve(__dirname, 'js/build'),
                    to: path.resolve(__dirname, 'release/js/build'),
                },
                {
                    from: path.resolve(__dirname, 'php'),
                    to: path.resolve(__dirname, 'release/php'),
                },
                {
                    from: path.resolve(__dirname, 'spx.php'),
                    to: path.resolve(__dirname, 'release'),
                },
            ]
        ),
        new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, 'release')],
            }
        ),
    ],
};

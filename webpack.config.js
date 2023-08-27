const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    target: 'node',
    entry: './sample/TBBLoadtest.js',
    output: {
        path: __dirname + "/dist/",
        filename: "[name].js",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                "config.json"
            ]
        })
    ],
    externals: {
        'node-fetch': 'node-commonjs node-fetch',
    },
    optimization: {
        minimize: false,
        usedExports: false,
        concatenateModules: false
    }
};



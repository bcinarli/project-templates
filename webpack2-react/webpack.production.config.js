/**
 * @author Bilal Cinarli
 */

'use strict';

const webpack = require('webpack');
const config  = require('./app.config');

let StyleLintPlugin = require('stylelint-webpack-plugin');

const prodConfig = {
    context: config.source,
    entry:   {
        'js':  [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080/',
            'webpack/hot/only-dev-server',
            './scripts/index.js'
        ],
        'lib': config.libs
    },
    output:  {
        filename:   config.filenames.js,
        path:       config.paths.app,
        publicPath: config.paths.public
    },
    module:  {
        rules: [
            config.rules.fontUrl,
            config.rules.fontFile,
            config.rules.images,
            config.rules.eslint,
            config.rules.babel,
            config.rules.extract
        ]
    },
    resolve: {
        modules:    [
            'node_modules',
            'bower_components',
            config.source
        ],
        extensions: ['.js', '.jsx', '.json', '.scss', '.css']
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new StyleLintPlugin(),
        config.extractCSS,
        new webpack.DefinePlugin({
            '__DEV__':     false,
            '__PROD__':    true,
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            include:  /\.js$/,
            minimize: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:      'lib',
            filename:  config.filenames.lib,
            minChunks: Infinity
        })
    ]
};

module.exports = prodConfig;